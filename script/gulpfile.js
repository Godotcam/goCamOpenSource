const gulp   = require('gulp');
const clean  = require('gulp-clean');
const concat = require('gulp-concat');
const sass   = require('gulp-sass')(require('sass'));
const ts     = require('gulp-typescript');
const fs     = require('node:fs');

const backendTsConfigLocation  = './../source/backend/tsconfig.json';
const frontendTsConfigLocation = './../source/frontend/js/tsconfig.json';

const backendJsSourceLocation      = './../source/backend/app/**/**/*.ts';
const backendJsDestinationLocation = '../app/backend/';

const frontendJsSourceLocation      = './../source/frontend/js/app/**/**/**/*.ts';
const frontendJsDestinationLocation = './tmp/';
const frontendJsConcatLocation      = '../app/frontend/static/js/app/';

const frontendCssSourceLocation      = './../source/frontend/css/**/**/*.scss';
const frontendCssDestinationLocation = '../app/frontend/static/css/';

const tsBackendProject  = ts.createProject(backendTsConfigLocation);
const tsFrontendProject = ts.createProject(frontendTsConfigLocation);

function buildJsBackend() {
	let tsResult = gulp.src(backendJsSourceLocation).pipe(tsBackendProject());

	return tsResult.js.pipe(gulp.dest(backendJsDestinationLocation));
}

function buildJsFrontend(cb) {

	let tsResult = gulp.src(frontendJsSourceLocation).pipe(tsFrontendProject());
	tsResult.js.pipe(gulp.dest(frontendJsDestinationLocation));

	let folderToConcatList = fs.readdirSync(frontendJsDestinationLocation);
	for (let i = 0, j = folderToConcatList.length; i < j; i++) {
		gulp.src([frontendJsDestinationLocation + folderToConcatList[i] + '/**/**/*.js'])
			.pipe(concat(folderToConcatList[i]))
			.pipe(gulp.dest(frontendJsConcatLocation))
	}

	cb()

}

function cleanJsFrontend(cb) {

	let folderToConcatList = fs.readdirSync(frontendJsDestinationLocation);
	for (let i = 0, j = folderToConcatList.length; i < j; i++) {
		gulp.src(frontendJsDestinationLocation + folderToConcatList[i], {read: false}).pipe(clean());
	}

	cb();
}

function buildCssFrontend() {
	return gulp.src(frontendCssSourceLocation)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(frontendCssDestinationLocation));
}

function watchJsBackend(cb) {
	gulp.watch(backendJsSourceLocation, buildJsBackend);
}

function watchJsFrontend(cb) {
	gulp.watch(frontendJsSourceLocation, buildJsFrontend);
}

function watchCssFrontend(cb) {
	gulp.watch(frontendCssSourceLocation, buildCssFrontend);
}


exports.build            = gulp.series(buildJsBackend, buildJsFrontend, buildCssFrontend);
exports.buildJsBackend   = buildJsBackend;
exports.buildJsFrontend  = buildJsFrontend;
exports.cleanJsFrontend  = cleanJsFrontend;
exports.buildCssFrontend = buildCssFrontend

exports.watch            = gulp.parallel(watchJsBackend, watchJsFrontend, watchCssFrontend);
exports.watchJsBackend   = watchJsBackend;
exports.watchJsFrontend  = watchJsFrontend;
exports.watchCssFrontend = watchCssFrontend;

exports.default = () => {
	console.log('No task was specified.');
};
