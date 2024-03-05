export default ({ splitter = '->' } = {}) => ({
  name: 'arrow-parser',
  async transform(src, id) {
    if (/\.arrow$/.test(id)) {
      const data = src.split(splitter).map(item => (item || '').trim());
      return {
        code: `export default ${JSON.stringify(data)}`,
      }
    }
  },
  transformIndexHtml: {
    handler(html, ctx) {
      return {
        html: html.replace('👋', '😁'),
        tags: [],
        // tags: [{
        //   tag: 'div',
        //   children: 'FOOBAR', // string | HtmlTagDescriptor[]
        //   attrs: {
        //     class: 'some-class',
        //     style: 'color: red'
        //   },
        //   injectTo: 'body' // 'head' | 'body' | 'head-prepend' | 'body-prepend'
        // }],
      }
    }
  }
});