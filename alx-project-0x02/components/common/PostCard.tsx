import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({userId, title, content}) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">{title}</h2>
            <p className="text-gray-700 mb-2">{content}</p>
            <p>{userId}</p>
        </div>
    )
}

export default PostCard