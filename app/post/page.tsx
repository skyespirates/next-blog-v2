import Link from "next/link";

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data = await res.json();
  return data;
}

export default async function PostPage() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post: any) => (
        <li>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
