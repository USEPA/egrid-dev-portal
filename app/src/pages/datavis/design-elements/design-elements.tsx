import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/Banner/Banner";
import {
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section } from "../../../types/ContentTypes";
import ImageCard from "../../../components/imageCard/imageCard";

const DesignElements: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/datavis/design-elements/design-elements.md`
  );

  // Extract content from markdown
  const { title, tagline } = content
    ? extractBanner(content)
    : { title: "", tagline: "" };
  const { introTitle, introContent } = content
    ? extractIntro(content)
    : { introTitle: "", introContent: "" };
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
        {sections.map((section, idx) => (
          <div key={idx} className="section">
            {section.cards &&
              section.cards.map((card) => (
                <ImageCard
                  idx={idx}
                  alt={card.alt}
                  image={card.image}
                  title={card.title}
                  imagemb={card.imagemb}
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

export default DesignElements;
