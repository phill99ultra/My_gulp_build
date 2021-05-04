import {parallel} from 'gulp';
import htmlTask from './html';
import cssTask from './css';
import jsTask from './js';
import imgTask from './img';
import spriteTask from './sprite';
import assetsTask from './assets';

export default parallel(htmlTask, cssTask, jsTask, imgTask, spriteTask, assetsTask);
