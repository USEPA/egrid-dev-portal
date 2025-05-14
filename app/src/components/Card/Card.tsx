import React from "react";
import "./Card.scss";
import { Link, useLocation } from "react-router-dom";

interface CardProps {
  title: React.ReactNode; // Update the type to React.ReactNode
  content: React.ReactNode;
  link?: string;
  link2?: string;
}

function getClassNameFromTitle(title: React.ReactNode): string {
  if (typeof title === 'string') {
    return title.toLowerCase().replace(/\s/g, '-');
  } else if (React.isValidElement(title)) {
    // Handle the case where title is a React element
    return 'custom-title';
  } else {
    return '';
  }
}

const Card: React.FC<CardProps> = ({ title, content, link }) => {
  const { pathname } = useLocation();
  const className = pathname === "/" ? getClassNameFromTitle(title) : "";

  return (
    <div className={`card ${className}`}>
      <h3>{title}</h3>
      {(content != "Coming soon" && title != "Content to Come" )? (
        <>
          {content && <p className="content">{content}</p>}
          {link && (
            <Link to={link} className="usa-button blue-button">
              {title === "Principles"
                ? "Read the Principles"
                : title === "Design Elements"
                ? "Learn About Design Elements"
                : title === "Charts"
                ? "Choose a Chart"
                : title === "Resourcess"
                ? "Find Resourcess"
                : `Go to ${title}`}
            </Link>
          )}
        </>
      ) : (
        <p><i>{content}</i></p>
      )}
    </div>
  );
};

export default Card;
