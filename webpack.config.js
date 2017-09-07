var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
    'react', 'react-dom'
];
module.exports = {
    entry: { app: "./src/index.tsx",
    vendor: VENDOR_LIBS
},
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.


    //TO ATTACH REACT CODE TO YOU VENDOR FILE YOU NEED TO COMMENT EXTERNALS
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};