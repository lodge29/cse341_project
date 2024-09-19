const dustinRoute = (req, res) => {
    res.send('dustin');
};

const lodgeRoute = (req, res) => {
    res.send('lodge');
};

module.exports = {
    dustinRoute,
    lodgeRoute
};