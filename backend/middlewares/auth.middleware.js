const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const blackListedTokenModel = require("../models/blacklistedToken.model");
const JWT_SECRET = process.env.JWT_SECRET;
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const isBlackListed = await blackListedTokenModel.findOne({ token });

    if (isBlackListed) {
        return res.status(401).json({ message: "Unauthorized: Token blacklisted" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await userModel.findOne(decoded._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        return next();
    } catch (err) {
        console.error("Authentication error:", err);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });   
    }

    const isBlackListed = await blackListedTokenModel.findOne({ token });

    if (isBlackListed) {
        return res.status(401).json({ message: "Unauthorized: Token blacklisted" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const captain = await captainModel.findOne(decoded._id);

        if (!captain) {
            return res.status(404).json({ message: "Captain not found" });
        }

        req.captain = captain;
        return next();
    } catch (err) {
        console.error("Authentication error:", err);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

}