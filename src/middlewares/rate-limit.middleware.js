const redis = require("redis");
const { HTTP_STATUS_TOO_MANY_REQUESTS } = require("http2").constants;

const redisClient = redis.createClient({
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || "localhost",
  password: process.env.REDIS_PASSWORD || "@@123456",
});

const MIN_ALLOW_SECONDS = 5;

module.exports = async function rateLimitMiddleware(req, res, next) {
  const CACHE_KEY = `ratelimit:ip:${req.ip}`;

  redisClient.get(CACHE_KEY, (err, attemps) => {
    if (err) {
      return next(err);
    }

    if (!attemps) {
      redisClient.set(CACHE_KEY, new Date().toUTCString(), (err) => {
        if (err) {
          return next(err);
        }
        next();
      });
    } else {
      const lastAttempsDataTime =
        (new Date().getTime() - new Date(attemps).getTime()) / 1000;

      if (lastAttempsDataTime < MIN_ALLOW_SECONDS) {
        return res
          .status(HTTP_STATUS_TOO_MANY_REQUESTS)
          .send("Too many request");
      }

      redisClient.set(CACHE_KEY, new Date().toUTCString(), (err) => {
        if (err) {
          return next(err);
        }
        next();
      });
    }
  });
};
