const { baseUrl, endPoints, apiStr } = require("../config/endpoints");
const axios = require("axios");
const searchUrl = baseUrl + apiStr;
let params;
const getResponse = async (params, lang = ["English"]) => {
  console.log(searchUrl);
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

const getHomePage = async (req, res) => {
  // console.log("Home"+searchUrl+endPoints.homeData)
  const result = await getResponse(endPoints.homeData, [
    "English",
    "Tamil",
    "Hindi",
  ]);
  res.json(result);
};



module.exports = {
  getResponse,
  getHomePage,
  songDetails,
};
