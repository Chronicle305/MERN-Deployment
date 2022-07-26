const PetController = require("../controllers/pet.controller");

module.exports = app => {
    // CREATE
    app.post("/api/pets/create", PetController.createNewObject);

    // READ ONE
    app.get("/api/pets/:_id", PetController.findOneObject);

    // READ ALL
    app.get("/api/pets", PetController.findAllObjects);

    // UPDATE
    // put updates the value in our database
    app.put("/api/pets/update/:_id", PetController.updateObject);

    // DELETE
    app.delete("/api/pets/delete/:_id", PetController.deleteObject);
};