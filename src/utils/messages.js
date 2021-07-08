const generateMessage = (text, username = 'System') => {
    return {
        username,
        text,
        createdAt: new Date().getTime(),
    };
};

const generateLocationMessage = (username, coords) => {
    return {
        username,
        url: `https://google.com/maps?q=${coords.latitude},${coords.longitude}`,
        createdAt: new Date().getTime(),
    };
};

module.exports = {
    generateMessage,
    generateLocationMessage,
};
