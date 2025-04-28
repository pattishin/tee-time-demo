let express = require('express');
let app = express();

let port = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

//Initialize file system module
let fs = require('fs');

// Middleware
app.use(express.static('levels'));
app.use(express.json());

app.get('/levels', (req, res) => {
 fs.readdir('./levels', (err, files) => {
   if (err) {
     res.status(500).send('Error reading level files');
   } else {
     res.json({files});
   }
 });
});

//Run server at port
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
