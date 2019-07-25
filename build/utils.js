const path = require('path');

exports.resolve = function (dir) {
	return path.join(process.cwd(), dir);
};

exports.Target = {
	wx: {
		css: 'wxss',
		html: 'wxml'
	},
	tt: {
		css: 'ttss',
		html: 'ttml'
	}
}
