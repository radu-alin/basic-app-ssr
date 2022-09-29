import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  const headContent = (
    <Helmet>
      <title>Not found 404</title>
      <meta property="og:title" content="React/SSR app" />
    </Helmet>
  );

  return (
    <div className="center-align">
      {headContent}
      <h5>Ooops, route not found.</h5>
    </div>
  );
};
export default { component: NotFoundPage };
