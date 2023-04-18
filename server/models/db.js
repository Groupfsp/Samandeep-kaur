const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@cluster0.haqix78.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(){
    console.log("Connected");
})