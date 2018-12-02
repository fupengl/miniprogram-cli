const path = require('path');

exports.resolve = function (dir) {
	return path.join(process.cwd(), dir);
};
