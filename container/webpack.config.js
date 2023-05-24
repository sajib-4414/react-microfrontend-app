const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
    mode: 'development',
    devServer:{
        port: 8088 //it is actually 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8083/remoteEntry.js',
                cart: 'cart@http://localhost:8087/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}