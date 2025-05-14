import ReactMarkdown from "react-markdown";
const convertToIdTag = (sentence: string) => {
  return sentence
    .toLowerCase()            
    .replace(/\s+/g, '-')     
    .replace(/[^a-z0-9-]/g, '') 
    .replace(/^-+|-+$/g, '');  
};

const renderHeader = (title: string, level: number) => {
  const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;

  function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      (text) => {
        if (text.toLowerCase() === "ggplot2") {
          return "ggplot";
        }
        return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
      }
    );
  }

  // Convert title to ID tag
  const idTag = convertToIdTag(title);

  return (
    <HeaderTag id={idTag}>
      <ReactMarkdown
        components={{
          p: ({ children }) => <>{children}</>,
          em: ({ children }) => <em>{children}</em>,
          strong: ({ children }) => <strong>{children}</strong>,
        }}
      >
        {toTitleCase(title)}
      </ReactMarkdown>
    </HeaderTag>
  );
};

export default renderHeader;
