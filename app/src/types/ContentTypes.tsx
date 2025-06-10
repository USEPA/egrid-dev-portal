export interface Card {
  title?: string;
  content?: string;
  link?: string;
  link2?: string;
  linkText?: string;
  link2Text?: string;
  image: string;
  alt?: string; 
  imagemb?: string;
  type: 'do' | 'do not'; 
  disabled?: boolean;
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
  cards2?: Card[];
}

export interface Section {
  sectionTitle?: string;
  sectionContent?: string;
  sectionTitle2?: string,
  sectionContent2?: string;
  sectionTitle3?: string,
  sectionContent3?: string;
  cards: Card[];
  cards2: Card[];
  cards3: Card[];
  content?: string;
  image?: string;
  alt?: string;
  imagemb?: string;
  level?: number;
  downloads?: Download[];
  code?: CodeSnippet[];
}