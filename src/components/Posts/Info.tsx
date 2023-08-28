import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMessage, faArrowUpRightFromSquare, faChevronLeft, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function PostInfo() {
  return (
    <div className="flex items-center justify-start p-8 -mt-24 rounded-lg bg-theme-profile">
      <div className="flex flex-col items-start w-full pl-2 text-theme-text">
        <div className="flex justify-between w-full mb-5">
          <Link className="text-[12px] flex items-center gap-2 text-theme-blue" to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <a className="text-[12px] flex items-center gap-2 text-theme-blue" href="" target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <h2 className="text-2xl font-bold text-theme-title">JavaScript data types and data structures</h2>

        <div className="flex w-full gap-4 pt-4">
          <a className="flex items-center" href="#">
            <FontAwesomeIcon icon={faGithub} className="pr-2 text-theme-label" />
            cameronwll
          </a>

          <a className="flex items-center" href="#">
            <FontAwesomeIcon icon={faCalendarAlt} className="p-2 text-theme-label" />
            Há 1 dia
          </a>

          <a className="flex items-center" href="#">
            <FontAwesomeIcon icon={faMessage} className="p-2 text-theme-label" />
            5 comentários
          </a>
        </div>
      </div>
    </div>
  )
}