module.exports = class ErrorHandler {
    constructor(res, message) {
        console.log('ErrorHandler ERROR ', message)
        this.message = message;
        res.status(401).json(message);
    }
}