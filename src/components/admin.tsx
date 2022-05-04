import { Posts } from "../components/posts/posts";
import { CreatePosts } from "../components/posts/createPosts";
import { Login } from "../components/auth/login";
import { Logged_in } from "./auth/logged_in";
import { useState } from "react";

export const Admin = () => {
  return (
    <div className="grid grid-cols-1  py-40">
      <Login />
      <Logged_in />
      <CreatePosts />
      <Posts />
    </div>
  );
};
