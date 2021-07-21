import {src, dest} from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import {fonts} from '../paths';

export default function fontsTask (done) {
    src(fonts.src) 
        .pipe(ttf2woff())
        .pipe(dest(fonts.dest));

    done();
};