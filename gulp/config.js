"use strict";

/* Modules used within the application */
const connect = require("browser-sync"); // Plugin to keep multiple browsers & devices in sync when building websites, includes livereload capability.
const reload = connect.reload; // browser-sync component to reload the browser
const browserify = require("browserify"); // lets you require('modules') in the browser by bundling up all of your JavaScript source
// const dotenv = require("dotenv-safe").config(); // Use .ENV files for configuration, use .env.example to check for required variables
// dotenv-safe breaks because of missing fs.readfilesync, need to investigate

const dotenv = require("dotenv").config(); // Use .ENV files for configuration, use .env.example to check for required variables
const fs = require("fs-extra");	// Module which adds file system methods that aren't included in the native node.js fs module

/* Modules used for testing the application */
const chai = require("chai");		// BDD / TDD assertion library for use with any javascript testing framework.
const cjs = require("chai-json-schema");	// Chai plugin with assertions to validate values against JSON Schema v4.
// Note: Install and use json-schema-generator to generate a valid schema from json data
// npm install json-schema-generator
// npx json-schema-generator path/to/input.json -o path/to/output.json
chai.use(require('chai-json-schema'));

const mocha = require("gulp-mocha");		// Gulp plugin for Modha a simple, flexible, fun test framework
const mochawesome = require("mochawesome");		// An HTML/CSS Reporter for Mocha.js
// const supertest = require("supertest");		// N/A - SuperAgent driven library for testing HTTP servers

/* Modules used for building the application */
const gulp = require("gulp-help")(require("gulp")); // Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks
const concat = require("gulp-concat"); // A gulp plugin to combine multiple files into a single file via streams
const del = require("del"); // Deletes files and folders, has promise support
const debug = require("gulp-debug"); // Debug Vinyl file streams to see what files are run through your Gulp pipeline
const eslint = require("gulp-eslint");	// A gulp plugin for processing files with ESLint
// connst eslint-plugin-json		// N/A - Internal package for eslint which provides a set of standard lint rules for JavaScript.
const notify = require("gulp-notify");	// A gulp plugin for sending notification messages to the console
const prettier = require("gulp-prettier-plugin");	// Plugin for Prettier, Opinionated code formatter. It enforces a consistent style by parsing code and re-printing.
const requireDir = require("require-dir"); // Plugin to require() directories.
const source = require("vinyl-source-stream"); // Plugin to convert the readable stream from browserify into a vinyl stream for gulp
const tv4 = require("tv4");	// Tiny validator for JSON Schema V4

/* Variables used within the build/testing process */
const src = process.env.SOURCE_ROOT;
const dest = process.env.BASE_PATH;
const p_dest = "./pretty";
const main_script = process.env.APP_FILE;

const script_path = "/js/";
const style_path = "/css/";
const image_path = "/imgs/";
const page_path = "/";
const test_path = "./tests";

const page_dest = dest;
const style_dest = dest + style_path;
const image_dest = dest + image_path;
const script_dest = dest + page_path;
const pretty_dest = p_dest;

const main_script_assets = src + script_path + main_script;
const script_assets = src + script_path + "**/*.js"; // The **/ is used to make sure even any subdirectories are traversed
const style_assets = src + style_path + "*.css";
const page_assets = src + page_path + "*.html";
const image_assets = src + image_path + "**/*.*";
const pretty_assets = [script_assets, "./*.md", "./doc/**/*.md"];

const root_assets = [
	src + page_path + "*.webmanifest",
	src + page_path + "*.ico",
	src + page_path + "*.xml"
];

module.exports = {
	comment1: "Export Variables; Some variables are pulled from the .ENV file",
	src: src,
	dest: dest,
	port: process.env.PORT,
	src_path: "../" + src+script_path,
	test_path: test_path,

	comment2: "The various assets which make up the application.",
	comment2a: "The individual assets are used in the individual build modules",
	main_script: main_script,

	image_assets: image_assets,
	main_script_assets: main_script_assets,
	page_assets: page_assets,
	pretty_assets: pretty_assets,
	root_assets: root_assets,
	script_assets: script_assets,
	style_assets: style_assets,

	image_dest: image_dest,
	page_dest: page_dest,
	pretty_dest: pretty_dest,
	script_dest: script_dest,
	style_dest: style_dest,

	comment3: "Export Modules",
	connect: connect,
	reload: reload,
	browserify: browserify,
	chai: chai,
	cjs: cjs,
	console: console,
	del: del,
	dotenv: dotenv,
	fs: fs,
	gulp: gulp,
	concat: concat,
	debug: debug,
	eslint: eslint,
	notify: notify,
	prettier: prettier,
	mocha: mocha,
	mochawesome: mochawesome,
	requireDir: requireDir,
	source: source,
	tv4: tv4
};
