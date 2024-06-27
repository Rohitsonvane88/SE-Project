const mongoose = require('mongoose')

const url = "mongodb://sonvanerohit88:Rohit2001@ac-wkct3pc-shard-00-00.37swnlp.mongodb.net:27017,ac-wkct3pc-shard-00-01.37swnlp.mongodb.net:27017,ac-wkct3pc-shard-00-02.37swnlp.mongodb.net:27017/?ssl=true&replicaSet=atlas-9ooqdk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=quora-clone"

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfully")
    }).catch((error) => console.log("Error: ", error))
}