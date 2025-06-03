"use client";

import {
  SignedIn,
  useUser,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

const header = () => {
  const { user } = useUser();

  return (
    <div>
      {user && (
        <h1>
          {user?.firstName}
          {"'s"}
          Space
        </h1>
      )}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default header;
