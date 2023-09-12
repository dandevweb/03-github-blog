import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { api } from "../lib/axios";
import { useEffect, useState } from "react";

interface ProfileProps {
  name: string;
  login: string;
  html_url: string;
  avatar_url: string;
  bio: string;
  company: string;
  organization_url: string;
  followers: number;
  followers_url: string;
  organizations_url: string;
  blog: string;
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps | null>(null);

  async function getUser() {
    try {
      const response = await api.get('user');
      setProfile(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao obter o perfil do usuário:', error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-start p-8 -mt-24 rounded-lg bg-theme-profile">
      <img className="w-40 p-2 rounded-xl" src={profile.avatar_url} alt="" />
      <div className="flex flex-col items-start pl-2 text-theme-text">
        <div className="flex justify-between w-full ">
          <h2 className="mb-2 text-2xl font-bold">Fullstack Developer</h2>
          <a className="text-[12px] flex items-center gap-2 text-theme-blue" href={profile.html_url} target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p>{profile.bio}</p>

        <div className="flex w-full gap-4 pt-4">
          <a className="flex items-center" href={profile.html_url} target="_blank">
            <FontAwesomeIcon icon={faGithub} className="p-2 text-theme-label" />
            {profile.login}
          </a>

          <a className="flex items-center" href={profile.blog} target="_blank">
            <FontAwesomeIcon icon={faBuilding} className="p-2 text-theme-label" />
            {profile.company ?? 'Dandevweb'}
          </a>

          <a className="flex items-center" href={profile.followers_url} target="_blank">
            <FontAwesomeIcon icon={faUserGroup} className="p-2 text-theme-label" />
            {profile.followers} seguidores
          </a>
        </div>
      </div>
    </div>
  )
}