import React from 'react';

export const UserData = ({ body, handleTextInput }) => {
  // placeholder text for the textarea
  let placeholder = 'Anything you type in here will be saved to your FusionAuth user data.';

  // the user's data.userData (or an empty string if uninitialized)
  let userData = body.registration && body.registration.data ? body.registration.data.userData : '';

  // textarea (locked if user not logged in)
  let input = body.token ? (
    <textarea placeholder={placeholder} onChange={handleTextInput} defaultValue={userData}></textarea>
  ) : (
    <textarea placeholder={placeholder} readOnly></textarea>
  );

  // section title
  let title = body.token ? <h2>Your User Data</h2> : <h2>Sign In to Edit Your User Data</h2>;

  // JSX return
  return (
    <div id="UserData">
      {title}
      {input}
    </div>
  );
};
