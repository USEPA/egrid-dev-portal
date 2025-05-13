import React from 'react';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import Banner from '../../../components/Banner/Banner';
import InfoBlock from '../../../components/InfloBlock/InfoBlock';
import { extractBanner, extractIntro, extractSections } from '../../../utilities/extractContent';
import { Section } from '../../../types/ContentTypes'; // Make sure the Section type is defined in types/ContentTypes
import './principles.scss';
import ReactMarkdown from 'react-markdown';

const Principles: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(`${base}content/datavis/principles/principles.md`);

  // Extract content from markdown
  const { title, tagline } = content ? extractBanner(content) : { title: '', tagline: '' };
  const { introTitle, introContent } = content ? extractIntro(content) : { introTitle: '', introContent: '' };
  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="page">
      <Banner title={title} tagline={tagline} level="level2" />
      <div className="container">
        <div className="intro-section">
          <h2>{introTitle}</h2>
          <ReactMarkdown>{introContent}</ReactMarkdown>
        </div>
        {sections.map((section) => (
            <div className="grid grid-col--two">
             {section.cards && section.cards.map((card, idx) => (
                <InfoBlock
                  key={idx}
                  title={card.title}
                  content={card.content}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
