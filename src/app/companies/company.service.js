const companies = require("../../db/companies.json");

module.exports = {
  list: async () => {
    return companies;
  },
};
