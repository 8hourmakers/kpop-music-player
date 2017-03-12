const express = require('express');
const path = require('path');
const cors = require('cors');
const ms = require('mediaserver');

const app = express();

const getMusicPathname = musicId => path.resolve(__dirname, '../musics/', `m${musicId}.mp3`);

app.set('port', 7005);
app.use(cors());

app.get('/music/:id', (req, res) => {
    const musicPathname = getMusicPathname(req.params.id);

    ms.pipe(req, res, musicPathname);
});

module.exports = app;
