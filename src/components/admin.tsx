import { Posts } from "../components/posts/posts";
import { CreatePosts } from "../components/posts/createPosts";

export const Admin = () => {
  return (
    <div className="grid grid-cols-1  py-40">
      <CreatePosts />
      <Posts />
    </div>
  );
};
