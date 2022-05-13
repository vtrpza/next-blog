/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth, googleAuthProvider } from "../lib/firebase";

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button type="button" className="btn-google" onClick={signInWithGoogle}>
      <img alt="google sigin logo" src="/google.png" /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return (
    <button type="button" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );
}

function UsernameForm() {
  return null;
}

export default function Enter() {
  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}
