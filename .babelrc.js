const sharedPresets = ['@babel/typescript'];
const shared = {
  ignore: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
  presets: sharedPresets
}

module.exports = {
  env: {
    esm: shared,
    cjs: {
      ...shared,
      presets: [['@babel/env', {
        modules: 'commonjs'
      }], ...sharedPresets],
    },
    test: {
      presets: ['@babel/env', ...sharedPresets]    
    },
  }
}