// rollup.config.js
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json' with {type: "json"}
export default {
  input: 'src/main.ts',
  output: [
    {
      name: pkg.name,
      file: pkg.main,
      format: 'esm',
    }
  ],
  plugins: [
    json(),
    typescript({lib: [ "es6", "dom"], target: "es6"})
  ]
};