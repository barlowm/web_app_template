"use strict";

const $ = require("../config.js");
const sPath = $.pretty_assets;
const dPath = $.pretty_dest;

const prettyFnc = function() {
	console.log("------------------ Making JavaScript Pretty ------------------");
	console.log(`Source Files: ${sPath}`);
	console.log(`Dest Folder: ${dPath}`);

	$.gulp
		.src(sPath)
		.pipe($.debug())
		.pipe($.prettier(undefined, { filter: true }))
		.pipe($.gulp.dest(file => file.base))
};

$.gulp.task(
	"pretty",
	"runs Prettier on all the source modules. Run before BUILD",
	[],
	prettyFnc
);
