const { Signup, Login } = require("../controllers/authControllers");
const router = require("express").Router();
const {userVerification} =  require("../Middlewares/AuthMiddleware.js")


router.post('/verifyToken',userVerification)
router.post("/signup", Signup);
router.post("/login", Login);


module.exports = router; 