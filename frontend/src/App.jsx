import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AppRoutes from "./routes/appRoutes";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-slate-100">
          <Header />
          <div className="flex-grow">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
