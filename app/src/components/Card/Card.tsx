import React from "react";
import "./Card.scss";
import { Link, useLocation } from "react-router-dom";

interface CardProps {
  title?: string;
  content?: string;
  link?: string;
}

const getClassNameFromTitle = (title?: string): string => {
  if (!title) return "";

  const allowedTitles = [
    "eGRID Dev Portal",
    "eGRID Production Code",
    "Power Profiler",
    "eGRID Explorer",
    "Consumption-Based Rates",
    "Monthly Data",
    "EPA-EIA Crosswalk",
    "EPA Hourly Fuel Type",
    "PM<sub>2.5</sub>, NH<sub>3</sub>, and VOCs"
  ];

  if (allowedTitles.includes(title)) {
    return title
      .split(" ")
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  }

  return "";
};

const Card: React.FC<CardProps> = ({ title, content, link }) => {
  const { pathname } = useLocation();
  const className = pathname === "/" ? getClassNameFromTitle(title) : "";

  return (
    <div className={`card ${className}`}>
      <h3>{title}</h3>
      {(content != "Coming soon" && title != "Content to Come" )? (
        <>
          {content && <div className="content">{content}</div>}
      {link && (
        <a href={link} className="usa-button blue-button">
          {typeof title === 'string' && title.includes('<sub>') ? (
            <div dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            title
          )}
        </a>
      )}
        </>
      ) : (
        <p><i>{content}</i></p>
      )}
    </div>
  );
};

export default Card;
