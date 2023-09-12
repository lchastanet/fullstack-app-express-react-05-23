import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import AppRoutes from "./routes/AppRoutes"
import { ThemeProvider } from "./contexts/ThemeContext"
import { CurrentUserContextProvider } from "./contexts/CurrentUserContext"
import { useEffect } from "react"
import { getCSRFToken } from "./services/expressAPI"

function App() {
  useEffect(() => {
    getCSRFToken()
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider>
        <CurrentUserContextProvider>
          <div className="flex flex-col min-h-screen bg-slate-100">
            <Header />
            <div className="flex-grow flex flex-col justify-center">
              <AppRoutes />
            </div>
            <Footer />
          </div>
        </CurrentUserContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
