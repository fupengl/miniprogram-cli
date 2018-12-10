const program = require('commander');
const chalk = require('chalk');
const webpack = require('webpack');

program
	.version('0.1.0')
	.usage('[options]');

program
	.command('serve')
	.description('run watch server')
	.action(() => {
		try {
			require('../build/devServer.js');
		} catch (error) {
			console.log(error);
			process.exit(1);
		}
	});

program
	.command('build')
	.description('start serve')
	.action(() => {
		try {
			webpack(require('../build/webpack.pro'), (err, stats) => {
				if (err) throw err;
				process.stdout.write(
					stats.toString({
						colors: true,
						modules: false,
						children: false,
						chunks: false,
						chunkModules: false
					}) + '\n\n'
				);

				if (stats.hasErrors()) {
					console.log(chalk.red('  Build failed with errors.\n'));
					process.exit(1);
				}
				console.log(chalk.cyan('  Build complete.\n'));
			});
		} catch (err) {
			process.stdout.write(chalk.yellow(err + '\n'));
			process.exit(1);
		}
	});

program.parse(process.argv);
