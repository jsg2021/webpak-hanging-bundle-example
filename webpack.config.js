// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
    target: 'async-node16.0',
    externals: [{
        got: true,
        react: true,
        'react/jsx-dev-runtime': true,
        'react-dom': true,
        'react-dom/server': true,
        useragent: true,
        'webpack-flush-chunks': true,
        'dd-trace': true
    }, /.*\/build\/.*/],
    experiments: {
        topLevelAwait: true,
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        fallback: {
          'web-streams-polyfill/ponyfill/es2018': false,
        }
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
