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