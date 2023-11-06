const { baseUrl, endPoints, apiStr } = require("./Endpoints");
const {
  formatResponse,
  formatAlbumResponse,
  formatPlaylistResponse,
} = require("./utils/Formatter");

const downloadSong = require("./utils/Downloader");
const axios = require("axios");
const decryptUrl = require("./utils/Decoder");
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

const getSongFromID = async (req, res) => {
  const { id, download, minified } = req.query;
  params = `${endPoints.songDetails}&pids=${id}`;
  const response = await getResponse(params);
  if (minified == "true") {
    let formattedResponse = formatResponse(response["songs"][0]);
    res.send(formattedResponse);
    if (download) {
      var songName = `${formattedResponse["title"]}`;
      downloadSong(songName, formattedResponse["song_url"]);
    }
  } else {
    res.send(response);
    if (download) {
      var songName = `${response["songs"][0]["title"]}`;
      let songURL = decryptUrl(
        response["songs"][0]["more_info"]["encrypted_media_url"]
      );
      downloadSong(songName, songURL);
    }
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

module.exports = {
  getHomePage,
  getSongsFromSearch,
  getAlbumFromID,
  getSongFromID,
  getPlaylistFromID,
};
