import { defineConfig } from "vite";
import ArrowParser from './plugins/arrow-parser';

export default defineConfig({
  plugins: [
    ArrowParser(),
  ],
});