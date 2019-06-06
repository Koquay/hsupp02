exports.get = (async (req, res) => {
    console.log('IndexController called...')
    res.sendFile(process.env.INDEX);
})

