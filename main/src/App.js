import Header from "./components/common/header";
import Home from "./components/pages/home/home";
import FindProperty from "./components/pages/find-property/find-property";
import ListProperty from "./components/pages/list-property/list-proprty";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/login";
import Signup from "./components/pages/signup/signup";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/find-property" element={<FindProperty/>}/>
        <Route path="/list-property" element={<ListProperty/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
