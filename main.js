import './style.css'
import diagram from './data/js.arrow';
document.querySelector('.diagram').insertAdjacentHTML('beforeend', diagram);
const counter = document.querySelector('.counter');


setInterval(() => {
  counter.textContent = parseInt(counter.textContent) + 1;
}, 500);