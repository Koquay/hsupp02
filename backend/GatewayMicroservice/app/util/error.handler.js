exports.handleError = function (location, res, errCode, err) {
    console.log(location, err.message);
    return res.status(errCode).json(err);
}