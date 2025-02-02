import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    resolve({
      browser: true, // ブラウザ環境での動作を明示
      preferBuiltins: false, // Node.js の組み込みモジュールの解決を無効化
    }),
    commonjs(),
  ],
};
