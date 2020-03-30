module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '*.{ts,tsx,js,jsx}': ['eslint --cache --fix "src/**"', 'prettier'],
};
