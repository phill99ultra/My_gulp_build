import {src, dest} from 'gulp';
import newer from 'gulp-newer';
import {assets} from '../paths';
import {reload} from './serve';

export default function assetsTask(done) {
	src(assets.src)
		.pipe(newer(assets.dest))
		.pipe(dest(assets.dest))
		.on('end', reload);

	done();
};
