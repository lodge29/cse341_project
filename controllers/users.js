const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// Get all data from collection:'users'
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};


// Get single collections of data
const getSingle = async (req, res) => {
    // ObjectId.createFromHexString more effective/newer
    const userId = new ObjectId.createFromHexString(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

// EXPORT for use
module.exports = {
    getAll,
    getSingle
};