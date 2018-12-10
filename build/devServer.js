
const config = require(`${process.cwd()}/config`);

if (!process.env.NODE_ENV) {
	process.env.ENV = JSON.parse(config.dev.env.ENV);
}
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev');

const compiler = webpack(webpackConfig);
const chalk = require('chalk');

console.log(chalk.green('> Starting dev compiler...'));

require('webpack-dev-middleware-hard-disk')(compiler, {
	quiet: true,
	watchOptions: {
		ignored: /dist|manifest/,
		aggregateTimeout: 300,
		poll: true
	},
});
