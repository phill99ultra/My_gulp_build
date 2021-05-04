import dotenv from 'dotenv';
import defaultTask from './tasks/default';
import buildTask from './tasks/build';
import cleanTask from './tasks/clean';

dotenv.config();

export const prod = JSON.parse(process.env.PRODUCTION);
export default defaultTask;
export const build = buildTask;
export const clean = cleanTask;
