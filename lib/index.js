"use strict";

var program = require('commander');

var chalk = require('chalk');

var webpack = require('webpack');

program.version('0.1.0').usage('[options]');
program.command('serve').description('run watch server').action(function () {
  try {
    require('../build/devServer.js');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
program.command('build').description('start serve').action(function () {
  try {
    webpack(require('../build/webpack.pro'), function (err, stats) {
      if (err) {
        process.stdout.write(chalk.red(err.details || err));
      }

      process.stdout.write(chalk.green(stats.toString() + '\n'));
    });
  } catch (err) {
    process.stdout.write(chalk.red(err));
    process.exit(1);
  }
});
program.parse(process.argv);