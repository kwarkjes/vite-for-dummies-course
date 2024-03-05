console.log('our custom plugin is loaded')

document.querySelector('.log-me-in').addEventListener('click', event => {
  event.target.innerText = 'Logging you in...'
  import.meta.hot.send('log-me-in');
});

const shouldShowLoginButton = setInterval(() => {
  if (document.querySelector('.container').innerText.includes('firstName')) {
    document.querySelector('.log-me-in').innerText = 'Already logged in'
    clearInterval(shouldShowLoginButton)
  }
}, 100);

import.meta.hot.on('has-cookies', data => {
  if (Array.isArray(data) && data.length) {
    document.querySelector('.log-me-in').innerText = 'You are looged in ✅'
    data.forEach(cookie => {
      document.cookie=`${cookie.name}=${cookie.value}`
    })
    window.location.reload();
  } else {
    document.querySelector('.log-me-in').innerText = 'Could not log you in, try again 🥲'
  }
})