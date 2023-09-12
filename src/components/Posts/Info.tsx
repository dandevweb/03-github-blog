import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMessage, faArrowUpRightFromSquare, faChevronLeft, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PostProps } from "./Card";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export interface PostInfoProps {
  postInfo: PostProps;
}

export function PostInfo({ postInfo }: PostInfoProps) {
  const { title, user, created_at, comments, html_url } = postInfo;

  return (
    <div className="flex items-center justify-start p-8 -mt-24 rounded-lg bg-theme-profile">
      <div className="flex flex-col items-start w-full pl-2 text-theme-text">
        <div className="flex justify-between w-full mb-5">
          <Link className="text-[12px] flex items-center gap-2 text-theme-blue" to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <a className="text-[12px] flex items-center gap-2 text-theme-blue" href={html_url} target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <h2 className="text-2xl font-bold text-theme-title">
          {title}
        </h2>

        <div className="flex w-full gap-4 pt-4">
          <a className="flex items-center" href={user.html_url} target="_blank">
            <FontAwesomeIcon icon={faGithub} className="pr-2 text-theme-label" />
            {user.login}
          </a>

          <a className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="p-2 text-theme-label" />
            {formatDistanceToNow(new Date(created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </a>

          <a className="flex items-center">
            <FontAwesomeIcon icon={faMessage} className="p-2 text-theme-label" />
            {comments > 1 ? `${comments} comentários` : `${comments} comentário`}
          </a>
        </div>
      </div>
    </div>
  )
}