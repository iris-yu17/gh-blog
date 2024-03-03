'use client';

import CardUi from './ui/CardUi';
import InfiniteScroll from './InfiniteScroll';

import { getBeersData, getIssuesData } from '@/fetch';
import { useEffect, useState } from 'react';
import { Beer } from '@/type';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ITEM_PER_PAGE = 3;

export default function ArticleList(props) {
  const { totalCount } = props;
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Beer[]>([]);

  const loadMoreData = async () => {
    await delay(1000);
    const _data = await getIssuesData(page + 1);
    setPage((oldPage) => oldPage + 1);
    setData((oldState) => [...oldState, ..._data]);
  };

  useEffect(() => {
    if (loadMore) {
      loadMoreData();
    }
  }, [loadMore]);

  return (
    <>
      {data?.map((item) => <CardUi data={item} key={item.id} />)}
      <InfiniteScroll
        setLoadMore={setLoadMore}
        totalCount={totalCount}
        currentCount={data.length + ITEM_PER_PAGE}
      />
    </>
  );
}
