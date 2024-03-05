import './style.css'
const container = document.querySelector('.container');
const modules = import.meta.glob('./data/\*.arrow');
Object.entries(modules).forEach(async ([path, module]) => {
  const { default: drawing } = await module();
  container.insertAdjacentHTML('beforeend', `<h1>${path.replace('./data/', '').replace('.arrow', '')}</h1>`);
  container.insertAdjacentHTML('beforeend', drawing);
  container.insertAdjacentHTML('beforeend', '<hr />');
})
