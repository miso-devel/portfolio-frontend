import { PostIndex } from "../../axios/Postactions";
export const Posts = () => {
  const MyPosts = PostIndex();
  console.log(PostIndex());
  return (
    <div className=" grid grid-cols-4 gap-2 m-10">
      {MyPosts.map(
        (p: { id: number; title: string; content: string; url: string }) => {
          return (
            <div key={p.id} className=" bg-slate-100 p-10 text-slate-800">
              <p>{p.title}</p>
              <p>{p.content}</p>
              <p>{p.url}</p>
            </div>
          );
        }
      )}
    </div>
  );
};
