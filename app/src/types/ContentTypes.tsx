export interface Card {
  title?: string;
  content?: string;
  link?: string;
  link2?: string;
  image: string;
  alt?: string; 
  imagemb?: string;
  type: 'do' | 'do not'; 
}

export interface Download {
  title?: string;
  link?: string;
}

export interface CodeSnippet {
  language: "r";
  content: string; 
}

export interface Accordion {
  title?: string;
  content?: string;
  image?: string;
  alt?: string;
  imagemb?: string;
  level?: number;
  cards?: Card[]; 
}

export interface Section {
  sectionTitle?: string;
  sectionContent?: string;
  sectionTitle2?: string,
  sectionContent2?: string;
  cards: Card[]; // Added a default empty array
  content?: string;
  image?: string;
  alt?: string;
  imagemb?: string;
  level?: number;
  downloads?: Download[];
  code?: CodeSnippet[];
}

  