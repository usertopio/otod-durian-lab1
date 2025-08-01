const mysql = require("mysql2");

const connectionDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "otod-test",
});

const substanceUsageSummaryByCropFields = [
  "cropYear",
  "provinceName",
  "substance",
  "operMonth",
  "totalRecords",
];

const substanceUsageSummaryByMonthFields = [
  "cropYear",
  "provinceName",
  "substance",
  "operMonth",
  "totalRecords",
];

module.exports = {
  connectionDB,
  substanceUsageSummaryByCropFields,
  substanceUsageSummaryByMonthFields,
};
