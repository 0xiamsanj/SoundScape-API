const axios = require("axios");
const { apiStr, baseUrl } = require("../Endpoints");

const searchUrl = baseUrl + apiStr;

const getResponse = async (params, lang = ["English"]) => {
  var preferredLanguages = lang.map((x) => {
    return x.toLowerCase();
  });
  const result = await axios.get(searchUrl + "&" + params, {
    headers: {
      cookie: `L=${preferredLanguages.join("%2C")}`,
    },
  });

  if (result) {
    return result.data;
  } else {
    return result.error;
  }
};

module.exports = getResponse;
