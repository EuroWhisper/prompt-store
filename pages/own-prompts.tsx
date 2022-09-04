import { signIn, useSession } from 'next-auth/react';
import { NextPage } from 'next';

import TopBar from '../components/TopBar';

const OwnPrompts: NextPage = () => {
  const session = useSession();

  if (session.status === 'unauthenticated') {
    signIn();
  }
  return (
    <main>
      <TopBar />
      <div>Own prompts</div>
    </main>
  );
};

export default OwnPrompts;
