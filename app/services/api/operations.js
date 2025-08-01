const apiClient = require("./apiClient.js");

// Outsource doc: API Name: GetOperations
const getOperations = async (requestBody, customHeaders = {}) => {
  const res = await apiClient.post("/api/report/GetOperations", requestBody, {
    headers: {
      ...customHeaders,
    },
  });
  return res.data;
};

// Outsource doc: API Name: GetOperationSummary
const getOperationSummary = async (requestBody, customHeaders = {}) => {
  const res = await apiClient.post(
    "/api/report/GetOperationSummary",
    requestBody,
    {
      headers: {
        ...customHeaders,
      },
    }
  );
  return res.data;
};

module.exports = { getOperations, getOperationSummary };
