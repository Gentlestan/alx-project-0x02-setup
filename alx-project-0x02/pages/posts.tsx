import Header from "@/components/layout/Header"
import PostCard from "@/components/common/PostCard"
import { PostProps } from "@/interfaces"
import { useEffect, useState } from "react"

const Posts: React.FC = () => {
    
    const [posts, setPosts] = useState<PostProps[]>([]);

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((res) => res.json())
    .then((data) => {

       const mapped: PostProps[] = data.map((item: any) => ({
        title: item.title,
        content: item.title,
        userId: item.userId
       }))
       setPosts(mapped)
    })
}, [])



    return (
        <div>
            <Header />
            <h1 className="p-4">Welcome to Post Page</h1>
            {posts.map((post, index)=> 
            <PostCard
            key={index}
            title={post.title}
            content={post.title}
            userId={post.userId}
            />
            )}
        </div>
    )
}

export default Posts