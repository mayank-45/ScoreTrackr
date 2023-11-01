const mongoose = require('mongoose')

const connect = async()=>{await mongoose.connect('mongodb://127.0.0.1:27017/ScoreBoard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});}

if(connect()){
    console.log("Database Connected..!!")
}
else
{
    console.log("Error while connecting to Database")
}

