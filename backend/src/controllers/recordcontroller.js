const Record = require('../models/Record')

exports.createRecord = async (req, res, next) => {
    try {
        const { name, amount, type, date } = req.body;
        if(!name || amount == null || !type){
            return res.status(400).json({message: "please enter name, amount and type"});
        }
        const record = new Record({name, amount, type, date});
        const save = await record.save();
        res.status(201).json(saved);
    }
    catch (err){
        next(err);
    }
};

exports.getRecords = async (req, res, next) => {
    try{
        const records = await Record.find().sort({ createdAt: -1 });
        res.status(200).json(records);
    }
    catch(err){
        next(err);
    }
};

exports.updateRecord = async (req, res, next) => {
    try{
        const id = req.params.id;
        const update = await Record.findByIdAndUpdate(id, req.body,{new: true, runValidators: true});
        if(!update){
            return res.status(404).json({message : "Record not found"});
        }
        res.status(200).json(update);
    }
    catch(err){
        next(err);
    }   
};

exports.deleteRecord = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleted = await Record.findByIdAndDelete(id);
        if(!deleted){
            return res.status(404).json({message: "Record not found"});
        } 
        res.status(200).json({message: "Deleted", id});
    }
    catch(err){
        next(err);
    }
}