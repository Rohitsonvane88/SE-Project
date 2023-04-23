const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')

const url = "mongodb+srv://dbUser:dbUserPassword@cluster0.spgmzca.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfully")
    }).catch((error) => console.log("Error: ", error))
}