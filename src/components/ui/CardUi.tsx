'use client';

import { CardData } from '@/types';
import { Button, Card } from 'flowbite-react';
import { useRouter } from 'next/navigation';

export default function CardUi({ data }: { data: CardData }) {
  const { title, number, user, comments } = data;
  const router = useRouter();
  return (
    <Card className="max-w-sm my-2 mx-auto w-full md:w-1/2">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        作者: {user.login}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {comments} 則留言
      </p>
      <Button
        onClick={() => {
          router.push(`/article/${number}`);
        }}
      >
        瀏覽文章
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}
