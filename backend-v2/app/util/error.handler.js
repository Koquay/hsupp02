

exports.handleError = (err, res) => {
    console.log('*********** error.handler ***********');
    let message = {
        errmsg: err.errmsg,
        errcode: err.code
    }

    res.status(err.code).json(message);
    return;
}