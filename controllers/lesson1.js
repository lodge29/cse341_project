// dustin
const dustinRoute = (req, res) => {
    res.send('dustin');
};

// lodge
const lodgeRoute = (req, res) => {
    res.send('lodge');
};

// export GET requests
module.exports = {
    dustinRoute,
    lodgeRoute
};