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

// week 2
// CREATE SINGLE USER
const createUser = async (req, res) => {
    const user = {
        name: req.body.name,
        age:req.body.age
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.statuse(500).json(response.error || 'Some error ovvured while updating the user');
    }
};

// week 2
// UPDATE SINGLE USER
const updateUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const user = {
        name: req.body.name,
        age:req.body.age
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({_id: userId}, user);
    if (response.modifiedCount) {
        res.status(204).send();
    } else {
        res.statuse(500).json(response.error || 'Some error ovvured while updating the user');
    }
};

// week 2
// DELETE SINGLE USER
const deleteUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('users').deleteOne({_id: userId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.statuse(500).json(response.error || 'Some error ovvured while updating the user');
    }
};

// EXPORT for use
module.exports = {
    getAll,
    getSingle,
    // week 2
    createUser,
    updateUser,
    deleteUser
};