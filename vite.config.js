import { writeFileSync, readFileSync } from 'fs';
import { type } from 'os';
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: 'my-plugin',
      transform(src, id) {
        if (id.endsWith('.config')) return `export default ${src}`;
      },
      configureServer(server) {
        server.hot.on('update-config', async (data) => {
          const originData = JSON.parse(readFileSync('.config', 'utf-8'));
          writeFileSync('.config', JSON.stringify({ ...originData, ...data }, null, 2));
        })
      },
      transformIndexHtml(html) {
        const config = JSON.parse(readFileSync('.config', 'utf-8'));
        const { $schema } = config;
        delete config.$schema;
        const tags = [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: 'my-plugin.client.js',
            },
          }
        ];
        Object.entries(config).forEach(([key, value]) => {
          tags.push({
            tag: 'input',
            attrs: {
              class: key,
              value,
              type: $schema.types[key]
            },
          });
        })

        return {
          html,
          tags,
        }
      }
    },
  ],
});