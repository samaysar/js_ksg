export default function (api) {
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
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ];

    return {
        presets,
        plugins
    };
}