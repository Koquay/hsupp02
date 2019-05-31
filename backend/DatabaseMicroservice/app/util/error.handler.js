exports.handleError = function (location, res, errCode, err) {
    console.log('Location', location);
    console.log('Error', err);
    return res.status(errCode).json(err);    
}