const { endPoints } = require("./Endpoints");
const {
  formatResponse,
  formatAlbumResponse,
  formatPlaylistResponse,
} = require("./utils/Formatter");

const https = require("https");
const axios = require("axios");
const getResponse = require("./utils/Fetch");
const songDownloader = require("./utils/Downloader");
let params = "";

const getHomePage = async (req, res) => {
  let languages = req.query.lang.split("_");
  const result = await getResponse(endPoints.homeData, languages);
  res.json(result);
};

const getSongsFromSearch = async (req, res) => {
  const { query, minified } = req.query;
  params = `${endPoints.getResults}&q=${query}`;
  let result = await getResponse(params);
  if (minified == "true") {
    var responseArray = [];
    for (var i = 0; i < result.results.length; i++) {
      var response = formatResponse(result.results[i]);
      responseArray.push(response);
    }
    res.send(responseArray);
  } else {
    res.send(result);
  }
};

const getAlbumFromID = async (req, res) => {
  const { query, minified } = req.query;
  params = `${endPoints.albumDetails}&cc=in&includeMetaTags=1&albumid=${query}`;
  const response = await getResponse(params);
  if (minified == "true") {
    res.send(formatAlbumResponse(response));
  } else {
    res.send(response);
  }
};

const fetchResultsFromSearch = async (req, res) => {
  let { query, minified } = req.query;
  params = `${endPoints.search}&cc=in&includeMetaTags=1&query=${query}`;
  const response = await getResponse(params);
  res.send(response);
};

const getSongFromID = async (req, res) => {
  const { id, download, minified } = req.query;
  params = `${endPoints.songDetails}&pids=${id}`;
  const response = await getResponse(params);
  if (minified == "true") {
    let formattedResponse = formatResponse(response["songs"][0]);
    res.send(formattedResponse);
  } else {
    res.send(response);
  }
};

const getPlaylistFromID = async (req, res) => {
  const { query, minified } = req.query;
  params = `${endPoints.playlistDetails}&cc=in&_marker=0%3F_marker%3D0&listid=${query}`;
  const response = await getResponse(params);
  if (minified == "true") {
    let formattedPlaylistResponse = formatPlaylistResponse(response);
    res.send(formattedPlaylistResponse);
  } else {
    res.send(response);
  }
};

const downloadSongFromLink = (req, res) => {
  const { url, fileName } = req.query;
  https.get(url, async (file) => {
    res.set(
      "Content-disposition",
      "attachment; filename=" + encodeURI(fileName)
    );
    res.set("Content-Type", "audio/m4a");
    file.pipe(res);
  });
  console.log(fileName);
};

module.exports = {
  getHomePage,
  getSongsFromSearch,
  getAlbumFromID,
  getSongFromID,
  fetchResultsFromSearch,
  getPlaylistFromID,
  downloadSongFromLink,
};
