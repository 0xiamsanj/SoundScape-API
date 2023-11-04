const CryptoJS = require("crypto-js");
const decryptUrl = (url) => {
  const key = "38346591";

  const urlBytes = CryptoJS.enc.Base64.parse(url);

  const decryptConfig = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Hex.parse("0000000000000000"),
    format: CryptoJS.format.OpenSSL,
  };

  const decryptedBytes = CryptoJS.DES.decrypt(
    { ciphertext: urlBytes },
    CryptoJS.enc.Utf8.parse(key),
    decryptConfig
  );

  const decryptedUrl = CryptoJS.enc.Utf8.stringify(decryptedBytes);
  const modifiedUrl = decryptedUrl.replace(/_96\.mp4/g, "_320.mp4");
  return modifiedUrl;
};

module.exports = decryptUrl;
