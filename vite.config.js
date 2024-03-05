import { defineConfig } from "vite";
import myPlugin from "./plugins/my-plugin";


export default defineConfig({
  plugins: [myPlugin()],
  server: {
    proxy: {
      '/api/graphql': {
        target: 'https://test.jumbo.com',
        changeOrigin: true,
      }
    }
  }
});