// const base_url =
//   "https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=";

// const song_details_base_url =
//   "https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=";

// const album_details_base_url =
//   "https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&albumid=";

// const playlist_details_base_url =
//   "https://www.jiosaavn.com/api.php?__call=playlist.getDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&listid=";

// const lyrics_base_url =
//   "https://www.jiosaavn.com/api.php?__call=lyrics.getLyrics&ctx=web6dot0&api_version=4&_format=json&_marker=0%3F_marker%3D0&lyrics_id=";

const baseUrl = "https://www.jiosaavn.com";
const apiStr = "/api.php?_format=json&_marker=0&api_version=4&ctx=web6dot0";

const endPoints = {
  homeData: "__call=webapi.getLaunchData",
  search: "__call=autocomplete.get",
  topSearches: "__call=content.getTopSearches",
  lyrics: "__call=lyrics.getLyrics",
  fromToken: "__call=webapi.get",
  featuredRadio: "__call=webradio.createFeaturedStation",
  artistRadio: "__call=webradio.createArtistStation",
  entityRadio: "__call=webradio.createEntityStation",
  radioSongs: "__call=webradio.getSong",
  songDetails: "__call=song.getDetails",
  playlistDetails: "__call=playlist.getDetails",
  albumDetails: "__call=content.getAlbumDetails",
  getResults: "__call=search.getResults",
  albumResults: "__call=search.getAlbumResults",
  artistResults: "__call=search.getArtistResults",
  playlistResults: "__call=search.getPlaylistResults",
  getReco: "__call=reco.getreco",
};

module.exports = {
  baseUrl,
  apiStr,
  endPoints,
};
