module.exports = {
  '*.{ts,tsx}': ['eslint', () => 'tsc --skipLibCheck --noEmit'],
};
