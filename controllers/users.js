const { BSON } = require('mongodb');
const mongodb = require('../data/database');
//const ObjectId = require('mongodb').ObjectId;

// updated method?
const { ObjectId } = require('mongodb');


// Get all data from collection:'users'
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

// Get single collections of data
// ObjectId is crossed out as 'deprecated' but still works...? whats the new method?
const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

// EXPORT for use
module.exports = {
    getAll,
    getSingle
};