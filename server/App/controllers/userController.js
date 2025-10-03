const express = require('express');
const user = require('../models/user');

exports.createUser = async (req, res) => {
    try{
    const User = new user(req.body);
    await User.save();
    res.send(User);
    }
    catch(error){
        console.log(` The error is  ${error}`);
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