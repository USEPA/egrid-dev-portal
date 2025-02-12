
import React from "react";
import useMarkdownContent from "../../hooks/useMarkdownContent";
import Banner from "../../components/Banner/Banner";
import { extractBanner, extractIntro, extractSections } from "../../utilities/extractContent";
import { Section } from "../../types/ContentTypes"; 
import Card from "../../components/Card/Card";

const DataVisualization: React.FC = () => {

  const { content, error } = useMarkdownContent("/content/datavis/datavis.md");

  // Extract content from markdown
  const { title, tagline } = content ? extractBanner(content) : { title: '', tagline: '' };
  const { introTitle, introContent } = content ? extractIntro(content) : { introTitle: '', introContent: '' };
  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="page grey-container">
     <Banner title={title} tagline={tagline} level="level1" />
      <div className="container">
        <div className="intro-section bottom-border-section">
          <h2>{introTitle}</h2>
          <p>{introContent}</p>
        </div>
        {sections.map((section, idx) => (
          <div key={idx} className="grid grid-col--two row-gap-3">
            {section.cards && section.cards.map((card, cardIdx) => (
              <Card
                key={cardIdx}
                title={card.title}
                content={card.content}
                link={card.link}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataVisualization;
