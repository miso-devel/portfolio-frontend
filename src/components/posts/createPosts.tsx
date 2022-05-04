import { PostCreate } from "../../axios/Postactions";
import { useState } from "react";
export const CreatePosts = () => {
  type Form = { title: string; content: string; url: string };
  const [formData, setFormData] = useState<Form>({
    title: "",
    content: "",
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const onSubmit = (event: Form) => {
    PostCreate(event);
  };
  return (
    <div className="text-center grid grid-cols-1 mx-40">
      <p>post form</p>
      <div className="p-3">
        <span>title：</span>
        <input
          name="title"
          type="text"
          className=" text-slate-700"
          onChange={handleChange}
          value={formData.title}
        />
      </div>
      <div className="p-3">
        <span>content：</span>
        <input
          name="content"
          type="text"
          className=" text-slate-700"
          onChange={handleChange}
          value={formData.content}
        />
      </div>
      <div className="p-3">
        <span>url：</span>
        <input
          name="url"
          type="text"
          className=" text-slate-700"
          onChange={handleChange}
          value={formData.url}
        />
      </div>

      <button onClick={() => onSubmit(formData)}>送信</button>
    </div>
  );
};
