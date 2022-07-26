const express = require('express');
const app = express();

const cors = require('cors');
const port = 8000;

app.use(cors());

// import our mongoose config file once we create it wihin our config folder
// this will always be the same 

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// Make sure this is below the code for post request
// we import our routes once we have them

require("./server/routes/pet.routes")(app);

// listen port, this is what fires up our server
app.listen(port, () => console.log(`Running on port ${port}!!`));