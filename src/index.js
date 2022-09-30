import 'babel-polyfill';

// Start point for the server side application
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';

import { Routes } from './client/Routes';

import { renderer } from './helpers/renderer';
import { createStore } from './helpers/createStore';

const app = express();

let reqNo = 0;

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  console.log(
    '%c-> developmentConsole: send=> START',
    'color:#77dcfd',
    ++reqNo
  );

  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, _) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
    console.log('%c-> developmentConsole: res=> END', 'color:#77dcfd', reqNo);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000 ...');
});
