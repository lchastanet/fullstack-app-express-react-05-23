import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import ShowPost from "../pages/ShowPost"
import CreatePost from "../pages/CreatePost"
import EditPost from "../pages/EditPost"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import ShowUsers from "../pages/ShowUsers"
import ProtectedRoute from "../components/ProtectedRoute"
import { useCurrentUserContext } from "../contexts/CurrentUserContext"

function AppRoutes() {
  const { user } = useCurrentUserContext()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show-post/:id" element={<ShowPost />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/edit-post/:id" element={<EditPost />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        element={
          <ProtectedRoute
            isAllowed={user?.roles.includes("admin")}
            redirectPath="/"
          />
        }
      >
        <Route path="/show-users" element={<ShowUsers />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
