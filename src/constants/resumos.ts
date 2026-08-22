import { resumoCGT } from "./questionst_cgt/resume";
import { QuizSummary } from "./questionst_cgt/resume/types";
import { resumoII } from "./questionst_iia/resume";

export const Resumos: Record<string, QuizSummary> = {
  "Questions_cgt": resumoCGT,
  "Questions_Iia": resumoII,
} as const;