
import { useParams } from "react-router-dom";
import { PostContent } from "../components/Posts/Content";
import { PostInfo } from "../components/Posts/Info";
import { PostProps } from "../components/Posts/Card";
import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

export function Post() {
  const { number } = useParams()
  console.log(number)

  const [post, setPost] = useState<PostProps>();

  const getPosts = useCallback(async () => {
    const response = await api.get(`repos/dandevweb/github-blog-react/issues/${number}`);
    setPost(response.data);
  }, [number])

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <PostInfo postInfo={post} />

      <PostContent content={post.body} />

    </main>
  )
}