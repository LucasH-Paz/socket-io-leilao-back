const app = require('express')();
const cors = require('cors');
const server = require('http').createServer(app);
const { getAll, preStart } = require('./Models/itemModel');

const CORS_OPTIONS = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
};

const io = require('socket.io')(server, {cors: CORS_OPTIONS});

app.use(cors(CORS_OPTIONS));

const PORT = 3001;

app.get('/items', async (_req, res) => {
  try {
    await preStart();
    const items = await getAll();
    console.log(items);
    return res.status(200).json(items);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
})

server.listen(PORT, () => console.log(`Estou na porta ${PORT}`));
