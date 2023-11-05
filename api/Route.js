const router = require("express").Router();
const {
  getHomePage,
  songDetails,
  searchAlbum,
  getPlaylist,
  songDownloader,
  getSongFromID,
} = require("./Controller");

// Routes
router.get("/", getHomePage);
router.get("/song", songDetails);
router.get("/song-id", getSongFromID);
router.get("/album", searchAlbum);
router.get("/playlist", getPlaylist);

module.exports = router;
