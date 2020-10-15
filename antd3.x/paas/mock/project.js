const { success, getPaginationResponse } = require('./utils');
// const fs = require('fs');
// const path = require('path');

module.exports = {
    'GET /project/list': (req, res) => {
        const projectName = req.query.projectName;

        res.json(
            getPaginationResponse(
                req,
                new Array(123).fill(1).map(
                    (item, index) => ({
                        id: index,
                        name: `p${index}`,
                        description: `project description${index} ... `,
                        maintainer: ['', 'admin', 'zhangsan'][index % 3],
                        createdTime: '2019-08-01 00:00:00',
                        members: new Array((index + 1) % 5).fill('zhangsan')
                    })
                ).filter(
                    ({ name }) => !projectName || new RegExp(projectName, 'i').test(name)
                )
            )
        );
    },
    // 'GET /project/list': (req, res) => {
    //     const tempFilePath = path.resolve(__dirname, './utils.js');
    //     res.send(fs.readFileSync(tempFilePath));
    // },
    'POST /project/delete': (req, res) => res.send(success(req.body.id)),
    'POST /project/update': (req, res) => res.send(success(req.body)),
    'POST /project/create': (req, res) => (
        res.send(
            success({
                id: ~~(Math.random() * 100),
                ...req.body
            })
        )
    ),
    'GET /user/list': (req, res) => (
        res.send({
            success: true,
            model: [
                { userName: '倪春龙', account: 'nichunlong@tongdun.net' },
                { userName: '张友', account: 'zhang.you@tongdun.net' },
                { userName: '路遥', account: 'lu.yao@tongdun.net' },
                { userName: '张三', account: 'zhangsan@tongdun.net' }
            ]
        })
    )
};
