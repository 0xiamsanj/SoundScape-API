const { baseUrl, endPoints, apiStr } = require("./Endpoints");
const { formatResponse } = require("./utils/Formatter");
const axios = require("axios");
const searchUrl = baseUrl + apiStr;
let params;
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

const getHomePage = async (req, res) => {
  // console.log("Home"+searchUrl+endPoints.homeData)
  const result = await getResponse(endPoints.homeData, [
    "English",
    "Tamil",
    "Hindi",
  ]);
  res.json(result);
};

const songDetails = async (req, res) => {
  const { query } = req.query;
  params = `${endPoints.getResults}&q=${query}`;

  const result = await getResponse(params);
  var resu = [];
  for (var i = 0; i < result.results.length; i++) {
    resu.push(formatResponse(result.results[i]));
  }
  res.send(resu);
};

const getLyrics = async (id) => {
  params = `${endPoints.lyrics}&lyrics_id=${id}`;
  const result = await getResponse(params);
  console.log("Rws" + result);
  return result;
};

module.exports = {
  getResponse,
  getHomePage,
  songDetails,
  getLyrics,
};
