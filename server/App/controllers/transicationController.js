const transication = require ('../models/transication');
const User = require('../models/user');

const createTransication = async (req, res) => {
    try{
        const transication2 = new transication(req.body);
        await transication2.save();
res.status(201).json(transication2);
    }
    catch(error) {
        console.log(` The error is ${error}`);
    }
}
const getTransications = async (req, res) => {
    try{
        const id = req.params.id;   
        const data = User.findById(id).populate('transication');
        res.status(200).json(data);     

    }   
    catch(error){
        console.log(` The error is ${error}`);
    }
}
const getTransication = async (req, res) => {
    try{
        const data =await User.find().populate('transication');
        res.status(200).json(data);     

    }   
    catch(error){
        console.log(` The error is ${error}`);
    }
}
const updateTransication = async (req, res) => {
    try{
        const id = req.params.id;       
        if(!id){
            return res.send("Please enter the transication id");
        }   
        const updateTransication = await transication.findByIdAndUpdate(id, req.body, {new : true, runValidator: true});
        return res.status(200).json(updateTransication);                
    }
    catch(error){
        console.log(` The error is ${error}`);
    }   
}
const deleteTransication = async (req, res) => {
    try{                            
        const id = req.params.id;       
        if(!id){
            return res.send("Please enter the transication id");
        }               
        await transication.findByIdAndDelete(id);       

        return res.send(` ${transication} deleted successfully `);
    }               
    catch(error){
        console.log(` The error is ${error}`);
    }   
}
module.exports = {
    createTransication,
    getTransications,  
    getTransication,
    updateTransication,
    deleteTransication
}   