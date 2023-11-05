const https = require("https");
const fs = require("fs");

// URL of the image
const downloadSong = (name,url) => {
//   const url = "https://www.tutorialspoint.com/cg/images/cgbanner.jpg";

  https.get(url, (res) => {
    const path = `${name}.m4a`;
    const writeStream = fs.createWriteStream(path);

    res.pipe(writeStream);

    writeStream.on("finish", () => {
      writeStream.close();
      console.log(`${path} : Download Completed!`);
    });
  });
};


module.exports = downloadSong