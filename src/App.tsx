import logo from "./logo.svg";
import "./App.css";
import { Posts } from "./components/posts/posts";
import { CreatePosts } from "./components/posts/createPosts";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Posts />
        <CreatePosts />
      </header>
    </div>
  );
}

export default App;
