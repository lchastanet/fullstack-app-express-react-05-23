import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

import styles from "./styles/App.module.css"
import ShowPost from "./pages/ShowPost"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-post/:id" element={<ShowPost />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
