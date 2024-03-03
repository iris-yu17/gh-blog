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

  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>{created_at}</TimelineTime>
          <TimelineTitle>{title}</TimelineTitle>
          <TimelineBody> by {user.login}</TimelineBody>
          <TimelineBody>{body}</TimelineBody>
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
              <TimelineTime>{updated_at}</TimelineTime>
              <TimelineTitle>{title}</TimelineTitle>
              <TimelineBody> by {user.login}</TimelineBody>
              <TimelineBody>{body}</TimelineBody>
              <Button color="gray">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
