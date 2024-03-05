document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', ({ target: { className, value } }) => {
    import.meta.hot.send('update-config', { [className]: value });
  });
});
