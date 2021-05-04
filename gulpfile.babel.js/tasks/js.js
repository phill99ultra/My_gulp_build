import {src, dest} from 'gulp';
import eslint from 'gulp-eslint';
import bro from 'gulp-bro';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import babelify from 'babelify';
import {prod} from '../index';
import {js} from '../paths';
import {reload} from './serve';

export default function jsTask (done) {
	if (!prod) {
		src(js.watch)
			.pipe(eslint())
			.pipe(eslint.format());
	}

	src(js.src)
		.pipe(sourcemaps.init({loadMaps : true}))
		.pipe(bro({
			transform: [
				babelify.configure()
			]
		}))
		.pipe(dest(js.dest))
		.pipe(uglify())
		.pipe(rename({
            extname: '.min.js'})
		)
		.pipe(sourcemaps.write('./')) 
		.pipe(dest(js.dest))
		.on('end', reload);

	done();
};
