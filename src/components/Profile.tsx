import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <div className="flex items-center justify-start p-8 -mt-24 bg-theme-profile rounded-xl">
      <img className="w-40 p-2 rounded-xl" src="https://github.com/dandevweb.png" alt="" />
      <div className="flex flex-col items-start pl-2 text-theme-text">
        <div className="flex justify-between w-full ">
          <h2 className="mb-2 text-2xl font-bold">Fullstack Developer</h2>
          <a className="text-[12px] flex items-center gap-2 text-theme-blue" href="" target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <div className="flex w-full gap-4 pt-4">
          <a className="flex items-center" href="#">
            <FontAwesomeIcon icon={faGithub} className="p-2 text-theme-label" />
            cameronwll
          </a>

          <a className="flex items-center" href="#">
            <FontAwesomeIcon icon={faBuilding} className="p-2 text-theme-label" />
            Rocketseat
          </a>

          <a className="flex items-center" href="#">
            <FontAwesomeIcon icon={faUserGroup} className="p-2 text-theme-label" />
            32 seguidores
          </a>
        </div>
      </div>
    </div>
  )
}