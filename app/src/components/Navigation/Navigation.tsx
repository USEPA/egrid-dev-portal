import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import CloseIcon from "@mui/icons-material/Close";
import useIsMobile from "../../hooks/useIsMobile";
import { getPageInfo, isExactlyPath } from "../../utilities/getPageInfo";

const Navigation: React.FC = () => {
  const location = useLocation();
  const isMobileView = useIsMobile();

  const { route, title, isHomeRoute } = getPageInfo(location);

  return (
    <div className="top-nav">
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          {!isMobileView && !isHomeRoute && (
            <Link to="/" className="home-back-link">
              eGRID Dev Portal
            </Link>
          )}
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <Link to={route} title={title}>
                  {title}
                </Link>
              </em>
            </div>
            <button type="button" className="usa-menu-btn">
              Menu
            </button>
          </div>

          <nav aria-label="Primary navigation" className="usa-nav">
            {isMobileView && (
              <div className="mobile-icon-header">
                <em className="usa-logo__text">
                  <Link to={route} title={title}>
                    {title}
                  </Link>
                </em>
                <button type="button" className="usa-nav__close">
                  <CloseIcon />
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
