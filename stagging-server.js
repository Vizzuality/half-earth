const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const port = process.env.PORT || 8080;

const baseDir = path.join(__dirname, 'public');
const indexPath = path.join(baseDir, 'index.html');

express()
  .use(serveStatic(baseDir))
  .get('*', (req, res) => res.sendFile(indexPath))
  .listen(port);

console.log(`serving from ${port}`);
