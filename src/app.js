const express = require("express");
const rateLimitMiddleware = require("./middlewares/rate-limit.middleware");
const registerRoutes = require("./routes/register-routes");

const app = express();

app.use(rateLimitMiddleware);

registerRoutes(app);

module.exports = app;
