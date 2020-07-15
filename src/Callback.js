import React, { useEffect } from "react";

export default function Callback(props) {
  useEffect(() => {
    function verifyUrl() {
      if (/access_token|id_token|error/.test(props.location.hash)) {
        console.log(props.location.hash);
        props.auth.handleAuthentication();
      } else {
        throw new Error("Invalid callback URL.");
      }
    }
    verifyUrl();
  });
  return (
    <div>
      <h1>...Loading</h1>
    </div>
  );
}
