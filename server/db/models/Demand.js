const mongoose= require('mongoose');
// const {Schema} = require('mongoose')

const demandSchema = new mongoose.Schema({
    email: String,
    title: String,
    description: String,
    location: String,
    createdAt : {type: Date, default: Date.now},
//     publisher: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//      }
//   },
//   {timestamps: true
});

module.exports = mongoose.model("Demand", demandSchema)