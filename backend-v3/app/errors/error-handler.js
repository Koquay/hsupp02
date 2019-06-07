exports.handleError = (location, res, error) => {
    console.log('ERROR HANDLER:');
    console.log('Error Location:', location);
    console.log('Error:', error);
    return res.status(error.status).json(error);
}