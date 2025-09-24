import Card from "@/components/common/Card"
import PostModal, {PostData}  from "@/components/common/PostModal"
import { useState } from "react"

const Home: React.FC = () => {
    const [posts, setPosts] = useState<PostData[]>([])
    const [open, setOpen] = useState(false)

    const addPost = (data: PostData) => {
        setPosts((prev) => [...prev, data ])
    }
    return(
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-6">Welcome to Home Page</h1>
            <button
             onClick={() => setOpen(true)}
             className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Add New Post
            </button>
            {posts.length === 0 && <p>No posts yet. Click the button above to add one.</p>}
            
                  <div className="space-y-4">
        {posts.map((post, idx) => (
          <div key={idx} className="border rounded p-4 shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
        </div>
            <PostModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onSubmit={addPost}/>
            <Card title="Welcome" content="This is a welcome Card" />
        </div>
    )
}
export default Home