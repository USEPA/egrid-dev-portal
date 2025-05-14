import React, { useState, useEffect } from "react";

const SVGRenderer: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const loadSVG = async () => {
      try {
        const response = await fetch(src);
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadSVG();
  }, [src]);

  if (!svgContent) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="svg-container"
      role="img"
      aria-label={alt}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SVGRenderer;
