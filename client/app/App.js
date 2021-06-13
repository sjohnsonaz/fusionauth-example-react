import React, { useEffect, useState } from 'react';

import { Greeting } from './components/Greeting.js';
import { LogInOut } from './components/LogInOut.js';
import { Response } from './components/Response.js';
import { UserData } from './components/UserData.js';

const config = require('../../config');

export const App = () => {
  const [body, setBody] = useState({});
  useEffect(() => {
    fetch(`http://localhost:${config.serverPort}/user`, {
      credentials: 'include', // fetch won't send cookies unless you set credentials
    })
      .then((response) => response.json())
      .then((response) => setBody(response));
  });

  const handleTextInput = (event) => {
    // update body.registration.data.userData
    body.registration.data = { userData: event.target.value };
    setBody(body);

    // save the change in FusionAuth
    fetch(`http://localhost:${config.serverPort}/set-user-data`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userData: event.target.value,
      }),
    });
  };

  return (
    <div id="App">
      <header>
        <h1>FusionAuth Example: React</h1>
        <Greeting body={body} />
        <LogInOut body={body} uri={`http://localhost:${config.serverPort}`} />
      </header>
      <main>
        <UserData body={body} handleTextInput={handleTextInput} />
        <Response body={body} />
      </main>
      <footer>
        <a href="https://fusionauth.io/docs/v1/tech/tutorials/">Learn how this app works.</a>
        <a href="https://twitter.com/fusionauth">Tweet your questions at us.</a>
      </footer>
    </div>
  );
};
