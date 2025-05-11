import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

const production = !process.env.ROLLUP_WATCH
if (production) process.env.NODE_ENV = "production"
const nodeEnv = process.env.NODE_ENV || "development"

export default {
  input: 'src/paywhoops.js',
  output: [
    {
      file: 'dist/paywhoops.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify(nodeEnv)
      },
      delimiters: ['', '']
    }),
    nodeResolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    copy({
      targets: [
        {
          src: 'src/manifest.json',
          dest: 'dist/',
        },
        {
          src: 'src/assets/',
          dest: 'dist/'
        }
      ]
    }),
    terser({maxWorkers: 8, compress: true,})
  ],
  watch: {
    clearScreen: true,
  }
};