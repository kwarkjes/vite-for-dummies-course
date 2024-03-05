import { defineConfig } from "vite";
import PluginInspect from "vite-plugin-inspect";
import ArrowParser from './plugins/arrow-parser';

export default defineConfig({
  plugins: [
    PluginInspect(),
    ArrowParser({
      // foo: 'bar'
    }),
  ],
});