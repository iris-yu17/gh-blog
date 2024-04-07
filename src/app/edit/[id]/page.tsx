import EditContent from './content';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getSingleIssue } from '@/fetch';

export default async function CreateNewPost({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const token = session?.accessToken;

  const issueData = await getSingleIssue(Number(params.id));

  return <EditContent token={token || ''} issueData={issueData} />;
}
