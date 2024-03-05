import { createSVG } from "../utils/create-svg";
export default ({ splitter = '->' }) => ({
  name: 'arrow-parser',
  async transform(src, id) {
    if (/\.arrow$/.test(id)) {
      const data = src.split(splitter).map(item => (item || '').trim());
      const svg = createSVG(data);
      return {
        code: `export default '${svg}'`,
      }
    }
  },
  transformIndexHtml: {
    handler(html, ctx) {
      // console.log('TRANFORM', html)
      return {
        html: html.replace('Pipeline', '<pre>Hi</pre>'),
        tags: [],
      }
    }
  }
});