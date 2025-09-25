import { GetStaticProps, NextPage } from 'next';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { type PostProps } from '../interfaces';   // <-- use the shared type

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1 className="p-4">Welcome to Post Page</h1>

      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

// This runs at build time (or during revalidation if you add `revalidate`)
export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  // Map API data into our PostProps shape
  const mapped: PostProps[] = data.map((item: any) => ({
    title: item.title,
    content: item.body,   // use the actual body as content
    userId: item.userId,
  }));

  return {
    props: {
      posts: mapped,
    },
    // Optional: regenerate every minute for fresher data
    // revalidate: 60,
  };
};

export default Posts;
