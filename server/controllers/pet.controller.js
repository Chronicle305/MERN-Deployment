// Controllers tells us what to do with our models
const Pet = require("../models/pet.model");

// BASIC CRUD COMMANDS

// these will become boilerplate code that you will use in future projects and the red belt exam, if these set of followalong do not work look to get the controller code from the project "HelloMongoose"

// CREATE
module.exports.createNewObject = (req, res) => {
    Pet.create(req.body)
        .then(createNew => res.json(createNew))
        // good practice to write unique error messages so when the error fires we can debug and know which controller didnt work
        // dont go generic go unique
        .catch(err => res.json({ message: "Something went wrong when CREATING a Object!", error: err }));
}
// READ ONE
module.exports.findOneObject = (req, res) => {
    Pet.find({ _id: req.params._id })
        .then(singleObject => res.json(singleObject))
        .catch(err => res.json({ message: "Something went wrong when FINDING ONE Object!", error: err }));
}
// READ ALL
module.exports.findAllObjects = (req, res) => {
    Pet.find().sort({ type: 1 })
        .then(AllObjects => res.json(AllObjects))
        .catch(err => res.json({ message: "Something went wrong when FINDING ALL z Objects!", error: err }));
}

// UPDATE
module.exports.updateObject = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then(updateObject => res.json(updateObject))
        .catch(err => res.json({ message: "Something went wrong when UPDATING one Object!", error: err }));
}

// DELETE
module.exports.deleteObject = (req, res) => {
    Pet.deleteOne({ _id: req.params._id })
        .then(deleteObject => res.json(deleteObject))
        .catch(err => res.json({ message: "Something went wrong when DELETING z Object!", error: err }));
}
