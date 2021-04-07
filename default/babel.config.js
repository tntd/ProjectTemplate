/**
 * @file babel 配置文件
 * @author zhangyou
 */

 const presets = [
    [
        '@babel/preset-env',
        {
            useBuiltIns: 'usage',
            corejs: '3',
            targets: {
                ie: 10,
                chrome: 52,
                safari: 10,
                opera: 32,
                firefox: 30
            }
        }
    ],
    '@babel/preset-react'
];

const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-transform-runtime',
    [
        '@babel/plugin-proposal-decorators',
        {
            legacy: true
        }
    ],
    [
        '@babel/plugin-proposal-class-properties',
        {
            loose: true
        }
    ],
    [
        '@babel/plugin-proposal-optional-chaining',
        {
            loose: true
        }
    ],
    [
        'import',
        {
            'libraryName': 'antd',
            'style': true
        }
    ],
    [
        'import',
        {
            'libraryName': 'tntd',
            'camel2DashComponentName': false
        },
        'tntd'
    ],
    [
        'import',
        {
            'libraryName': '@tntd/utils'
        },
        '@tntd'
    ],
    'lodash'
];

module.exports = { presets, plugins };
