const mongoose = require('mongoose');

// you need to change the name of the DB and make it unique
mongoose.connect("mongodb://localhost/MernRedBeltExam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));