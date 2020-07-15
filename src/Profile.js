import React, { useState, useEffect } from "react";

export default function Profile(props) {
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    loadUserProfileData();
  }, []);
  const loadUserProfileData = () => {
    props.auth.getProfile((profile, err) => {
      setError(err);
      setProfile(profile);
    });
  };
  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <>
          <img
            src={profile.picture}
            style={{ width: "50px", height: "50px" }}
          />
          <p>Nickname: {profile.nickname}</p>
          <p>Email: {profile.email}</p>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </>
      ) : (
        <h3>{error}</h3>
      )}
    </div>
  );
}
