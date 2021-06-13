import React from 'react';

export const Response = ({ body }) => {
  return (
    <div id="Response">
      <h2>FusionAuth Response</h2>
      <pre>{JSON.stringify(body, null, '\t')}</pre>
    </div>
  );
};
