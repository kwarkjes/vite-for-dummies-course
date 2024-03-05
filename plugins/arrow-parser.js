import { createSVG } from "../utils/create-svg";

export default ({ splitter = '->' }) => ({
  name: 'arrow-parser',
  async transform(src, id) {
    if (/\.arrow$/.test(id)) {
      let data = src.split(splitter).map(item => (item || '').trim());
      data = createSVG(data);
      return {
        code: `export default '${data}'`,
      }
    }
  },
});