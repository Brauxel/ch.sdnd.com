const path = require('path');
const express = require('express');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import Helmet from 'react-helmet';

const app = express();

app.use('/static', express.static('dist'));

app.use((req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      
      let html = renderToString(<RouterContext {...renderProps} />);
      let head = Helmet.rewind();

      res.status(200).send(renderPage(html, head))
    } else {
      res.status(404).send('Not found')
    }
  })
});

function renderPage(html, head){
  

  let output = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8" />
        ${head.title}
        ${head.meta}
        ${head.link}
        <link rel='stylesheet' href='/static/style.css'/>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;

  return output;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
