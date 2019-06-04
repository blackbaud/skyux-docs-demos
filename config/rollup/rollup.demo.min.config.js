import rollupConfig from './rollup.demo.config.js';
import uglify from 'rollup-plugin-uglify';

var minConfig = rollupConfig;

minConfig.dest = '../../dist/bundles/demo.umd.min.js';
minConfig.plugins.push(uglify());

export default minConfig;
