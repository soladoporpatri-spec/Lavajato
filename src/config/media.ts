export const media = {
  hero: "/images/hero-1536.webp",
  heroMobile: "/images/hero-640.webp",
  heroMedium: "/images/hero-960.webp",
  suv: "/images/suv.webp",
  referenceA: "/images/reference-a.webp",
  referenceB: "/images/reference-b.webp",
};

export type RealComparison = {
  before: string;
  after: string;
  description: string;
};

// Usar somente imagens autorizadas do mesmo veículo, sem filtros de resultado.
export const realComparison: RealComparison | null = null;

export type CustomerReview = { name: string; text: string; sourceUrl: string };
export type RealWork = { src: string; alt: string; service: string };

// Adicionar apenas conteúdo real autorizado. Listas vazias não geram seção pública.
export const customerReviews: CustomerReview[] = [];
export const realWorks: RealWork[] = [];
