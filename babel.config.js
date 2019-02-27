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
                    safari: "11.1",
                },
                useBuiltIns: "usage"
            }
        ]
    ];
    const plugins = [
        "relay",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-classes",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-async-generator-functions"
    ];

    return {
        presets,
        plugins
    };
}