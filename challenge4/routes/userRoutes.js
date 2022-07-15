const express   = require("express");
const User      = require("../models/userModel");  
const Company   = require("../models/companyModel");   

const router    = express.Router();

router.post('/users/:_id', async (req, res) => {
    
    const newUser = new User(req.body);
    const company = await Company.findById(req.params);
    try{
        newUser.Company = company;
        await newUser.save();
        company.companyUsers.push(newUser);
        await company.save()
       const data = newUser
        res.status(200).json(data);
        ;
    } catch (error) { 
        res.status(500).json({message: error.message});
    }
    
})


/*
router.post('/users/:_id', async (req, res) => {
    const newUser = new User(req.body);
    const company = await Company.findById(req.params);
    newUser.Company = company;
    await newUser.save();
    company.companyUsers.push(newUser);
    await company.save();
    res.send(newUser);
})
*/
router.post("/users", async (req, res) => {
    
    const data = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email ,
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) { 
        res.status(500).json({message: error.message});
    }
});

router.get("/users", async (req, res) => {
    try {
        const data = await User.find().populate("Company", "name");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
})

router.get("/:_id/companies", async (req, res) => {
    try {
        const company = await Company.findById(req.params).populate("companyUsers", "name");
        res.status(200).json(company);
    } catch (error) {
         res.status(500).json({message: error.message}); 
    }
})


router.get("/users/:id", async (req, res) => {
    try {
        const data = await User.findById(req.params.id).populate("Company", "name");;
        res.status(200).json(data);
            
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new : true };
        const data = await User.findByIdAndUpdate(id, updateData, options);
        res.status(200).json(data);
            
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports  = router;