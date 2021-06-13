import React from 'react';

export const LogInOut = ({ body, uri }) => {
  let message = body.token ? 'sign out' : 'sign in';

  let path = body.token ? '/logout' : '/login';

  return <a href={uri + path}>{message}</a>;
};
