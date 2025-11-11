const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    postId: String,
    content: String,
    likes: Number,
    comments: Number
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    number: {
        type: Number,
        required: [true, 'Please enter your number']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
    message: {
        type: String,
        default: "This is the default message"
    },
    // New fields for influencer dashboard
    platform: {
        type: String,
        required: [true, 'Please enter platform'] // Instagram, YouTube, TikTok
    },
    followers: {
        type: Number,
        default: 0
    },
    averageLikes: {
        type: Number,
        default: 0
    },
    engagementRate: {
        type: Number,
        default: 0
    },
    recentPosts: [PostSchema],
    type: {                       // New field for influencer category
        type: String,
        default: "Unknown"
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
