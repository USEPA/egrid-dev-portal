import React from "react";
import "./Card.scss";

interface CardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  link?: string;
  link2?: string;
  linkText?: string;
  link2Text?: string;
  disabled?: boolean;
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

const Card: React.FC<CardProps> = ({
  title,
  content,
  link,
  link2,
  linkText,
  link2Text,
  disabled = false,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        <div className="card-actions">
          {link && (
            <a
              href={link}
              className={`usa-button ${disabled ? 'usa-button--disabled' : ''}`}
              aria-disabled={disabled}
            >
              {linkText}
            </a>
          )}
          {link2 && (
            <a
              href={link2}
              className={`usa-button ${disabled ? 'usa-button--disabled' : ''}`}
              aria-disabled={disabled}
            >
              {link2Text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
