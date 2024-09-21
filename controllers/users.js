/*
* week 1 lesson 1.2
* GET ALL or SINGLE mongodb collections: project_week1, then exports
*/

const mongodb = require('../data/database');
//const ObjectId = require('mongodb').ObjectId;

// updated method for ObjectId?
const { ObjectId } = require('mongodb');


// Get ALL data from mongodb collections: project_week1.users
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

// Get SINGLE collections: project_week1.users[]
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