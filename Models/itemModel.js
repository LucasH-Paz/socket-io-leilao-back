const connect = require('./connection');
const { ObjectID } = require('bson');

const preStart = async () => {
  await connect.getConnection().then(
    db => db.collection('valores').insertMany([
      {
        name: 'mouse',
        valor: 0,
      },
      {
        name: 'headset',
        valor: 0,
      },
      {
        name: 'teclado',
        valor: 0,
      },
    ])
  );
};

const getAll = async () => {
  const Collection = await connect.getConnection()
    .then((db) => db.collection('valores'));
  
  return Collection.find().toArray();
};

const updateById = async (id) => {
  const db = await connection();
  return db.collection('valores').findOneAndUpdate(
    { _id : ObjectID(id) },
    { $inc: { valor: 5 } },
    {returnOriginal: false }
  );
};


module.exports = {
  preStart,
  getAll,
  updateById,
};
