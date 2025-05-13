
import React from "react";
import useMarkdownContent from "../hooks/useMarkdownContent";
import Banner from "../components/Banner/Banner";
import { extractBanner, extractSections } from "../utilities/extractContent";
import { Section } from "../types/ContentTypes"; 
import Card from "../components/Card/Card";

const PowerSectorDevPortal: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/power-sector-dev-portal.md`
  );

  // Extract content from markdown
  const { title, tagline } = content ? extractBanner(content) : { title: '', tagline: '' };
  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="page grey-container">
     <Banner title={title} tagline={tagline} level="level1" />
      <div className="container">
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

export default PowerSectorDevPortal;
