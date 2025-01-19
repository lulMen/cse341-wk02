const ObjectId = require('mongodb').ObjectId;
const mongodb = require('../../db/connect');

const listAllContacts = async (req, res) => {
    const result = await mongodb.getDb().db('cse341db').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const findContactByID = (req, res) => {
    const contactID = req.query.contactID;
    console.log(contactID);

    if (!contactID) {
        return res.status(400).json({ message: 'Contact ID is required' });
    }

    let objectId = new ObjectId(contactID);

    mongodb.getDb().db('cse341db').collection('contacts')
        .findOne({ _id: objectId })
        .then((result) => {
            if (result) {
                console.log(`Found a contact in the collection with the ID: ${contactID}`);
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(result);
            } else {
                console.log(`No contact found with the ID: ${contactID}`);
                res.status(404).json({ message: 'Contact not found' });
            }
        })
        .catch((err) => {
            console.log('Error finding contact:', err);
            res.status(500).json({ message: 'Error retrieving contact' });
        });
};

module.exports = { listAllContacts, findContactByID };