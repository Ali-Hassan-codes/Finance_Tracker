const mongoose = require('mongoose');

const transicationSchema = new mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true
        },
        amount : {
            type : Number,
            required : true
        },
        category : {
            type : String,
            enum : ['income', 'expense'],
            required : true
        },
        type : {
            type : String,
            required : true,

        },
        description : {
            type : String, 
        
        },
        data : {
            type :Date,
            default :Date.noe
        }

    }
)
module.exports = mongoose.model('Transication', transicationSchema);