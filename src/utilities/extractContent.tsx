import matter from 'gray-matter';
import { Accordion, Section } from '../types/ContentTypes';

export function extractSections(content: string): Section[] {
  const parsedContent = matter(content);
  const sections = parsedContent.data.sections || [];

  return sections.map((section: Section) => ({
    ...section,
    code: [{ language: "r", content: section.code }],
    cards: section.cards || [], 
  }));
}

export function extractAccordions(content: string): Accordion[] {
  const parsedContent = matter(content);
  const accordions = parsedContent.data.accordions || [];

  return accordions.map((accordion: Accordion) => ({
    ...accordion,
    cards: accordion.cards || [], 
  }));
}



export function extractBanner(content: string) {
  try {
    const parsedContent = matter(content);
    return { title: parsedContent.data.title, tagline: parsedContent.data.tagline };
  } catch (error) {
    console.error('Error parsing content with gray-matter:', error);
    return { title: '', tagline: '' };
  }
}

export function extractIntro(content: string) {
  try {
    const parsedContent = matter(content);
    return {
      introTitle: parsedContent.data.introTitle || "", 
      introContent: parsedContent.data.introContent || "", 
      introImage: parsedContent.data.introImage || "", 
      introImgAlt: parsedContent.data.introImgAlt || "", 
    };
  } catch (error) {
    console.error("Error parsing intro content:", error);
    return { introTitle: "", introContent: "", introImage: "", introImgAlt: "" }; 
  }
}


