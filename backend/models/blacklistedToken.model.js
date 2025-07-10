    const mongoose = require('mongoose');   
    const { Schema } = mongoose;
    const jwt = require('jsonwebtoken');
    const JWT_SECRET = process.env.JWT_SECRET;

    const blacklistedTokenSchema = new Schema({
        token: {
            type: String,
            required: true
        }
    });

    blacklistedTokenSchema.methods.generateAuthToken = function () {
        return jwt.sign({ _id: this._id }, JWT_SECRET, { expiresIn: '1h' });
    };

    const blacklistedTokenModel = mongoose.model('blacklistedToken', blacklistedTokenSchema);

    module.exports = blacklistedTokenModel;

    