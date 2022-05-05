import { PostIndex } from "../../axios/Postactions";

export const Posts = () => {
  const MyPosts = PostIndex();

  return (
    <div className="p-5 md:p-20">
      <p className="text-3xl">Apps</p>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-2 m-10">
        {MyPosts.map(
          (p: { id: number; title: string; content: string; url: string }) => {
            return (
              <div
                key={p.id}
                className="text-center text-slate-800 neumorphism p-2 py-5 md:p-10"
              >
                <p className="text-xl font-bold py-3">{p.title}</p>
                <p className="text-left">{p.content}</p>
                <a href={p.url} className="border-b-2 p-1 border-stone-800">
                  github
                </a>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
