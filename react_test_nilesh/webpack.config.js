var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                        '@babel/react',
                        "@babel/preset-flow",
                        {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output:{
        publicPath: '/',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        port: 8000,
        disableHostCheck: true,
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiFEUrl: '',
            apiUrl: 'https://api.tvmaze.com/shows/1',
            imgPath: 'http://localhost:8000/assets/',
            perPageData: 10,
            DateFormat: 'YYYY-MM-DD'
        })
    }
}
