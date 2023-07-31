import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import ShowPost from "../pages/ShowPost"
import CreatePost from "../pages/CreatePost"
import EditPost from "../pages/EditPost"
import Login from "../pages/Login"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show-post/:id" element={<ShowPost />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/edit-post/:id" element={<EditPost />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
