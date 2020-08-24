SystemJS.config({
  baseURL: 'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@16.13.1/umd/react.production.min.js',
    'react-dom': 'react-dom@16.13.1/umd/react-dom.production.min.js',
    'react-router-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js',
    '@material-ui': '@material-ui/core@latest/umd/material-ui.production.min.js',
    'he': 'he@1.2.0/he.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./app.jsx')
  .catch(console.error.bind(console));