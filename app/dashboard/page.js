import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { PrismaClient } from '@prisma/client';
export default async function Private() {
  // const session = await getServerSession();
  // console.log(session);
  // const supabase = createServerComponentClient({ cookies });
  // const data = await supabase.from('User').select();
  // console.log(data);

  const prisma = new PrismaClient();
  const posts = await prisma.user.findMany();
  console.log(posts);

  return <>you should be logged in to see this</>;
}
