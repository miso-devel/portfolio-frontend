import { PostIndex } from "../../axios/Postactions";
import { PostDelete } from "../../axios/Postactions";
export const Posts = () => {
  const MyPosts = PostIndex();
  const Delete = (data: any) => PostDelete(data);
  return (
    <div className="p-20">
      <p className="text-3xl">Apps</p>
      <div className=" grid grid-cols-4 gap-2 m-10">
        {MyPosts.map(
          (p: { id: number; title: string; content: string; url: string }) => {
            return (
              <div key={p.id} className=" text-slate-800 neumorphism p-10">
                <p>{p.title}</p>
                <p>{p.content}</p>
                <p>{p.url}</p>
                <button onClick={() => Delete(p)}>button</button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
