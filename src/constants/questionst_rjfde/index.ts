import type { Quiz } from "../types";

import quizBloco1 from "./blocos/quizBloco1";
import quizBloco2 from "./blocos/quizBloco2";
import quizBloco3 from "./blocos/quizBloco3";
import quizBloco4 from "./blocos/quizBloco4";
import quizBloco5 from "./blocos/quizBloco5";
import quizBloco6 from "./blocos/quizBloco6";

export const Questions_Rjfde: Record<string, Quiz> = {
  [quizBloco1.id]: quizBloco1,
  [quizBloco2.id]: quizBloco2,
  [quizBloco3.id]: quizBloco3,
  [quizBloco4.id]: quizBloco4,
  [quizBloco5.id]: quizBloco5,
  [quizBloco6.id]: quizBloco6,
};