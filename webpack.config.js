const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'my-react-library',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM',
        },
    },
};
