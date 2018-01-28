const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'yuui': './src/comps/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../package'),
        publicPath: '/package/',
        library: 'yuui',      // 模块名称
        libraryTarget: 'umd', // 输出格式
        umdNamedDefine: true  // 是否将模块名称作为 AMD 输出的命名空间
    },
    externals: {
        //不将 Vue 打包进组件库
        vue: {
            //加上以下配置选项  不管是<script> 标签方式引用还是后端构建，都可以正常工作
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: 'vue-style-loader!css-loader',
                    sass: 'vue-style-loader!css-loader!sass-loader'
                },
                postLoaders: {
                    html: 'babel-loader'
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader'
            ]
        }, { 
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}