import React, { useEffect, useRef } from "react";
import USWDS from "@uswds/uswds/js";
const { inPageNavigation } = USWDS;
import "./SideNav.scss";

const SideNav: React.FC = () => {
  const sideNavRef = useRef<HTMLElement | null>(null);
  const initialized = useRef(false); 

  useEffect(() => {
    if (!initialized.current) {
      const timer = setTimeout(() => {
        if (sideNavRef.current) {
          inPageNavigation.on(sideNavRef.current);
          initialized.current = true; 
        }
      }, 150);

      // Cleanup
      return () => {
        if (sideNavRef.current) {
          inPageNavigation.off();
        }
        clearTimeout(timer);
      };
    }
  }, []); 

  return (
    <aside
      id="sidenav"
      className="usa-in-page-nav"
      data-title-text="On this page"
      data-title-heading-level="h4"
      data-scroll-offset="0"
      data-root-margin="0px 0px 0px 0px"
      data-threshold="1"
      ref={sideNavRef}
    >
    </aside>
  );
};

export default SideNav;
