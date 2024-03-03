import CardUi from '@/components/ui/CardUi';
import ArticleList from '@/components/ArticleList';

import { getBeersData, getIssuesData, getTotalOpenIssuesCount } from '@/fetch';

export default async function Article() {
  const data = await getIssuesData(1);

  const totalCount = await getTotalOpenIssuesCount();

  return (
    <>
      {data?.map((item) => <CardUi data={item} key={item.id} />)}
      <ArticleList totalCount={totalCount}/>
    </>
  );
}
