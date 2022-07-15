const express   = require("express");
const Company = require("../models/companyModel");   
const User = require("../models/userModel");   

const router    = express.Router();

router.post("/companies", async (req, res) => {
    const data = new Company({
        name: req.body.name    
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) { 
        res.status(500).json({message: error.message})
    }
});

router.get("/companies", async (req, res) => {
    try {
        const data = await Company.find().populate("companyUsers", "name");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
})

router.get("/companies/:id", async (req, res) => {
    try {
        const data = await Company.findById(req.params.id).populate("companyUsers", "name");
        res.status(200).json(data)
            
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})


router.put("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new : true };
        const data = await Company.findByIdAndUpdate(id, updateData, options);
        res.status(200).json(data);
            
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
});

router.delete("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Company.findByIdAndDelete(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
});


module.exports  = router;