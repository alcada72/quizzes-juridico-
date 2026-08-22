import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  score: "@quiz/score",
  progress: "@quiz/progress",
} as const;

export type QuizProgress = {
  totalXP: number;
  quizzesCompleted: number;
  bestScore: number;
  correctAnswers: number;
  totalQuestions: number;
};

export const DEFAULT_PROGRESS: QuizProgress = {
  totalXP: 0,
  quizzesCompleted: 0,
  bestScore: 0,
  correctAnswers: 0,
  totalQuestions: 0,
};

export const storeDataScore = async (value: number) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.score, String(value));
  } catch (error) {
    console.error("Erro ao salvar score:", error);
  }
};

export const getDataScore = async (): Promise<number> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEYS.score);

    return value !== null ? Number(value) : 0;
  } catch (error) {
    console.error("Erro ao obter score:", error);
    return 0;
  }
};

export const storeProgress = async (progress: QuizProgress): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
  } catch (error) {
    console.error("Erro ao salvar progresso:", error);
  }
};

export const getProgress = async (): Promise<QuizProgress> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEYS.progress);

    if (!value) {
      return DEFAULT_PROGRESS;
    }

    const progress = JSON.parse(value);

    return {
      ...DEFAULT_PROGRESS,
      ...progress,
    };
  } catch (error) {
    console.error("Erro ao obter progresso:", error);

    return DEFAULT_PROGRESS;
  }
};

export const updateProgress = async (
  updates: Partial<QuizProgress>,
): Promise<QuizProgress> => {
  try {
    const currentProgress = await getProgress();

    const newProgress: QuizProgress = {
      ...currentProgress,
      ...updates,
    };

    await storeProgress(newProgress);

    return newProgress;
  } catch (error) {
    console.error("Erro ao atualizar progresso:", error);

    return getProgress();
  }
};

type CompleteQuizParams = {
  correctAnswers: number;
  totalQuestions: number;
  xp: number;
};

export const completeQuiz = async ({
  correctAnswers,
  totalQuestions,
  xp,
}: CompleteQuizParams): Promise<QuizProgress> => {
  try {
    const currentProgress = await getProgress();

    const percentage =
      totalQuestions > 0
        ? Math.round((correctAnswers / totalQuestions) * 100)
        : 0;

    const newProgress: QuizProgress = {
      totalXP: currentProgress.totalXP + xp,

      quizzesCompleted: currentProgress.quizzesCompleted + 1,

      bestScore: Math.max(currentProgress.bestScore, percentage),

      correctAnswers: currentProgress.correctAnswers + correctAnswers,

      totalQuestions: currentProgress.totalQuestions + totalQuestions,
    };

    await storeProgress(newProgress);

    return newProgress;
  } catch (error) {
    console.error("Erro ao finalizar quiz:", error);

    return getProgress();
  }
};

export const clearQuizDataPoints = async () => {
  try {
    await AsyncStorage.multiRemove([STORAGE_KEYS.score, STORAGE_KEYS.progress]);
  } catch (error) {
    console.error("Erro ao limpar dados:", error);
  }
};
