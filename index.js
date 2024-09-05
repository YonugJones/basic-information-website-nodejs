import fs from 'node:fs';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  fs.readFile('./pages/index.html', (err, data) => {
    if (err) {
      res.status(500).send('Server Error')
    } else {
      res.setHeader('Content-Type', 'text/html')
      res.status(200).send(data);
    }
  });
});

app.get('/about', (req, res) => {
  fs.readFile('./pages/about.html', (err, data) => {
    if (err) {
      res.status(500).send('Server Error')
    } else {
      res.setHeader('Content-Type', 'text/html')
      res.status(200).send(data);
    }
  });
});

app.get('/contact-me', (req, res) => {
  fs.readFile('./pages/contact-me.html', (err, data) => {
    if (err) {
      res.status(500).send('Server Error');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(data);
    }
  });
});

app.use((req, res) => {
  fs.readFile('./pages/404.html', (err, data) => {
    if (err) {
      res.status(500).send('Server Error')
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.status(404).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Port running at http://localhost:${PORT}/`);
})