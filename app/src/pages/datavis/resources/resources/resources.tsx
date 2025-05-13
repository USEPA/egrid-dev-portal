import React from 'react';
import useMarkdownContent from '../../../../hooks/useMarkdownContent';
import Banner from '../../../../components/Banner/Banner';
import InfoBlock from '../../../../components/InfloBlock/InfoBlock';
import { extractBanner, extractIntro, extractSections } from '../../../../utilities/extractContent';
import { Section } from '../../../../types/ContentTypes';
import './resources.scss';

const FurtherReading: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(`${base}content/datavis/resources/resources.md`);

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
          <p>{introContent}</p>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="section">
            <div className="grid grid-col--one">
            {section.cards && section.cards.map((card, idx) => (
                <InfoBlock
                  key={idx}
                  title={card.title}
                  content={card.content}
                  link={card.link}
                  type="visit"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurtherReading;
