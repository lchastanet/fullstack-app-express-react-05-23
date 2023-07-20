import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ShowPost from "../pages/ShowPost";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show-post/:id" element={<ShowPost />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/edit-post/:id" element={<EditPost />} />
    </Routes>
  );
}

export default AppRoutes;
