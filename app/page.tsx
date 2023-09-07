'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { signIn } from 'next-auth/react';
import SignOutButton from './components/SignOutButton';
import TailwindLayout from './TailwindLayout';

export default function Home() {
  const [text, setText] = useState('');

  return (
    <TailwindLayout>
      <ul className="list-none pt-5">
        <SignOutButton />
        <div>
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn('google', {
                callbackUrl: 'http://localhost:3000/dashboard',
              });
            }}
          >
            Sign in
          </a>{' '}
        </div>
      </ul>
    </TailwindLayout>
  );
}
