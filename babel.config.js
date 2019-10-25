module.exports = function (api) {
    api.cache(true);

    const presets = [
        "@babel/typescript",
        "@babel/react",
        [
            "@babel/env",
            {
                targets: {
                    "browsers":[
                        ">0.25%",
                        "not ie 11",
                        "not op_mini all"
                    ]
                },
                useBuiltIns: "usage",
                corejs: 3
            }
        ]
    ];
    const plugins = [
        "react-hot-loader/babel",
        "@babel/plugin-proposal-class-properties"
    ];

    return {
        presets,
        plugins
    };
}