const express   = require("express");
const router = express.Router();

const userRoutes = require("../routes/userRoutes"); 
const companyRoutes = require("../routes/companyRoutes"); 

router.use(userRoutes);
router.use(companyRoutes);

module.exports = router;