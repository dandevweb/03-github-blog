import { Posts } from "../components/Posts";
import { Profile } from "../components/Profile";

export function Home() {
  return (
    <div>
      <Profile />
      <Posts />
    </div>
  )
}