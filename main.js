import './style.css'
import diagram from './data/js.arrow';
document.querySelector('.diagram').insertAdjacentHTML('beforeend', diagram);
const counter = document.querySelector('.counter');


setInterval(() => {
  counter.textContent = parseInt(counter.textContent) + 1;
}, 500);

// Custom HMR logic taken care off by application code
import.meta.hot?.on('arrow-parser-update', ({ svg, file}) => {
  document.querySelector(`[data-title="${file}"]`).innerHTML = svg;
})
