async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch a post!");
  }

  const data = await res.json();
  return data;
}

export default async function SiglePost({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(id);
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
