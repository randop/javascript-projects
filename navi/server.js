"use strict";

const WS_PORT = 5000;
const WS_PING_INTERVAL = 15000;

const WebSocket = require("ws");
const GPS = require("gps");
const { SerialPort, ReadlineParser } = require('serialport');

const gps = new GPS();

function noop() {}

function heartbeat() {
  this.isAlive = true;  
}

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping(noop);    
  });
}, WS_PING_INTERVAL);

const wss = new WebSocket.WebSocketServer({
  port: WS_PORT,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
    // should not be compressed if context takeover is disabled.
  }
});

wss.on("connection", async (ws, req) => {
  let ip = req.socket.remoteAddress || "unknown ip";
  if (req && req.headers) {
    if (req.headers["origin"]) {
      ip = req.headers["origin"];
    }
    if (req.headers["user-agent"]) {
      ip = `${ip} ${req.headers["user-agent"]}`;
    }
  }
  console.log(
    `New client connection from ${req.url} ${ip}`
  );  
  ws.on('message', function message(data) {    
    console.log(data);
  });
  ws.on("pong", heartbeat);  
});

wss.on("close", function close() {
  clearInterval(interval);
});

wss.on("listening", function connection() {
  console.log(`WebSocket server is now listening on port ${WS_PORT}`);
});

const port = new SerialPort({ path: "/dev/ttyUART0", baudRate: 115200 })
const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data', (data) => {
  gps.update(data);
  const { lat, lon } = gps.state;
  if (lat && lon) {
    const data = JSON.stringify({
      lat,
      lon
    });
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  }
});