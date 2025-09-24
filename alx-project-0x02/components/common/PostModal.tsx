import { setConfig } from "next/config"
import { useState } from "react"


export type PostData = {
    title: string;
    content: string

}

interface PostModelProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: PostData) => void
}


const PostModal: React.FC<PostModelProps> = ({isOpen, onClose, onSubmit}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim())return;
        onSubmit({title, content});
        setTitle("");
        setContent("");
        onClose();

  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Add a New Post
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Please enter your content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

           <button
            type="button"
            className="mt-2 rounded-lg bg-brown-600 px-4 py-2 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
