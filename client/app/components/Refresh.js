import React from 'react';

import * as config from '../../../config';

export const Refresh = () => {
  const onClick = () => {
    fetch(`http://localhost:${config.serverPort}/refresh`, {
      credentials: 'include', // fetch won't send cookies unless you set credentials
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };
  return <button onClick={onClick}>Refresh</button>;
};
