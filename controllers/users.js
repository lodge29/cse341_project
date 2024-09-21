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

// ObjectId showing crossed out as 'deprecated' - why??? - still works though...
const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
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