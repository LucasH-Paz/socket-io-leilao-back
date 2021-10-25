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

const updateById = async (id, payload) => {
  const Collection = await connect.getConnection()
    .then((db) => db.collection('valores'));
  
  return Collection.findOneAndUpdate(
    { _id: ObjectID(id) },
    { $set: { ...payload } },
    { returnOriginal: false, upsert: true },
  ).toArray();
};

module.exports = {
  preStart,
  getAll,
  updateById,
};
