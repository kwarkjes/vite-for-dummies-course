console.log('HMR logic from my plugin is loaded!')

// Custom HMR logic taken care off by the plugin itself
if (import.meta.hot) {
  import.meta.hot?.on('arrow-parser-update', ({ svg, file}) => {
    document.querySelector(`[data-title="${file}"]`).innerHTML = svg;
  })
}