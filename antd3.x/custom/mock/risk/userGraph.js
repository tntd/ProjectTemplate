const { success } = require('../utils');
const { uniqBy } = require('lodash');

module.exports = (req, res) => {
    let {
        query: {
            n,
            e,
            gangId
        } = {}
    } = req;
    n = +n || 100;
    e = +e || 100;
    const nodes = new Array(n).fill({}).map((node, index) => ({
        id: `${index + 1}`,
        name: index + 1,
        props: {}
    }));
    const edges = uniqBy(new Array(e).fill({
        id: 1,
        name: '1',
        source: 1,
        target: 2,
        props: {}
    }).map((edge, index) => {
        let srouce = nodes[~~(Math.random() * nodes.length)] || nodes[index % nodes.length];
        let target = nodes[~~(Math.random() * nodes.length)] || nodes[index % nodes.length];

        if (nodes.length === 2) {
            srouce = nodes[0];
            target = nodes[1];
        }

        return {
            ...edge,
            id: `${index + 1}`,
            source: srouce.id,
            target: target.id,
            name: `${srouce.name}_${target.name}`
        };
    }), 'name');

    res.send(success({
        nodes,
        edges,
        gangId,
        riskUserCount: nodes.length,
        gangRiskScore: 0.95
    }));
};
