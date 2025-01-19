const mongodb = require('../../db/connect');

const getData = async (req, res) => {
    const result = await mongodb.getDb().db('cse341db').collection('users').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = { getData };