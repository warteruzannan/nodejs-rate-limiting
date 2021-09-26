const comapanyRouter = require("../app/companies/comapny.route");

module.exports = function registerRoutes(app) {
  app.use(comapanyRouter); // TODO: read dynamically
};
