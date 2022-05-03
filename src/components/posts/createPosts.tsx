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
    console.log(name);
    console.log(value);
    setFormData({ ...formData, [name]: value, [name]: value });
  };
  console.log(formData);
  const onSubmit = (event: Form) => {
    PostCreate(event);
  };
  return (
    <div className=" text-center">
      <p>post form</p>

      <span>title</span>
      <input
        name="title"
        type="text"
        className=" text-slate-700"
        onChange={handleChange}
        value={formData.title}
      />

      <span>content</span>
      <input
        name="content"
        type="text"
        className=" text-slate-700"
        onChange={handleChange}
        value={formData.content}
      />

      <span>url</span>
      <input
        name="url"
        type="text"
        className=" text-slate-700"
        onChange={handleChange}
        value={formData.url}
      />

      <button onClick={() => onSubmit(formData)}>送信</button>
    </div>
  );
};
