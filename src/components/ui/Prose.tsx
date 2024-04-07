import type { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
};

export default function Prose(props: propsType) {
  return <div className="prose prose-h2:mt-0 prose-h1:text-3xl">{props.children}</div>;
}
