const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: [true, 'Please enter your name']
        },
        number: {
                type: Number,
                required : [true, "Please enter your Name"]
        },
        email: {
            type: String,
            reuired: [true, "Please enter youemail"]
        },
        message: {
            type: String,
            // reuired: [true, "Please enter you Message"]
            default: "This is the the defaukt message"
        },

    }
)
const User = mongoose.model('User', userSchema);
module.exports = User;