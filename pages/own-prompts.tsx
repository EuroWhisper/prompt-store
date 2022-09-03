import { signIn, useSession } from 'next-auth/react';
import { NextPage } from 'next';

const OwnPrompts: NextPage = () => {
  const session = useSession();

  if (session.status === 'unauthenticated') {
    signIn();
  }
  return <div>Own prompts</div>;
};

export default OwnPrompts;
