const express = require('express');
const user = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { name, number, email } = req.body;

        // Simple validation
        if (!name || !number || !email) {
            return res.status(400).send("Name, number, and email are required.");
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).send("Please enter a valid email.");
        }

        const User = new user(req.body); // keep your original variable usage
        await User.save();
        res.send(User);
    } catch (error) {
        console.log(`The error is ${error}`);
        res.status(500).send("Server error");
    }
}

exports.getUsers = async (req, res) => {
    try{
const User = await user.find();
    res.status(200).json(User);
    }
    catch(e){
        console;e.log(`Error is coming ${e}`);
    }
    
}
exports.getUser = async (req, res) => {
    const id = req.params.id
    try{
const User = await user.findById(id);
    res.status(200).json(User);
    }
    catch(e){
        console;e.log(`Error is coming ${e}`);
    }
    
}
exports.updateUser = async (req, res) => {
    try{
        const id = req.params.id;
        if(!id){
          return  res.send("Please enter the user id");
        }
        const updateUser = await user.findByIdAndUpdate(id, req.body, {new : true, runValidator: true});
        return res.status(200).json(updateUser);

    }
    catch(error){
        return console.log(`The error is ${error}`)
    }
}
exports.deleteUser = async (req, res) => {
    try{
     const id = req.params.id    
    // const User = new user(req.body);
    if(!id){
            res.send("Please enter the user id");
        }
    await user.findByIdAndDelete(id);
    res.send(` ${user} deleted successfully `);
    }
    catch(error){
        console.log(` The error is  ${error}`);
    }
}
exports.predictTrend = async (req, res) => {
    try {
        const User = await user.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "Influencer not found" });

        const posts = User.recentPosts;
        if (!posts || posts.length < 2) {
            return res.json({ trend: "Not enough data to predict" });
        }

        // Calculate engagement rate for each post
        const engagements = posts.map(post => {
            return ((post.likes + post.comments) / user.followers) * 100;
        });

        // Compare last two posts
        const last = engagements[engagements.length - 1];
        const prev = engagements[engagements.length - 2];

        let trend = "Stable";
        if (last > prev) trend = "Increasing";
        else if (last < prev) trend = "Decreasing";

        res.json({ trend: trend, lastEngagement: last.toFixed(2) + "%" });

    } catch (error) {
        console.log(`The error is: ${error}`);
        res.status(500).json({ error: "Server error" });
    }
};
exports.classifyType = async (req, res) => {
    try {
        const User = await user.findById(req.params.id); // fetch influencer
        if (!User) return res.status(404).json({ error: "Influencer not found" });

        const posts = User.recentPosts;
        if (!posts || posts.length === 0) return res.json({ type: "Unknown" });

        // Keyword mapping
        const keywords = {
            Fashion: ["fashion", "ootd", "style", "outfit"],
            Lifestyle: ["lifestyle", "daily", "routine", "habit", "wellness"],
            Tech: ["tech", "gadget", "app", "device"],
            Travel: ["travel", "trip", "vacation", "destination"],
            Food: ["food", "recipe", "cooking", "meal"]
        };

        // Initialize counts
        let typeCounts = {};
        for (let key in keywords) typeCounts[key] = 0;

        // Count keywords in all posts
        posts.forEach(post => {
            const content = post.content.toLowerCase();
            for (let key in keywords) {
                keywords[key].forEach(word => {
                    if (content.includes(word)) typeCounts[key]++;
                });
            }
        });

        // Find type with highest count
        let type = "Unknown";
        let maxCount = 0;
        for (let key in typeCounts) {
            if (typeCounts[key] > maxCount) {
                maxCount = typeCounts[key];
                type = key;
            }
        }

        // Save type in user collection
        User.type = type;
        await User.save();

        res.json({ type: type });

    } catch (error) {
        console.log(`The error is: ${error}`);
        res.status(500).json({ error: "Server error" });
    }
};
