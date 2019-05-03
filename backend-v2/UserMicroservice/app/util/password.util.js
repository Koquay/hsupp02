const bcrypt = require('bcrypt');
const ErrorHandler = require('../errors/error-handler')
const jwt = require('jsonwebtoken');

class PasswordUtil {
    constructor() {
        this.rounds = 10;
    }

    async hash(password) {
        return await bcrypt.hash(password, this.rounds);
    }

    async check(password, hash) {
        console.log('password, hash ', password, hash)
        return await bcrypt.compare(password, hash);
    }

    generateAccessToken(user, password) {
        if (!user) {
            throw new Error('Invalid user');
        }
    
        try {
            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({ name: user.name, email: user.email }, process.env.SECRET, { expiresIn: 3600 });
                console.log('token = ', token);
                return token;
            }
        } catch (error) {
            throw new Error('Token generation failed!', error);
        }
    }
}

module.exports = new PasswordUtil();