import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface PostProps {
  body: string;
  number: number;
  html_url: string;
  title: string;
  user: {
    login: string;
    html_url: string;
  }
  created_at: string;
  comments: number;
}

interface PostCardProps {
  post: PostProps;
}

export function PostCard({ post }: PostCardProps) {
  const { title, body, number, created_at } = post;
  return (
    <Link to={`posts/${number}`} className="flex flex-col gap-5 p-8 rounded-lg bg-theme-post">
      <div className="flex items-start justify-between w-full">
        <h2 className="text-xl text-theme-title">{title}</h2>
        <span className="text-sm text-theme-span whitespace-nowrap">
          {formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p className="text-theme-text">{body.substring(0, 160) + "..."}</p>
    </Link>
  )
}
