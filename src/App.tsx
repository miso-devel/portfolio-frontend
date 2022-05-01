import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Actions } from "./axios/actions";
import { Index } from "./components/index";
function App() {
  const data: any = Actions();
  const [posts, setPosts] = useState();
  useEffect(() => {
    setPosts(data);
    console.log(data);
  }, []);
  console.log(posts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Index />
      </header>
    </div>
  );
}

export default App;
