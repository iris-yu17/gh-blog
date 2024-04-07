import CreateNewPostContent from './content';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function CreateNewPost() {
  const session = await getServerSession(authOptions);
  const token = session?.accessToken;

  return <CreateNewPostContent token={token || ''} />;
}
