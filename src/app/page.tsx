type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: "no-store",
  });
  const posts: Post[] = await response.json();
  return (
    <div>
      <h1>سلام رفیق</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
