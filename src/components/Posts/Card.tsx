import { Link } from "react-router-dom";

export function PostCard() {
  return (
    <Link to="/post/1" className="flex flex-col gap-5 p-8 rounded-lg bg-theme-post">
      <div className="flex items-start justify-between w-full">
        <h2 className="text-xl text-theme-title">JavaScript data types and data structures</h2>
        <span className="text-sm text-theme-span whitespace-nowrap">Há 1 dia</span>
      </div>
      <p className="text-theme-text">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
    </Link>
  )
}