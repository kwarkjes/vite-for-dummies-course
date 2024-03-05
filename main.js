import './style.css'
const container = document.querySelector('.container');
const modules = import.meta.glob('./data/\*.arrow');
Object.entries(modules).forEach(async ([path, module]) => {
  const { default: drawing } = await module();
  container.insertAdjacentHTML('beforeend', `<h1>${path.replace('./data/', '').replace('.arrow', '')}</h1>`);
  container.insertAdjacentHTML('beforeend', drawing);
  container.insertAdjacentHTML('beforeend', '<hr />');
})

setInterval(() => {
  // update a counter in the .container
  const counter = document.querySelector('.counter');
  const count = parseInt(counter.textContent, 10);
  counter.textContent = count + 1;
}, 1000);

if (import.meta.hot) {
  import.meta.hot.on('arrow-parser-update', ({ svg, file}) => {
    document.querySelector(`[data-title="${file}"]`).innerHTML = svg;
  })
}
