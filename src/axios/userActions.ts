import { CreateInstance } from "./createInstance";

// Logged_inアクション
// ログインしたか確かめる
export const LoggedInCheck = () => {
  const client = CreateInstance();
  client
    .get("/logged_in", { withCredentials: true })
    .then((res) => {
      console.log("response:", res);
    })
    .catch((error) => {
      console.log("error:", error);
    });
};

// loginアクション
export const SessionCreate = (
  formData: {
    email: string;
    password: string;
  },
  LoggedIn: any
) => {
  const client = CreateInstance();
  client
    .post(
      "/login",
      {
        user: {
          email: formData.email,
          password: formData.password,
        },
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.data.logged_in) {
        LoggedIn("ログイン済み");
      }
    })
    .catch((error) => {
      console.log("error:", error);
    });
};
