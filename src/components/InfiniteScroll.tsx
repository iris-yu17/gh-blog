'use client';

import { useInView } from 'react-intersection-observer';
import { Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function InfiniteScroll(props) {
  const { setLoadMore, totalCount, currentCount } = props;

  const [disable, setDisable] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setLoadMore(inView);
  }, [inView]);

  useEffect(() => {
    if (totalCount === currentCount) {
      setDisable(true);
    }
  }, [currentCount]);

  return (
    <>
      {disable ? (
        <div className='text-center'>No More Data</div>
      ) : (
        <div ref={ref} className='flex justify-center'>
          <Spinner aria-label="Default status example" />
        </div>
      )}
    </>
  );
}
