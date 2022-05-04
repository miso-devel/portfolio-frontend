import { CreateInstance } from "./createInstance";
import { useEffect, useState } from "react";
// Indexアクション
const initial = [
  {
    id: 0,
    title: "",
    content: "",
    url: "",
  },
];
export const PostIndex = () => {
  const [posts, setPosts] = useState(initial);
  const client = CreateInstance();
  useEffect(() => {
    client.get("/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);
  return posts;
};
// createアクション
export const PostCreate = (formData: {
  title: string;
  content: string;
  url: string;
}) => {
  const client = CreateInstance();
  return client.post("/posts", {
    title: formData.title,
    content: formData.content,
    url: formData.url,
  });
};

// deleteアクション
export const PostDelete = (formData: {
  id: number;
  title: string;
  content: string;
  url: string;
}) => {
  const client = CreateInstance();
  return client.delete(`/posts/${formData.id}`, formData);
};
