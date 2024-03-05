import { version } from 'process'
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: 'my-plugin',
      configureServer(server) {
        // Once the connection is established, send a custom event to the browser
        server.hot.on('connection', () => {
            server.hot.send('my-custom-event', { message: `Hi browser! I'am running in node ${version}` })
        })

        // Listen for a custom event from the browser
        server.hot.on('my-custom-event', ({ message }) => {
          console.log('Server received:', message)
        })
      },
    },
  ],
});