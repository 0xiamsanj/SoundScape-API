const { baseUrl, endPoints, apiStr } = require("./Endpoints");
const {
  formatResponse,
  formatAlbumResponse,
  formatPlaylistResponse,
} = require("./utils/Formatter");

const downloadSong = require("./utils/Downloader");

const axios = require("axios");
const { response } = require("express");
const searchUrl = baseUrl + apiStr;
let params = "";

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
  const result = await getResponse(endPoints.homeData, [
    "English",
    "Tamil",
    "Hindi",
  ]);
  res.json(result);
};

const getSongsFromSearch = async (req, res) => {
  const { query } = req.query;
  params = `${endPoints.getResults}&q=${query}`;

  const result = await getResponse(params);
  var responseArray = [];
  for (var i = 0; i < result.results.length; i++) {
    var response = formatResponse(result.results[i]);
    var fileName = `${response.title} - ${response.artist[0]}`;
    downloadSong(fileName, response["song_url"]);
    responseArray.push(response);
  }
  res.send(responseArray);
};

const getAlbumFromID = async (req, res) => {
  const { query } = req.query;
  params = `${endPoints.albumDetails}&cc=in&includeMetaTags=1&albumid=${query}`;
  const response = await getResponse(params);
  // console.log(response)
  console.log(formatAlbumResponse(response));
  res.send(formatAlbumResponse(response));
};

const getSongFromID = async (req, res) => {
  const { id, download } = req.query;
  params = `${endPoints.songDetails}&pids=${id}`;
  const response = await getResponse(params);
  const formattedResponse = formatResponse(response["songs"][0]);
  res.send(formattedResponse);
  if (download) {
    var songName = `${formattedResponse["title"]}`;
    downloadSong(songName, formattedResponse["song_url"]);
  }
};

const getPlaylistFromID = async (req, res) => {
  const query = req.query.query;
  params = `${endPoints.playlistDetails}&cc=in&_marker=0%3F_marker%3D0&listid=${query}`;
  const response = await getResponse(params);
  res.send(formatPlaylistResponse(response));
};

module.exports = {
  getHomePage,
  getSongsFromSearch,
  getAlbumFromID,
  getSongFromID,
  getPlaylistFromID,
};
