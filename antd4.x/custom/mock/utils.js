const success = data => {
    return {
        success: true,
        code: 200,
        message: 'success',
        data
    };
};

const fail = data => {
    return {
        success: false,
        code: 500,
        message: 'fail',
        data
    };
};

module.exports = {
    success,
    fail
}
