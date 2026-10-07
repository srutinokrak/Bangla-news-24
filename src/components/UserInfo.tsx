"use client";

import { authClient } from "@/lib/auth-client";
import { signInEmail } from "better-auth/api";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user);

  const handleSignout = async() => {
     await authClient.signOut();
  }

  return (
    <div  className="absolute right-4 top-4 flex items-center gap-1 text-sm">
      {user ? (
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
          <h2>{user?.name}</h2>
        <button onClick={handleSignout} className="btn btn-error btn-xs">Signout</button>
        </div>
      ) : (
        <div>
        <Link href={'/signin'}>
            <button className="px-3 py-2 text-neutral-700 hover:text-red-700">
            সাইন ইন
          </button>
        </Link>
            
            <Link href={'/signup'}>
          <button className="rounded-md bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-800">
            সাইন আপ
          </button>
            </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
