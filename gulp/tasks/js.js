"use strict";

const $ = require("../config.js");
const sPath = $.main_script_assets;
const aPath = $.script_assets;
const dPath = $.script_dest;

const Browser_JS = function() {
	console.log("------------------ Building Scripts ------------------");
	console.log(`Output Script File: ${$.main_script}`);
	console.log(`Source Files: ${sPath}`);
	console.log(`Dest Folder: ${dPath}`);

	// Note in this task, we're using Browserify to transform, concatinate, and pipe the output rather than $.gulp
	return $.browserify(sPath)
		.bundle()
		.pipe($.source($.main_script))
		.pipe($.gulp.dest(dPath));
};

const Node_JS = function() {
	console.log("------------------ Building Scripts ------------------");
	console.log(`Source Files: ${aPath}`);
	console.log(`Dest Folder: ${dPath}`);

	// Note: For apps run via Node.JS do NOT concatenate files.
	return $.gulp.src([aPath])
		.pipe($.gulp.dest(dPath));
};

$.gulp.task(
	"BrowserBuild",
	"For Browser - Combine any Script files into a single file and move combined file into the build folder",
	[],
	Browser_JS
);


$.gulp.task(
	"JS",
	"For Node - Build as necessary any JS files and move to build folder",
	[],
	Node_JS
);
