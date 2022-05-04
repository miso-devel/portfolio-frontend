import { CreateInstance } from "./createInstance";
import { useEffect, useState } from "react";

// Logged_inアクション
// ログインしたか確かめる
export const LoggedInCheck = () => {
  const client = CreateInstance();
  client
    .get("/logged_in", { withCredentials: true })
    .then((res) => {
      console.log("response:", res);
      console.log(res.data.logged_in);
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
      console.log("response:", res.data);
      console.log(res.data.logged_in);
      if (res.data.logged_in) {
        LoggedIn("ログイン済み");
      }
    })
    .catch((error) => {
      console.log("error:", error);
    });
};
