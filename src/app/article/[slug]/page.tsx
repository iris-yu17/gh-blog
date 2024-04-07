import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Prose from '@/components/ui/Prose';

import { getSingleIssue, getComments } from '@/fetch';

type IssueDataType = {
  title: string;
  body: string;
  user: {
    login: string;
  };
  created_at: string;
};

type CommentsType = {
  id: string;
  updated_at: string;
  body: string;
  user: {
    login: string;
  };
};

export default async function ArticleDetail(props) {
  const issueNumber = props.params.slug;

  const data: IssueDataType = await getSingleIssue(issueNumber);
  const { title, body, user, created_at } = data;

  const comments: CommentsType[] = await getComments(issueNumber);

  console.log(data);

  return (
    <>
      <div className="mb-4">
        <h1 className="text-4xl">{title}</h1>
        <div className="flex gap-2 text-gray-500">
          <div>作者：{user.login}</div>
          <div>
            {new Date(created_at).toLocaleString('zh-TW', {
              timeZone: 'Asia/Taipei',
            })}
          </div>
        </div>
      </div>
      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineBody className="border-2 border-gray-300 border-dashed rounded-lg p-4">
              <Prose>
                <MDXRemote source={body} />
              </Prose>
            </TimelineBody>
            <Button color="gray">
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </TimelineContent>
        </TimelineItem>
        {comments.map((item) => {
          const { id, updated_at, user, body } = item;
          return (
            <TimelineItem key={id}>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>
                  {new Date(updated_at).toLocaleString('zh-TW', {
                    timeZone: 'Asia/Taipei',
                  })}
                </TimelineTime>
                <TimelineBody className="text-gray-500">
                  留言者： {user.login}
                </TimelineBody>
                <TimelineBody className="border-2 border-gray-300 border-dashed rounded-lg p-4">
                  <Prose>
                    <MDXRemote source={body} />
                  </Prose>
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
}
