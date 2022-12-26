const express = require('express');
const formidable = require('formidable');
const app = express();

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000 ...');
});

app.get('/', (req, res) => {
    res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

let lastFilepath = '';
app.post('/upload', (req, res, next) => {
    const form = formidable({
        multiples: true,
        uploadDir: './files',
    });

    form.parse(req, (err, fields, files) => {
        files.files.forEach(f => {
            lastFilepath = f.filepath;
        });
        res.json({fields, files});
    });
});

app.get('/download', (req, res) => {
    res.download(lastFilepath);
});