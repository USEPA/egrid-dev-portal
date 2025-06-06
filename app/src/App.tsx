import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import "./assets/css/styles.css";
import EGRIDDevPortal from "./pages/egrid-dev-portal";
import Navigation from "./components/Navigation/Navigation";
import DataVisLayout from "./layouts/dataVisLayout";

function App() {
  const DynamicTheme = () => {
    const location = useLocation();

    useEffect(() => {
      const root = document.documentElement; 

      // Remove any previously added classes
      root.classList.remove("root");

      // Add the class based on the current route
      if (location.pathname.startsWith("/ggplot")) {
        root.classList.add("ggplot");
      } 
      else {
        root.classList.add("root");
      }
    }, [location]);

    return null;
  };

  return (
    <Router>
      <div className="App">
        <DynamicTheme />
        <Navigation />
        <Routes>
          <Route path="/" element={<DataVisLayout />}>
          <Route index element={<EGRIDDevPortal />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;