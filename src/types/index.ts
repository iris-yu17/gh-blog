export type Beer = {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
};

export type CardData = {
  title: string;
  url: string;
  number: string;
  user: string;
  comments: string;
};

export type CommentsType = {
  id: string;
  updated_at: string;
  body: string;
  user: {
    login: string;
  };
};


export type IssueDataType = {
  title: string;
  body: string;
  number: number;
  id: number,
  user: {
    login: string;
  };
  created_at: string;
};
