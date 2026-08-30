import { resumoCGT } from "./questionst_cgt/resume";
import { QuizSummary } from "./questionst_cgt/resume/types";
import { resumoII } from "./questionst_iia/resume";
import { resumoIRT } from "./questionst_ip/resume";
import { resumoIVM } from "./questionst_ivm/resume";
import { resumoRJFDE } from "./questionst_rjfde/resume";

export const Resumos: Record<string, QuizSummary> = {
  "Questions_cgt": resumoCGT,
  "Questions_Iia": resumoII,
  "Questions_Irt": resumoIRT,
  "Questions_Ivm": resumoIVM,
  "Questions_Rjfde": resumoRJFDE,
} as const;