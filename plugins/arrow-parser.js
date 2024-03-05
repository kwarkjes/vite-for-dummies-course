import { createSVG } from "../utils/create-svg";
let inputSplitter = '->';

const tranform  = (data, file) => {
  const str = data.split(inputSplitter).map(item => (item || '').trim());
  return createSVG(str, file);
}


export default ({ splitter = '->' } = {}) => {
  inputSplitter = splitter;

  return {
    name: 'arrow-parser',
    async transform(src, id) {
      if (/\.arrow$/.test(id)) {
        return {
          code: `export default '${tranform(src, id)}'`,
        }
      }
    },
    async handleHotUpdate({ file, server, read, modules}) {
      if (/\.arrow$/.test(file)) {
        const svg = tranform(await read(file), file);
        server.hot.send({
          type: 'custom',
          event: 'arrow-parser-update',
          data: { svg, file }
        })
        return []
      }
    },
  };
};