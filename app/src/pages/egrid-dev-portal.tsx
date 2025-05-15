import React from "react";
import useMarkdownContent from "../hooks/useMarkdownContent";
import Banner from "../components/Banner/Banner";
import { extractBanner, extractSections } from "../utilities/extractContent";
import { Section } from "../types/ContentTypes"; 
import Card from "../components/Card/Card";

const EGRIDDevPortal: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/egrid-dev-portal.md`
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
          <div key={idx}>
            {section.sectionTitle && (
              <div>
                <h2 className="section-title">{section.sectionTitle}</h2>
                {section.sectionContent && <p className="section-content">{section.sectionContent}</p>}
              </div>
            )}
            <div className="grid grid-col--two row-gap-3">
              {section.cards.map((card, cardIdx) => (
                <Card
                  key={cardIdx}
                  title={card.title?.includes('<sub>') ? <div dangerouslySetInnerHTML={{ __html: card.title }} /> : card.title || ''}
                  content={card.content ? <div dangerouslySetInnerHTML={{ __html: card.content }} /> : ''}
                  link={card.link || ""}
                  link2={card.link2 || ""}
                  linkText={card.linkText || ""}
                  link2Text={card.link2Text || ""}
                />
              ))}
            </div>
            {section.sectionTitle2 && (
              <div>
                <h2 className="section-title">{section.sectionTitle2}</h2>
                {section.sectionContent2 && <p className="section-content">{section.sectionContent2}</p>}
              </div>
            )}
            <div className="grid grid-col--two row-gap-3">
              {section.cards2.map((card, cardIdx) => (
                <Card
                  key={cardIdx}
                  title={card.title?.includes('<sub>') ? <div dangerouslySetInnerHTML={{ __html: card.title }} /> : card.title || ''}
                  content={card.content ? <div dangerouslySetInnerHTML={{ __html: card.content }} /> : ''}
                  link={card.link || ""}
                  link2={card.link2 || ""}
                  linkText={card.linkText || ""}
                  link2Text={card.link2Text || ""}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EGRIDDevPortal;
