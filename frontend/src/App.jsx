import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ShowPost from "./pages/ShowPost"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"

import styles from "./styles/App.module.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-post/:id" element={<ShowPost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
