const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name is minimum 3 length'),
    body('password').isLength({ min: 6 }).withMessage('Password must be minimum 3 length'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be minimum 3 length'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be minimum 3 length'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be minimum 1 length'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Vehicle Type'),
], captainController.registerCaptain);


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be minimum 6 length'),
],captainController.loginCaptain);


router.get("/logout" ,authMiddleware.authCaptain , captainController.logoutCaptain)
router.get("/profile" , authMiddleware.authCaptain , captainController.getCaptainProfile);
module.exports = router;