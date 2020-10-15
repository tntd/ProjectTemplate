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

const getPaginationResponse = (req, data) => {
    let { curPage = 1, pageSize = 20 } = req.query;
    curPage = +curPage;
    pageSize = +pageSize;

    return success({
        curPage,
        pageSize,
        total: data.length,
        data: data.slice((curPage - 1) * pageSize, curPage * pageSize)
    });
};

module.exports = {
    success,
    fail,
    getPaginationResponse
};
