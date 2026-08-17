export type SummaryCategory =
  "prazos" | "juros" | "percentagens" | "valores" | "procedimentos";

export type SummaryItem = {
  id: string;
  label: string;
  value: string;
  article?: string;
  category: SummaryCategory;
  description?: string;
};

export type QuizSummary = {
  id: string;
  title: string;
  subtitle: string;
  items: SummaryItem[];
};
