import { Posts } from "../components/posts/posts";
import { Profile } from "../components/profiles/profile";
import { Career } from "../components/profiles/career";
export const Home = () => {
  return (
    <div className="grid grid-cols-3">
      <Profile />
      <div className=" col-span-2  border-l-orange-500 border-l-2">
        <Career />
        <Posts />
      </div>
    </div>
  );
};
