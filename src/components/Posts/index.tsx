import { SearchForm } from "./SearchForm";
import { Post } from "./single";

export function Posts() {
  return (
    <div className="pt-16">
      <div className="flex justify-between w-full py-2">
        <h3 className="text-lg font-bold text-theme-subtitle">Publicações</h3>
        <span className="text-theme-span">6 publicações</span>
      </div>
      <SearchForm />

      <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}