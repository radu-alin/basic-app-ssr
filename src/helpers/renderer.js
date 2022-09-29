import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import { Helmet } from 'react-helmet';

import serialize from 'serialize-javascript';

import { Routes } from '../client/Routes';

export const renderer = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  const serializedState = serialize(store.getState());

  return `
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="utf-8" />
         <link rel="icon" href="favicon.ico" />
          
         <!--Let browser know website is optimized for mobile-->
         <meta name="viewport" content="width=device-width, initial-scale=1" />
          
         <meta name="description" content="Web site created using React/SSR"/>
         
         <!--title-->
         ${helmet.title.toString()}
          
         <!--meta-->
         ${helmet.meta.toString()}
          
         <!--css/fonts-->
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
       </head>
       <body>
         <noscript>You need to enable JavaScript to run this app.</noscript>
         <div id="root">${content}</div>
         <script>window.INITIAL_STATE = ${serializedState}</script>
         <script src="bundle.js"></script>
       </body>
     </html>
  `;
};
