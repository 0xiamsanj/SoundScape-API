const router = require("express").Router();
const {
  getHomePage,
  getAlbumFromID,
  getSongFromID,
  getPlaylistFromID,
  getSongsFromSearch,
  fetchResultsFromSearch,
} = require("./Controller");

// Routes
router.get("/", getHomePage);
router.get("/song", getSongsFromSearch);
router.get("/song-id", getSongFromID);
router.get("/album", getAlbumFromID);
router.get("/search", fetchResultsFromSearch);
router.get("/playlist", getPlaylistFromID);

module.exports = router;
