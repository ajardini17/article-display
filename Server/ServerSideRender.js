// import qs from 'qs'
// import serialize from 'serialize-javascript'
// import React from 'react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// import { renderToString } from 'react-dom/server'

// export const renderFullPage = (html, preloadedState) => {
//   return `
//     <!doctype html>
//     <html>
//       <head>
//         <title>MedFeed</title>
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         <script>
//           // WARNING: See the following for security issues around embedding JSON in HTML:
//           // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
//           window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
//         </script>
//         <script src="../Static/bundle.js"></script>
//       </body>
//     </html>
//     `
// }

// export const handleRender = (req, res) => {
//   const params = qs.parse(req.query);
//   const counter = parseInt(params.counter, 10) || 0;

//   const store = createStore()
// }