import React from 'react';

export const Greeting = ({ body: { token } }) => {
  const message = token ? `Hi, ${token.email}!` : "You're not logged in.";

  return <span>{message}</span>;
};
