import { SearchForm } from "./SearchForm";
import { PostCard, PostProps } from "./Card";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  async function getPosts() {
    try {
      const response = await api.get('repos/dandevweb/github-blog-react/issues');
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao obter as publicações:', error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pt-16">
      <div className="flex justify-between w-full py-2">
        <h3 className="text-lg font-bold text-theme-subtitle">Publicações</h3>
        <span className="text-theme-span">6 publicações</span>
      </div>

      <SearchForm />

      <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
        {posts.map((post) => {
          return (
            <PostCard
              key={post.number}
              post={post}
            />
          )
        })}

      </div>
    </div>
  )
}