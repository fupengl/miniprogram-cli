const config = require(`${process.cwd()}/config`);
const merge = require('webpack-merge');
const common = require('./webpack.base');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common,
	{
		mode: 'development',
		devtool: 'cheap-module-inline-source-map',
		plugins: [
			new webpack.DefinePlugin({
				'process.env': config[process.env.CONF || 'dev'].env
			}),
			new webpack.NoEmitOnErrorsPlugin(),
			new FriendlyErrorsPlugin()
		]
	}
);
