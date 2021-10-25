const app = require('express')();
const cors = require('cors');
const server = require('http').createServer(app);

const CORS_OPTIONS = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
};

const io = require('socket.io')(server, {cors: CORS_OPTIONS});

app.use(cors(CORS_OPTIONS));

const PORT = 3001;

server.listen(PORT, () => console.log(`Estou na porta ${PORT}`));
