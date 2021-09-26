const comapnyService = require("./company.service");
const { Router } = require("express");
const { HTTP_STATUS_OK } = require("http2").constants;

const router = Router();

router.get("/api/companies", async (_, res) => {
  const companies = await comapnyService.list();
  res.status(HTTP_STATUS_OK).json(companies);
});

module.exports = router;
