module.exports = function (api) {
    api.cache(true);

    const presets = [
        "@babel/typescript",
        "@babel/react",
        [
            "@babel/env",
            {
                targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1"
                },
                useBuiltIns: "usage",
                corejs: 3
            }
        ]
    ];
    const plugins = [
        "@babel/plugin-transform-arrow-functions",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        "react-hot-loader/babel"
    ];

    return {
        presets,
        plugins
    };
}