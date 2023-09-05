import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export default function SignOutButton() {
  return (
    <a
      href={`/api/auth/signout`}
      onClick={async (e) => {
        e.preventDefault();
        signOut();
        // toast.success('Signed out');
      }}
    >
      Sign out
    </a>
  );
}
