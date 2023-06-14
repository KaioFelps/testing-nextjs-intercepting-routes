interface IStoriesPage {
  params: {
    id: string;
  };
}

export default function StoriesPage({ params: { id } }: IStoriesPage) {
  return <div>{id}</div>;
}
