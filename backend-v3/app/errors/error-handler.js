exports.handleError = function (location, res, errCode, error) {
    console.log(location, error);
    res.status(errCode).json(error);
    throw error;
}