import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import "./DoDontCard.scss";
import SVGRenderer from './../SvgRenderer/SvgRenderer';
import ReactMarkdown from 'react-markdown';

interface DoDontCardProps {
  type: 'do' | 'do not' | 'default';
  title?: string;
  content?: string;
  image?: string;
  alt?: string;
}

const DoDontCard: React.FC<DoDontCardProps> = ({ type, title, content, image, alt }) => {
  return (
    <div className={`do-dont-card ${type === 'do' ? 'card-do' : type === 'do not' ? 'card-do-not' : ''}`}>
    <div className="card-icon">
      {type === 'do' ? (
        <CheckCircleIcon sx={{ color: '#0050d8', fontSize: '1.5rem' }} />
      ) : type === 'do not' ? (
        <CancelIcon sx={{ color: '#E41D3D', fontSize: '1.5rem' }} />
      ) : ''}
    </div>

    <div className="card-image-container">
      {image && image.endsWith('.svg') ? (
        <SVGRenderer src={image} alt={alt ? alt : title} />
      ) : (
        <img src={image} alt={alt ? alt : title} className="card-image" />
      )}
    </div>

    <div className="card-content">
      {title && <h4>{title}</h4>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  </div>
  );
};

export default DoDontCard;
