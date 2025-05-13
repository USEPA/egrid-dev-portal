import React, { useState } from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/Banner/Banner";
import {
  extractAccordions,
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section, Card, Accordion } from "../../../types/ContentTypes";
import "./Charts.scss";
import SVGRenderer from "../../../components/SvgRenderer/SvgRenderer";
import ReactMarkdown from "react-markdown";
import renderHeader from "../../../utilities/renderContent";
import ImageCard from "../../../components/imageCard/imageCard";

const Charts: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/datavis/charts/charts.md`
  );
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);

  const { title, tagline } = content
    ? extractBanner(content)
    : { title: "", tagline: "" };
  const { introTitle, introContent } = content
    ? extractIntro(content)
    : { introTitle: "", introContent: "" };
  const sections: Section[] = content ? extractSections(content) : [];
  const accordions: Accordion[] = content ? extractAccordions(content) : [];

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prevOpenAccordions) => {
      if (prevOpenAccordions.includes(index)) {
        return prevOpenAccordions.filter((i) => i !== index);
      } else {
        return [...prevOpenAccordions, index];
      }
    });
  };

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
        {sections.map((section: Section, index: number) => (
          <div key={index} className="section">
            {!section.cards ||
              (section.cards.length === 0 && (
                <>
                  {section.title &&
                    renderHeader(section.title, section.level || 3)}
                  {section.content && (
                    <div>
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  )}
                  {section.image &&
                    (section.image?.endsWith(".svg") ? (
                      <SVGRenderer
                        src={section.image}
                        alt={section.alt ? section.alt : section.title}
                      />
                    ) : (
                      <img
                        src={section.image}
                        alt={section.alt ? section.alt : section.title}
                        className="section-image"
                      />
                    ))}
                </>
              ))}

            {!section.cards ||
              (section.cards.length > 0 && (
                <>
                  {section.title &&
                    renderHeader(section.title, section.level || 3)}
                  {section.content && (
                    <div>
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  )}
                  <div className="cards">
                    {section.cards.map((card: Card, idx: number) => (
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
                </>
              ))}
          </div>
        ))}

        <div className="accordion-container">
          {accordions.map((accordion: Accordion, index: number) => {
            const isOpen = openAccordions.includes(index);
            return (
              <div key={index} className="accordion">
                <h3 className="accordion__heading">
                  <button
                    type="button"
                    className="accordion__button"
                    aria-expanded={isOpen}
                    aria-controls={`a-${index}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {accordion.title}
                  </button>
                </h3>
                <div
                  id={`a-${index}`}
                  className={`accordion__content ${isOpen ? "open" : "closed"}`}
                >
                  <div className="cards">
                    {accordion.cards &&
                      accordion.cards.map((card: Card, idx: number) => (
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Charts;
