"use strict";

const $ = require("../config.js");
const dPath = $.dest;

const cleanFnc = function(done) {
	console.log("------------------ Cleaning Build ------------------");
	console.log("Path - ", dPath);

	$.del([dPath], done);
};

$.gulp.task("clean", `Cleans out the ${dPath} folder`, [], cleanFnc);
