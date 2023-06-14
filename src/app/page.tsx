import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-3">Home</h1>
      <p>nothing important to see here...</p>

      <p>
        Consider going to{" "}
        <Link href="/feed" className="text-blue-500">
          ✨ <strong>The Feed</strong> ✨
        </Link>
      </p>
    </main>
  );
}
