import { defineConfig } from "vite";
import ArrowParser from './plugins/arrow-parser';
import PluginInspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [
    PluginInspect(),
    ArrowParser(),
  ],
});