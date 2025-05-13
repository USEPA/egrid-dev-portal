import React from "react";
import rehypeRaw from "rehype-raw";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import {
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section } from "../../../types/ContentTypes";
import ReactMarkdown from "react-markdown";
import renderHeader from "../../../utilities/renderContent";
import SVGRenderer from "../../../components/SvgRenderer/SvgRenderer";
import DoDontCard from "../../../components/DoDontCard/DoDontCard";
import SideNav from "../../../components/SideNav/SideNav";

const Typography: React.FC = () => {

  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/datavis/design-elements/typography.md`
  );
  const { title } = content ? extractBanner(content) : { title: "" };
  const { introTitle, introContent } = content
    ? extractIntro(content)
    : { introTitle: "", introContent: "" };

  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="page">
      <div className="usa-in-page-nav-container container-with-sidenav">
        <main id="main-content" className="main-content">
          <div>
            <h1>{title}</h1>
            <h2>{introTitle}</h2>
            {introContent && <ReactMarkdown>{introContent}</ReactMarkdown>}
          </div>

          {sections.map((section) => (
            <>
              {section.title && renderHeader(section.title, section.level || 3)}
              {section.content && (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {section.content}
                </ReactMarkdown>
              )}
              {section.image &&
                (section.image?.endsWith(".svg") ? (
                  <SVGRenderer src={section.image} alt={section.alt ? section.alt : section.title} />
                ) : (
                  <img
                    src={section.image}
                    alt={section.alt ? section.alt : section.title}
                    className="section-image"
                  />
                ))}

              {section.cards && section.cards.length > 0 && (
                <div className="cards-container">
                  {section.cards.map((card, cardIdx) => (
                    <DoDontCard
                      key={cardIdx}
                      type={card.type}
                      title={card.title}
                      content={card.content}
                      image={card.image}
                      alt={card.alt}
                    />
                  ))}
                </div>
              )}
            </>
          ))}
        </main>

        {content && <SideNav />}
      </div>
    </div>
  );
};

export default Typography;
