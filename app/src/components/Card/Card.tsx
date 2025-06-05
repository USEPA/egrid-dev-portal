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

const Card: React.FC<CardProps> = ({
  title,
  content,
  link,
  link2,
  linkText,
  link2Text,
  disabled,
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
