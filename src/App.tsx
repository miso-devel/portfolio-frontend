import "./App.css";
import { Posts } from "./components/posts/posts";
import { CreatePosts } from "./components/posts/createPosts";
import { Profile } from "./components/Layouts/profile";
import { Career } from "./components/Layouts/career";
function App() {
  return (
    <div className="App  bg-slate-900">
      <div className="grid grid-cols-3">
        <Profile />
        <div className=" col-span-2  border-l-orange-500 border-l-2">
          <Career />
          <Posts />
          <CreatePosts />
        </div>
      </div>
    </div>
  );
}

export default App;
