import React from 'react';

import { Helmet } from 'react-helmet';

const HomePage = () => {
  const headContent = (
    <Helmet>
      <title>React/SSR app</title>
      <meta property="og:title" content="React/SSR app" />
    </Helmet>
  );

  return (
    <div className="center-align">
      {headContent}
      <h5>Welcome </h5>
      <p>Check out these awesome features</p>
    </div>
  );
};

export default { component: HomePage };

// https://react-ssr-api.herokuapp.com/
