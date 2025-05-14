export interface Card {
  title?: string;
  content?: string;
  link?: string;
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
  title?: string;
  content?: string;
  image?: string;
  alt?: string;
  imagemb?: string;
  level?: number;
  cards?: Card[]; 
  downloads?: Download[];
  code?: CodeSnippet[];
}

  