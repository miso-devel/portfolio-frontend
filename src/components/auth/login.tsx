import { useState } from "react";
import { SessionCreate } from "../../axios/userActions";
import { AdminPosts } from "../posts/adminPosts";
import { CreatePosts } from "../posts/createPosts";

export const Login = () => {
  type Form = { email: string; password: string };
  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
  });
  const [loggedInStatus, LoggedIn] = useState<string>("未ログイン");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: Form) => {
    SessionCreate(event, LoggedIn);
  };
  return (
    <div className="text-center grid grid-cols-1 mx-40">
      <p>ログインフォーム</p>
      <p>ログイン状態：{loggedInStatus}</p>
      <div className="p-3">
        <span>email：</span>
        <input
          name="email"
          type="text"
          className=" text-slate-700"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="p-3">
        <span>password：</span>
        <input
          name="password"
          type="text"
          className=" text-slate-700"
          onChange={handleChange}
          value={formData.password}
        />
      </div>

      <button onClick={() => onSubmit(formData)}>送信</button>
      {loggedInStatus === "ログイン済み" ? (
        <div>
          <AdminPosts />
          <CreatePosts />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
