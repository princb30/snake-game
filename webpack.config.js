var path = require('path');

module.exports = {
    entry: {
        main: './App.js',
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        ]
    }
};