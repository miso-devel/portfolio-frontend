import { CreateInstance } from "./createInstance";
import { useEffect } from "react";

export const Actions = () => {
  const client = CreateInstance();
  useEffect(() => {
    client.get("/posts").then((res) => {
      console.log(res.data);
    });
  }, []);
};
