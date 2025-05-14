import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useIsMobile from "../../hooks/useIsMobile";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import {
  getPageInfo,
  getPageLevelforBreadcrumbs,
  isCurrentPath,
  isExactlyPath,
} from "../../utilities/getPageInfo";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const isMobileView = useIsMobile();

  useEffect(() => {
    setExpandedSection(null);
  }, [location]);

  const {
    route,
    title,
    isDatavisRoute,
    isApiRoute,
    isGgplotRoute,
    isHcplotRoute,
    isHomeRoute,
  } = getPageInfo(location);

  const { isRouteWithBanner } = getPageLevelforBreadcrumbs(location);

  // Function to toggle section open/closed
  const toggleSection = (sectionId: string) => {
    setExpandedSection((prev) => (prev === sectionId ? null : sectionId));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isMobileView) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setExpandedSection(null); // Close all dropdowns when clicking outside
        }
      };

      // Add event listener for click outside
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup the event listener on component unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMobileView]);

  return (
    <>
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

              {isDatavisRoute && (
                <ul
                  className="usa-nav__primary usa-accordion"
                  ref={dropdownRef}
                >
                  <li className="usa-nav__primary-item">
                    <Link
                      to="/datavis/principles"
                      className={`usa-nav-link ${
                        isCurrentPath(location, "/datavis/principles")
                          ? "usa-current"
                          : ""
                      }`}
                    >
                      <span>Principles</span>
                    </Link>
                  </li>
                  <li className="usa-nav__primary-item">
                    <button
                      type="button"
                      className={`usa-accordion__button usa-nav__link ${
                        isCurrentPath(location, "/datavis/design-elements") ||
                        isCurrentPath(location, "/datavis/design-elements/")
                          ? "usa-current"
                          : ""
                      }`}
                      aria-expanded={
                        expandedSection === "section-one" ? "true" : "false"
                      }
                      aria-controls="basic-nav-section-one"
                      onClick={() => toggleSection("section-one")}
                    >
                      <span style={{ display: "flex", alignItems: "center" }}>
                        Design Elements <KeyboardArrowDownIcon />
                      </span>
                    </button>
                    <ul
                      id="basic-nav-section-one"
                      className="usa-nav__submenu"
                      style={{
                        display:
                          expandedSection === "section-one" ? "block" : "none",
                      }}
                    >
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/design-elements"
                          className={
                            isExactlyPath(location, "/datavis/design-elements")
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Design Elements</span>
                        </Link>
                      </li>
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/design-elements/color"
                          className={
                            isCurrentPath(
                              location,
                              "/datavis/design-elements/color"
                            )
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Color</span>
                        </Link>
                      </li>
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/design-elements/typography"
                          className={
                            isCurrentPath(
                              location,
                              "/datavis/design-elements/typography"
                            )
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Typography</span>
                        </Link>
                      </li>
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/design-elements/symbology"
                          className={
                            isCurrentPath(
                              location,
                              "/datavis/design-elements/symbology"
                            )
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Symbology</span>
                        </Link>
                      </li>
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/design-elements/layout"
                          className={
                            isCurrentPath(
                              location,
                              "/datavis/design-elements/layout"
                            )
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Chart Layout</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="usa-nav__primary-item">
                    <button
                      type="button"
                      className={`usa-accordion__button usa-nav__link ${
                        isCurrentPath(location, "/datavis/charts") ||
                        isCurrentPath(location, "/datavis/charts/")
                          ? "usa-current"
                          : ""
                      }`}
                      aria-expanded={
                        expandedSection === "section-two" ? "true" : "false"
                      }
                      aria-controls="basic-nav-section-two"
                      onClick={() => toggleSection("section-two")}
                    >
                      <span style={{ display: "flex", alignItems: "center" }}>
                        Charts <KeyboardArrowDownIcon />
                      </span>
                    </button>
                    <ul
                      id="basic-nav-section-two"
                      className="usa-nav__submenu"
                      style={{
                        display:
                          expandedSection === "section-two" ? "block" : "none",
                      }}
                    >
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/charts"
                          className={
                            isExactlyPath(location, "/datavis/charts")
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Charts</span>
                        </Link>
                      </li>
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/charts/line-charts"
                          className={
                            isCurrentPath(
                              location,
                              "/datavis/charts/line-charts"
                            )
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Line Charts</span>
                        </Link>
                      </li>
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/charts/bar-charts"
                          className={
                            isCurrentPath(
                              location,
                              "/datavis/charts/bar-charts"
                            )
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Bar and Column Charts</span>
                        </Link>
                      </li>
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/charts/area-charts"
                          className={
                            isCurrentPath(
                              location,
                              "/datavis/charts/area-charts"
                            )
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Area Charts</span>
                        </Link>
                      </li>
                      <li className="usa-nav__submenu-item">
                        <Link
                          to="/datavis/charts/maps"
                          className={
                            isCurrentPath(location, "/datavis/charts/maps")
                              ? "usa-current"
                              : ""
                          }
                        >
                          <span>Maps</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="usa-nav__primary-item">
                    <Link
                      to="/datavis/resources"
                      className={
                        isCurrentPath(location, "/datavis/resources")
                          ? "usa-current"
                          : ""
                      }
                    >
                      <span>Resources</span>
                    </Link>
                  </li>
                </ul>
              )}
               {isHcplotRoute && (
                <ul className="usa-nav__primary usa-accordion">
                  <li className="usa-nav__primary-item">
                    <Link
                      to="/highcharts/hc-using-the-theme"
                      className={
                        isCurrentPath(location, "/highcharts/hc-using-the-theme")
                          ? "usa-current"
                          : ""
                      }
                    >
                      <span>Using the Theme</span>
                    </Link>
                  </li>
                  <li className="usa-nav__primary-item">
                    <Link
                      to="/highcharts/hc-customization"
                      className={
                        isCurrentPath(location, "/highcharts/hc-customization")
                          ? "usa-current"
                          : ""
                      }
                    >
                      <span>Customization</span>
                    </Link>
                  </li>
                </ul>
              )}
              {isGgplotRoute && (
                <ul className="usa-nav__primary usa-accordion">
                  <li className="usa-nav__primary-item">
                    <Link
                      to="/ggplot/using-the-theme"
                      className={
                        isCurrentPath(location, "/ggplot/using-the-theme")
                          ? "usa-current"
                          : ""
                      }
                    >
                      <span>Using the Theme</span>
                    </Link>
                  </li>
                  <li className="usa-nav__primary-item">
                    <Link
                      to="/ggplot/best-practices"
                      className={
                        isCurrentPath(location, "/ggplot/best-practices")
                          ? "usa-current"
                          : ""
                      }
                    >
                      <span>Best Practices</span>
                    </Link>
                  </li>
                </ul>
              )}
              {isApiRoute && <></>}
            </nav>
          </div>
        </header>
      </div>

      {!isHomeRoute && !isRouteWithBanner && <Breadcrumbs />}
    </>
  );
};

export default Navigation;