const { success } = require('../utils');

module.exports = (req, res) => {
    res.send(success({}));
};
