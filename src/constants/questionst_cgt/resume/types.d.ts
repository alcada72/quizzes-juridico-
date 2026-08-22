
export type SummaryItem = {
  id: string;
  label: string;
  value: string;
  article?: string;
  category: any;
  description?: string;
};

export type QuizSummary = {
  id: string;
  title: string;
  subtitle: string;
  items: SummaryItem[];
};
