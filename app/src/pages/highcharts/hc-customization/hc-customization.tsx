import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import {
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section } from "../../../types/ContentTypes";
import ReactMarkdown from "react-markdown";
import renderHeader from "../../../utilities/renderContent";
import DoDontCard from "../../../components/DoDontCard/DoDontCard";
import SideNav from "../../../components/SideNav/SideNav";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const HighchartsCustomization: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/highcharts/hc-customization/hc-customization.md`
  );
  const { title } = content ? extractBanner(content) : { title: "" };
  const { introTitle, introContent, introImage, introImgAlt } = content
    ? extractIntro(content)
    : { introTitle: "", introContent: "", introImage: "", introImgAlt: "" };

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
            {(introTitle || introContent) && (
              <div>
                {introTitle && <h2>{introTitle}</h2>}
                {introContent && <ReactMarkdown>{introContent}</ReactMarkdown>}
                {introImage &&
                    <img
                      src={introImage}
                      alt={introImgAlt}
                      className="section-image"
                    />
                }
              </div>
            )}
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              {section.title && renderHeader(section.title, section.level || 3)}
              {section.content && (
                <div>
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </div>
              )}
              {Array.isArray(section.code) &&
                section.code.length > 0 &&
                section.code.some((snippet) => snippet.content?.trim()) && (
                  <div className="code-container">
                    {section.code
                      .filter((snippet) => snippet.content?.trim())
                      .map((snippet, codeIdx) => (
                        <SyntaxHighlighter
                          key={codeIdx}
                          language={snippet.language || "r"}
                          style={oneLight}
                        >
                          {snippet.content}
                        </SyntaxHighlighter>
                      ))}
                  </div>
                )}
              {section.image && (
                <img
                  src={section.image}
                  alt={section.alt ? section.alt : section.title}
                />
              )}

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
            </div>
          ))}
        </main>
        {content && <SideNav />}
      </div>
    </div>
  );
};

export default HighchartsCustomization;