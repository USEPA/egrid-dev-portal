// src/components/datavis/InfloBlock/ImageCard.tsx
import React from "react";
import "./ImageCard.scss";
import { Link } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";

interface ImageCardProps {
  title?: string;
  content?: string;
  link?: string;
  alt?: string;
  imagemb?: string;
  image?: string;
  idx?: number | null | undefined;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  content,
  link,
  alt,
  image,
  imagemb,
  idx,
}) => {
  const isMobileView = useIsMobile();

  return (
    <div key={idx} className="image-card">
      {isMobileView ? (
        <img src={imagemb} alt={alt} />
      ) : (
        <img src={image} alt={alt} />
      )}
      <div className="card-content">
        <h4>{title}</h4>
        <p>{content}</p>
        {link && (
          <Link className="usa-button blue-button" to={link}>
            Learn about {title}
          </Link>
        )}
        {!link && (
          <p className="not-included-text">
            <b>
              <i>(not included in this guide)</i>
            </b>
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
