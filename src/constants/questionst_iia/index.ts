import type { Quiz } from "../types";

import quizBloco1 from "./blocos/bloco1";
import quizBloco2 from "./blocos/bloco2";
import quizBloco3 from "./blocos/bloco3";
import quizBloco4 from "./blocos/bloco4";
import quizBloco5 from "./blocos/bloco5";
import quizBloco6 from "./blocos/bloco6";
import quizBloco7 from "./blocos/bloco7";

export const Questions_Iia: Record<string, Quiz> = {
  [quizBloco1.id]: quizBloco1,
  [quizBloco2.id]: quizBloco2,
  [quizBloco3.id]: quizBloco3,
  [quizBloco4.id]: quizBloco4,
  [quizBloco5.id]: quizBloco5,
  [quizBloco6.id]: quizBloco6,
  [quizBloco7.id]: quizBloco7,
};