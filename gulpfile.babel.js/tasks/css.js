import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import stylint from 'gulp-stylint';
import stylus from 'gulp-stylus';
import toolkit from 'mantis-toolkit';
import equalizr from 'mantis-equalizr';
import querist from 'mantis-querist';
import grid from 'mantis-grid';
import layers from 'mantis-layers';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import group_media_queries from 'gulp-group-css-media-queries';
import webp_css from 'gulp-webp-css';
import {prod} from '../index';
import {css} from '../paths';
import {stream} from './serve';

export default function cssTask (done) {
	if (!prod) {
		src(css.watch)
			.pipe(stylint())
			.pipe(stylint.reporter());
	}

	src(css.src)
		.pipe(plumber())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(stylus({
			use: [
				toolkit(),
				equalizr(),
				querist(),
				grid(),
				layers()
			],
			compress: prod,
			linenos: !prod,
			errors: true
		}))
		.pipe(postcss([autoprefixer()]))
		.pipe(group_media_queries()) 
		.pipe(webp_css())
		.pipe(dest(css.dest))
		.pipe(cleanCSS())  
		.pipe(rename({
            extname: '.min.css'})
        )  
		.pipe(sourcemaps.write('./'))   
		.pipe(dest(css.dest))
		.pipe(stream());

	done();
};
