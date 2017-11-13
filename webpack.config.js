var webpack = require('webpack');
module.exports = {
    entry:{
        bundle:'./src/main.js'
    },
    output:{
       path:__dirname +'/dist',
       filename:'[name].js'
    },
    module:{
       rules:[
           {
               test:/\.css$/,
               use:['style-loader', 'css-loader']
           },
           {
               test:/\.vue$/,
               use:['vue-loader']
           }
       ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool:'inline-source-map',
    resolve:{
        alias: {
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['.js', '.css','.vue'],
    },
    devServer:{
        port:3000,
        compress:true,
        hot:true
    }
}