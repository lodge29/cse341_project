// dustin
const dustinRoute = (req, res) => {
    res.send('dustin');
};

const lodgeRoute = (req, res) => {
    res.send('lodge');
};

// don't forget to export!
module.exports = {
    dustinRoute,
    lodgeRoute
};