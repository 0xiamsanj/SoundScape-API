## SoundScape 



#### JioSaavn API wrapper written in JS (Node.js and Express.js) 

 ---
###### **NOTE:** This API fetches data in 2 versions according to the query data parameters passed in the endpoints 

 ---

### **Features**:
##### Currently the API can get the following details for a specific song in JSON format:
- **Song Name**
- **Singer Name**
- **Album Name**
- **Album URL**
- **Artists**
- **Duration of Song**
- **Song Thumbnail URL**
- **Song Language**
- **Download Link**
- **Release Year**
- **Album Art Link (Max Resolution)**
- **Lyrics**


```json
{
    "id": "Paem2Kf1",
    "320kbps": "true",
    "title": "Starboy",
    "subtitle": "The Weeknd ft. Daft Punk - Starboy",
    "type": "song",
    "album": "Starboy",
    "album_url": "https://www.jiosaavn.com/album/starboy/44b7DBDpUq8_",
    "album_id": "3084994",
    "copyright_text": "℗ 2016 The Weeknd XO, Inc., Manufactured and Marketed by Republic Records, a Division of UMG Recordings, Inc.",
    "artist": [
            "The Weeknd" 
        ],
    "language": "english",
    "duration": "230",
    "year": "2016",
    "has_lyrics": "false",
    "song_url": "https://aac.saavncdn.com/372/38de816bee7a6df4607f1f0e6822c5bc_320.mp4",
    "image": "https://c.saavncdn.com/372/Starboy-English-2016-500x500.jpg",
    "explicit_content": false
}
```

### **Installation**:

Clone this repository using
```sh
$ git clone https://github.com/0xiamsanj/SoundScape-API
```
Enter the directory and install all the requirements using
```sh
$ npm install 
```
Run the app using
```sh
$ node index.js
```

## **Usage**:
As this API fetches data in 2 versions: simplified and detailed.  Here **&minified=true** means JSON response in simplified version. You also can go with **&minified=false** for detailed response

---
### Universal Endpoint: (Provides trending albums, playlist in the regional languages)
```sh
http://localhost:5500/?lang=language1_language2_language3
```
*Example:* 
```sh
http://localhost:5500?lang=english_tamil
```

### Universal Search Endpoint: (Provides all albums, playlist related to the query)
```sh
http://localhost:5500/search?query=<your-query-here>
```
*Example:* 
```sh
http://localhost:5500/search?query=Starboy
```

### Song Search Endpoint:
```sh
http://localhost:5500/song/?query=<song-name-here>&minified=true
```
*Example:* 
```sh
http://localhost:5500/song?query=Starboy&minified=true
```

---

### Playlist URL Endpoint:
```sh
http://localhost:5500/playlist/?query=<playlist-id/url>&minified=true
```
*Example:* 
```sh
http://localhost:5500/playlist?query=7386899&minified=true
```

---

### Album URL Endpoint:
```sh
http://localhost:5500/album?query=<album_url/id>&minified=true
```
*Example:* 
```sh
http://localhost:5500/album?query=49428469&minified=true
```


---

### Song URL Endpoint: 
```sh
http://localhost:5500/song-id?query=<song_url/id>&minified=true
```
*Example:* 
```sh
http://localhost:5500/song-id?id=lkaNaSDX&minified=true
```

---




