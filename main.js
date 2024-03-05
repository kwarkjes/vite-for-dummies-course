import config from '.config';

Object.entries(config).forEach(([key, value]) => {
  document.querySelector('.container').style[key] = value + (config.$schema.units[key] || '');
});

import.meta.hot.accept();