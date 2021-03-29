let path = require('path');
let HtmlWebpackPlugin =  require('html-webpack-plugin');


module.exports = {
    mode:'development',
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader','sass-loader']},
            {test: /\.s[ac]ss$/i,
                    use: ["style-loader", "css-loader", "sass-loader"]}
        ]
    },
    devServer: {
			//contentBase: path.join(__dirname, 'public'),
			compress: true,
			port: 3000,
		},
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]

}