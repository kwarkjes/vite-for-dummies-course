const { userAgent } = navigator

// Listen for a custom event from Vite server
import.meta.hot.on('my-custom-event', ({ message }) => {
  console.log(message )
})

// Send a custom event to Vite server
import.meta.hot.send('my-custom-event', { message: `My server! my user agent is ${userAgent}` })
