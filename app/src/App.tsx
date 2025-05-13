import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import "./assets/css/styles.css";
import PowerSectorDevPortal from "./pages/power-sector-dev-portal";
import DataVisStyleGuide from "./pages/datavis/datavis";
import Navigation from "./components/Navigation/Navigation";
import DataVisLayout from "./layouts/dataVisLayout";
import Principles from "./pages/datavis/principles/principles";
import DesignElements from "./pages/datavis/design-elements/design-elements";
import Color from "./pages/datavis/design-elements/color";
import Typography from "./pages/datavis/design-elements/typography";
import Symbology from "./pages/datavis/design-elements/symbology";
import Layout from "./pages/datavis/design-elements/layout";
import LineCharts from "./pages/datavis/charts/line-charts";
import Charts from "./pages/datavis/charts/charts";
import BarCharts from "./pages/datavis/charts/bar-charts";
import AreaCharts from "./pages/datavis/charts/area-charts";
import Maps from "./pages/datavis/charts/maps";
import FurtherReading from "./pages/datavis/resources/resources/resources";
import GGplot from "./pages/ggplot/ggplot";
import Highcharts from "./pages/highcharts/highcharts";
import HighchartsUsingTheTheme from "./pages/highcharts/hc-using-the-theme/hc-using-the-theme";
import HighchartsCustomization from "./pages/highcharts/hc-customization/hc-customization";
import APIDocumentation from "./pages/api/api";
import BestPractices from "./pages/ggplot/best-practices/best-practices";
import UsingTheTheme from "./pages/ggplot/using-the-theme/using-the-theme";

function App() {
  const DynamicTheme = () => {
    const location = useLocation();

    useEffect(() => {
      const root = document.documentElement; 

      // Remove any previously added classes
      root.classList.remove("ggplot", "datavis", "highcharts", "api", "root");

      // Add the class based on the current route
      if (location.pathname.startsWith("/ggplot")) {
        root.classList.add("ggplot");
      } else if (location.pathname.startsWith("/datavis")) {
        root.classList.add("datavis");
      } else if (location.pathname.startsWith("/highcharts")) {
        root.classList.add("highcharts");
      } else if (location.pathname.startsWith("/api")) {
        root.classList.add("api");
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
          <Route index element={<PowerSectorDevPortal />} />
          </Route>
          <Route path="/datavis" element={<DataVisLayout />}>
            <Route index element={<DataVisStyleGuide />} />
            <Route path="principles" element={<Principles />} />
            <Route path="design-elements" element={<DesignElements />} />
            {/* Design Elements Sub-Routes */}
            <Route path="design-elements/color" element={<Color />} />
            <Route path="design-elements/typography" element={<Typography />} />
            <Route path="design-elements/symbology" element={<Symbology />} />
            <Route path="design-elements/layout" element={<Layout />} />
            {/* Charts Routes */}
            <Route path="charts" element={<Charts />} />
            <Route path="charts/line-charts" element={<LineCharts />} />
            <Route path="charts/bar-charts" element={<BarCharts />} />
            <Route path="charts/area-charts" element={<AreaCharts />} />
            <Route path="charts/maps" element={<Maps />} />
            {/* Other Routes */}
            <Route path="resources" element={<FurtherReading />} />
          </Route>
          <Route path="/ggplot" element={<DataVisLayout />}>
            <Route index element={<GGplot />} />
            <Route path="using-the-theme" element={<UsingTheTheme />} />
            <Route path="best-practices" element={<BestPractices />} />
          </Route>
          <Route path="/highcharts" element={<DataVisLayout />}>
            <Route index element={<Highcharts />} />
            <Route path="hc-using-the-theme" element={<HighchartsUsingTheTheme />} />
            <Route path="hc-customization" element={<HighchartsCustomization />} />
          </Route>
             <Route path="/api" element={<APIDocumentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
