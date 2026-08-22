import { resumoCGT } from "./questionst_cgt/resume";
import { QuizSummary } from "./questionst_cgt/resume/types";
import { resumoII } from "./questionst_iia/resume";

export const Resumos: Record<string, QuizSummary> = {
  "resumo-cgt": resumoCGT,
  "resumo-ii": resumoII,
};