import Link from "next/link";

export default function FeedPage() {
  const mockedStories = [
    {
      nickname: "JohnDoe",
      watched: false,
      stories: [
        {
          id: "1",
          image: "https://source.unsplash.com/featured/300x201",
          content: "Testando",
        },
      ],
    },
    {
      nickname: "JohnDoe",
      watched: false,
      stories: [
        {
          id: "2",
          image: "https://source.unsplash.com/featured/300x201",
          content: "Testando 2",
        },
        {
          id: "4",
          image: "https://source.unsplash.com/featured/300x201",
          content: "Testando 2",
        },
      ],
    },
    {
      nickname: "JohnDoe",
      watched: false,
      stories: [
        {
          id: "3",
          image: "https://source.unsplash.com/featured/300x201",
          content: null,
        },
      ],
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-3">The Feed</h1>

      <div className="flex flex-wrap gap-2">
        {mockedStories.map((story) => {
          return (
            <Link
              key={story.stories[0].id}
              href={story.stories[0].id}
              className="p-8 rounded-xl bg-slate-800 shadow-lg shadow-black/25"
            >
              <span>{story.nickname}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
