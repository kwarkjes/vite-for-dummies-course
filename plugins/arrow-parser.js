export default ({ splitter = '->' }) => ({
  name: 'arrow-parser',
  async transform(src, id) {
    if (/\.arrow$/.test(id)) {
      const data = src.split(splitter).map(item => (item || '').trim());
      return {
        code: `export default ${JSON.stringify(data)}`,
      }
    }
  },
});