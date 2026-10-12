/**
 * Dental ISA - Servidor Web Local y Producción
 * Servidor estático nativo en Node.js (cero dependencias externas requeridas)
 * Soporta manejo automático de 404 para cualquier ruta no existente.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3055;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // Manejo de métodos GET y HEAD
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Method Not Allowed');
  }

  // Parsear URL de manera segura
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let safePath = path.normalize(decodeURIComponent(parsedUrl.pathname)).replace(/^(\.\.[\/\\])+/, '');

  if (safePath === '/' || safePath === '') {
    safePath = '/index.html';
  }

  let filePath = path.join(PUBLIC_DIR, safePath);

  // Verificar existencia de archivo o carpeta
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      fs.stat(filePath, (errIndex, statsIndex) => {
        if (!errIndex && statsIndex.isFile()) {
          serveFile(filePath, 200, res);
        } else {
          serve404(res);
        }
      });
    } else if (!err && stats.isFile()) {
      serveFile(filePath, 200, res);
    } else {
      // Ruta no encontrada -> responder con 404 y enviar 404.html
      serve404(res);
    }
  });
});

function serveFile(filePath, statusCode, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      serve404(res);
      return;
    }
    res.writeHead(statusCode, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(content);
  });
}

function serve404(res) {
  const file404 = path.join(PUBLIC_DIR, '404.html');
  fs.readFile(file404, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 - Página no encontrada');
    } else {
      res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Content-Type-Options': 'nosniff'
      });
      res.end(content);
    }
  });
}

server.listen(PORT, () => {
  console.log(`\n🦷 Dental ISA - Servidor activo en http://localhost:${PORT}`);
  console.log(`ℹ️  Rutas no existentes serán redirigidas automáticamente a la página 404.\n`);
});
