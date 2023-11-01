const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Admin = mongoose.model('Admin_Info',adminSchema)

module.exports = Admin