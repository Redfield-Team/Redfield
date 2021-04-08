const mongoose= require('mongoose');
// const {Schema} = require('mongoose')

const userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    phoneNumber: Number,
//     postedDemands: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Demand'
//     }]
// },
// {imestamps: true
});

module.exports = mongoose.model("User", userSchema)