/*
* Week 1 Lesson 1.1
* basic req/res using strings, then exports
* 
*/

// dustin
const dustinRoute = (req, res) => {
    res.send('dustin');
};

const lodgeRoute = (req, res) => {
    res.send('lodge');
};

// EXPORT for use
module.exports = {
    dustinRoute,
    lodgeRoute
};