module.exports = (api) => {
    api.cache(() => process.env.NODE_ENV);

    if (process.env.BABEL_ENV === "commonjs") {
        return {
            presets: ["@babel/preset-typescript"],
            plugins: [
                "@babel/plugin-transform-modules-commonjs"
            ]
        }
    }

    return {
        presets: [
            "@babel/preset-typescript"
        ]
    }

}
