const mongoose = require("mongoose");
const uri = "mongodb+srv://root:root@cluster0.jknj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };