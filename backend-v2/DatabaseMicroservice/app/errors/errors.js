module.exports = class ValidationError {
    constructor(message, model) {
        this.message = message;
        this.model = model;
    }
}

module.exports = class AuthenticationError {
    constructor(message) {
        this.message = message;
    }
}

module.exports = class AccessDeniedError {
    constructor(message) {
        this.message = message;
    }
}