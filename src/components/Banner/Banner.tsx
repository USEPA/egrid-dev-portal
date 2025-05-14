import React from "react";
import "./Banner.scss";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { getPageLevelforBreadcrumbs } from "../../utilities/getPageInfo";
import { useLocation } from "react-router-dom";

interface BannerProps {
  title: string;
  tagline: string;
  level?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  tagline,
  level = "default",
}) => {
  const location = useLocation();
  const { isRouteWithBanner } = getPageLevelforBreadcrumbs(location);

  return (
    <>
      <header className={`banner ${level}`}>
        <div className="banner-container">
          <h1>{title}</h1>
          <p>{tagline}</p>
        </div>
      </header>
      {isRouteWithBanner && <Breadcrumbs />}
    </>
  );
};

export default Banner;
