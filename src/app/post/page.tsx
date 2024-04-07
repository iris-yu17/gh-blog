import CreateNewPostContent from './content';
import { getServerSession } from 'next-auth';
import authOptions from "@/utils/options";

export default async function CreateNewPost() {
  const session = await getServerSession(authOptions);
  const token = session?.accessToken;

  return <CreateNewPostContent token={token || ''} />;
}
