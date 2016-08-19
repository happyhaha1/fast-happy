const webpack = require('webpack')
const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    source: path.join(__dirname, './src/main.js'),
    output: path.join(__dirname, '../back/build/resources/main/static')
};

const common = {
    entry: [
        PATHS.source
    ],
    output: {
        path: PATHS.output,
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=819200'
            },
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            },
            {   test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass?sourceMap"
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ["antd",  { "style": "css" }]]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            port: 9090,
            proxy: {
                '/*': {
                    target: 'http://localhost:8080',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}

