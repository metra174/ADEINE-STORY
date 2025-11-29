export interface Product {
  id: number;
  name: string;
  category: 'Saltos' | 'Sandálias' | 'Socas';
  price: string;
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
