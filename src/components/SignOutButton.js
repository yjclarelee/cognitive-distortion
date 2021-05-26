import React from "react";
import { gapi } from "gapi-script";

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}

export default function SignOutButton() {
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
