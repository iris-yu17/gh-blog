import CardUi from '@/components/ui/CardUi';
import ArticleList from '@/components/ArticleList';

import { getIssuesData, getTotalOpenIssuesCount } from '@/fetch';
import { IssueDataType } from '@/types';

export default async function Article() {
  const data: IssueDataType[] = await getIssuesData(1);

  const totalCount = await getTotalOpenIssuesCount();

  return (
    <>
      {data?.map((item) => <CardUi data={item} key={item.id} />)}
      <ArticleList totalCount={totalCount} />
    </>
  );
}
