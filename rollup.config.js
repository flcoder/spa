import { terser } from 'rollup-plugin-terser'

export default {
  input: 'build/lib.js',
  output: [{
    file: 'dist/spa.js',
    format: 'iife',
    name: 'spa'
  },{
    file: 'dist/spa.min.js',
    format: 'iife',
    name: 'spa',
    plugins: [terser()]
  }]
}