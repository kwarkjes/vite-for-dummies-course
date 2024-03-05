import { login } from './log-me-in'

export default () => ({
  name: 'my-plugin',
  configureServer(server) {
    server.hot.on('log-me-in', async (data) => {
      const cookies = await login('USERNAME', 'PASS');
      server.hot.send({
        type: 'custom',
        event: 'has-cookies',
        data: cookies
      })
    })
  },
  transformIndexHtml(html) {
    return {
      html,
      tags: [
        {
          tag: 'button',
          children: 'log me in',
          attrs: {
            class: 'log-me-in',
          },
        },
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: "./plugins/browser-stuff",
          },
        }
      ],
    }
  }
})