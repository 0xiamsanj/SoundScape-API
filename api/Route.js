const router = require("express").Router();
const { getHomePage, songDetails, searchAlbum, getPlaylist } = require("./Controller");
router.get("/", getHomePage);
router.get("/song", songDetails);
router.get("/album", searchAlbum);
router.get("/playlist", getPlaylist);

module.exports = router;
