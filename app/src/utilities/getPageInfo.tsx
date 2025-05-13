// utilities/getPageInfo.ts
import { Location } from "react-router-dom";

export const getPageInfo = (location: Location) => {
  if (location.pathname.startsWith("/datavis")) {
    return {
      route: "/datavis",
      title: "CAPD Data Visualization Style Guide",
      isDatavisRoute: true,
    };
  }
  if (location.pathname.startsWith("/ggplot")) {
    return { route: "/ggplot", title: "Custom ggplot2 Theme", isGgplotRoute: true };
  }
  if (location.pathname.startsWith("/highcharts")) {
    return { route: "/highcharts", title: "Custom Highcharts Theme", isHcplotRoute: true };
  }
  if (location.pathname.startsWith("/api")) {
    return { route: "/api", title: "API Documentation", isApiRoute: true };
  }

  return { route: "/", title: "eGRID Dev Portal", isHomeRoute: true };
};

// Helper function to determine if the current path matches a given link
export const isCurrentPath = (location: Location, path: string) =>
  location.pathname.startsWith(path);

export const isExactlyPath = (location: Location, path: string) =>
  location.pathname === path;

export const getPageLevelforBreadcrumbs = (location: Location) => {
  if (
    isExactlyPath(location, "/datavis")
  ) {
    return { isRouteWithBanner: true };
  }
  return { isRouteWithBanner: false };
};
