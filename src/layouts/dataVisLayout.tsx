// src/pages/datavis/DataVisLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

const DataVisLayout: React.FC = () => {
  // const location = useLocation();

  // Determine if the current path is a chart route
  // const isChartRoute = location.pathname.startsWith("/datavis/charts");

  return (
    <div>
      {/* Main Navigation */}

      {/* Conditional Chart Navigation */}
      {/* {isChartRoute && (
       <nav className="secondary-nav">
          <div className="banner-container">
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                display: "flex",
                gap: "10px",
              }}
            >
              <li>
                <Link to="/datavis/charts/line-charts">Line Charts</Link>
              </li>
              <li>
                <Link to="/datavis/charts/bar-charts">Bar Charts</Link>
              </li>
              <li>
                <Link to="/datavis/charts/area-charts">Area Charts</Link>
              </li>
              <li>
                <Link to="/datavis/charts/maps">Maps</Link>
              </li>
            </ul>
          </div>
        </nav>
      )} */}

      {/* Outlet renders the component of the nested route */}
      <Outlet />
    </div>
  );
};

export default DataVisLayout;
