import { signIn, signOut, useSession } from 'next-auth/react';

import Button from './Button';

export default function TopBar() {
  const { data: session, status } = useSession();

  return (
    <div className="p-4 border-b-2 border-b-stone-800 flex justify-end mb-4">
      {status === 'unauthenticated' && (
        <div>
          <Button onClick={handleSignIn}>Sign in</Button>
        </div>
      )}
      {status === 'authenticated' && (
        <div>
          <Button onClick={handleSignOut}>Sign out</Button>
        </div>
      )}
    </div>
  );

  function handleSignIn() {
    signIn();
  }

  function handleSignOut() {
    signOut();
  }
}
