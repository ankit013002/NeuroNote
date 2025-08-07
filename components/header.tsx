"use client";

import {
  SignedIn,
  useUser,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="flex justify-between p-5 items-center">
      {user && (
        <h1 className="text-2xl">
          {user?.firstName}
          {"'s "}
          Space
        </h1>
      )}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
