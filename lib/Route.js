const router = require("express").Router();
const {
  getHomePage,
  getAlbumFromID,
  getSongFromID,
  getPlaylistFromID,
  getSongsFromSearch,
  fetchResultsFromSearch,
  downloadSongFromLink,
} = require("./Controller");
const path = require("path")


// Routes
router.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get("/home", getHomePage);
router.get("/song", getSongsFromSearch);
router.get("/song-id", getSongFromID);
router.get("/album", getAlbumFromID);
router.get("/search", fetchResultsFromSearch);
router.get("/playlist", getPlaylistFromID);
router.get("/download", downloadSongFromLink);

module.exports = router;
