let { STATIC_CHANNELS } = require('../utils/channels');

exports.getChannels = (req, res) => {
    res.json({
        channels: STATIC_CHANNELS
    });
}