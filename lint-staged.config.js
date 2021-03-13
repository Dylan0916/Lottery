module.exports = {
  '*.{ts,tsx}': [
    'prettier --parser typescript --write',
    () => 'tsc -p tsconfig.json',
    'jest --findRelatedTests',
  ],
};
