import colors from "@/constants/colors";
import { Quiz_Menu } from "@/constants/quiz_menu";
import { completeQuiz } from "@/service/points.service";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AppState,
  AppStateStatus,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";

const QUESTION_TIME = 20;

type AnswerStatus = "idle" | "correct" | "wrong" | "timeout";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const quiz = useMemo(() => {
    for (const menu of Object.values(Quiz_Menu)) {
      const bloco = menu.questions_quis[id];

      if (bloco) {
        return bloco;
      }
    }

    return undefined;
  }, [id]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [openAnswer, setOpenAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(QUESTION_TIME);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>("idle");
  const [isAnswering, setIsAnswering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const appStateRef = useRef<AppStateStatus>(AppState.currentState);

  const questions = quiz?.questions ?? [];
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex]!;
  const currentNumber = currentQuestionIndex + 1;
  const progress = (currentNumber / totalQuestions) * 100;

  const questionPoints = useMemo(() => {
    if (timeRemaining <= 0) return 0;

    const base = 5;
    const timeBonus = timeRemaining * 2;

    return base + timeBonus;
  }, [timeRemaining]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const finishQuiz = useCallback(
    async (finalScore: number, finalCorrect: number, finalWrong: number) => {
      clearTimer();

      try {
        await completeQuiz({
          correctAnswers: finalCorrect,
          totalQuestions,
          xp: finalScore,
        });
      } catch (error) {
        console.error("Erro ao salvar progresso:", error);
      }

      router.replace({
        pathname: "/quiz/result",
        params: {
          id,
          score: String(finalScore),
          correct: String(finalCorrect),
          wrong: String(finalWrong),
          total: String(totalQuestions),
        },
      });
    },
    [clearTimer, id, totalQuestions],
  );

  const goToNextQuestion = useCallback(
    (newScore: number, newCorrect: number, newWrong: number) => {
      clearTimer();

      if (currentQuestionIndex >= totalQuestions - 1) {
        finishQuiz(newScore, newCorrect, newWrong);
        return;
      }

      setCurrentQuestionIndex((previous) => previous + 1);

      setSelectedAnswer(null);
      setOpenAnswer("");
      setAnswerStatus("idle");
      setIsAnswering(false);
      setTimeRemaining(QUESTION_TIME);
    },
    [clearTimer, currentQuestionIndex, totalQuestions, finishQuiz],
  );

  const submitAnswer = useCallback(
    (answer?: string) => {
      if (isAnswering) return;
      if (answerStatus !== "idle") return;

      let userAnswer = answer ?? selectedAnswer;

      if (currentQuestion.type === "open") {
        userAnswer = openAnswer.trim();

        if (!userAnswer) return;
      }

      if (!userAnswer) return;

      setIsAnswering(true);

      let isCorrect = false;

      if (currentQuestion.type === "true_false") {
        const normalizedUser = userAnswer === "true";

        isCorrect = normalizedUser === currentQuestion.answer;
      }

      if (currentQuestion.type === "multiple_choice") {
        isCorrect = userAnswer === currentQuestion.answer;
      }

      if (currentQuestion.type === "open") {
        const normalizedUser = userAnswer.toLowerCase().trim();

        const normalizedCorrect = String(currentQuestion.answer)
          .toLowerCase()
          .trim();

        isCorrect = normalizedUser === normalizedCorrect;
      }

      const newCorrect = correctAnswers + (isCorrect ? 1 : 0);

      const newWrong = wrongAnswers + (isCorrect ? 0 : 1);

      const points = isCorrect ? questionPoints : 0;
      const newScore = score + points;

      if (isCorrect) {
        setAnswerStatus("correct");
        setCorrectAnswers(newCorrect);
        setScore(newScore);

        setTimeout(() => {
          goToNextQuestion(newScore, newCorrect, newWrong);
        }, 1200);

        return;
      }

      setAnswerStatus("wrong");
      setWrongAnswers(newWrong);
      Vibration.vibrate();
      setTimeout(() => {
        goToNextQuestion(newScore, newCorrect, newWrong);
      }, 5000);
    },
    [
      answerStatus,
      correctAnswers,
      currentQuestion,
      goToNextQuestion,
      isAnswering,
      openAnswer,
      questionPoints,
      score,
      selectedAnswer,
      wrongAnswers,
    ],
  );

  const handleTimeout = useCallback(() => {
    if (answerStatus !== "idle") return;
    Vibration.vibrate();
    setAnswerStatus("timeout");
    setIsAnswering(true);

    const newWrong = wrongAnswers + 1;

    setWrongAnswers(newWrong);

    setTimeout(() => {
      goToNextQuestion(score, correctAnswers, newWrong);
    }, 5000);
  }, [answerStatus, correctAnswers, goToNextQuestion, score, wrongAnswers]);

  useEffect(() => {
    if (isPaused) return;

    if (answerStatus !== "idle") return;

    clearTimer();

    timerRef.current = setInterval(() => {
      setTimeRemaining((previous) => {
        if (previous <= 1) {
          clearTimer();

          setTimeout(handleTimeout, 0);

          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return clearTimer;
  }, [answerStatus, clearTimer, handleTimeout, isPaused]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextState) => {
      const wasActive = appStateRef.current === "active";

      const isInactive = nextState === "background" || nextState === "inactive";

      if (wasActive && isInactive) {
        setIsPaused(true);
      }

      if (nextState === "active") {
        setIsPaused(false);
      }

      appStateRef.current = nextState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  /*
   * Se o bloco não existir
   */
  if (!quiz) {
    return (
      <View className="flex-1 items-center justify-center bg-blue-600">
        <Text className="text-3xl font-bold text-white">Bloco inválido</Text>
      </View>
    );
  }

  const selectMultipleChoice = (optionId: string) => {
    if (isAnswering) return;

    setSelectedAnswer(optionId);
  };

  const selectTrueFalse = (value: boolean) => {
    if (isAnswering) return;

    setSelectedAnswer(String(value));
  };

  const getAnswerStyle = (optionId: string) => {
    if (answerStatus === "idle") {
      if (selectedAnswer === optionId) {
        return "border-blue-600 bg-blue-50";
      }

      return "border-slate-200 bg-white";
    }

    if (optionId === String(currentQuestion.answer)) {
      return "border-green-500 bg-green-50";
    }

    if (selectedAnswer === optionId) {
      return "border-red-500 bg-red-50";
    }

    return "border-slate-200 bg-white";
  };

  if (isPaused) {
    return (
      <View className="flex-1 items-center justify-center bg-blue-600">
        <Text className="text-3xl font-bold text-white">Jogo em Pausa</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar backgroundColor={colors.primary} style="light" />

      <View
        className="absolute left-0 top-0 h-[250px] w-full"
        style={{
          backgroundColor: colors.primary,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="px-4 pb-10 pt-5"
      >
        {/* Progress */}
        <View className="z-10 flex-row items-center gap-3">
          <View className="flex-row items-center gap-1.5 rounded-xl bg-slate-800 px-3 py-2">
            <Feather size={17} name="help-circle" color={colors.white} />

            <Text className="text-base font-bold text-white">
              {currentNumber}
            </Text>

            <Text className="text-sm text-slate-300">de</Text>

            <Text className="text-base font-bold text-white">
              {totalQuestions}
            </Text>
          </View>

          <View className="h-3 flex-1 overflow-hidden rounded-full bg-blue-200">
            <View
              className="h-full rounded-full bg-yellow-400"
              style={{
                width: `${progress}%`,
              }}
            />
          </View>

          <View className="flex-row items-center gap-1.5 rounded-xl bg-yellow-400 px-3 py-2">
            <Feather size={17} name="award" color={colors.black} />

            <Text className="text-base font-bold text-slate-800">{score}</Text>
          </View>
        </View>

        {/* Question */}
        <View className="mt-16 rounded-3xl bg-blue-900 px-5 pb-6">
          <View className="-mt-12 self-center rounded-full border-[8px] border-blue-950 bg-slate-800 p-2">
            <View className="size-24 items-center justify-center rounded-full border-4 border-yellow-400">
              <Text className="text-3xl font-black text-white">
                {timeRemaining}
              </Text>

              <Text className="text-xs font-medium text-slate-300">
                segundos
              </Text>
            </View>
          </View>

          <View className="mt-5 items-center">
            <Text className="text-3xl font-black text-white">
              Pergunta {String(currentNumber).padStart(2, "0")}
            </Text>

            <Text className="mt-1 text-center text-base font-medium text-blue-200">
              {quiz.title}
            </Text>

            <View className="my-5 h-px w-full bg-blue-400" />

            <Text className="text-center text-xl font-bold leading-7 text-white">
              {currentQuestion.question}
            </Text>
          </View>
        </View>

        {/* Multiple choice */}
        {currentQuestion.type === "multiple_choice" && (
          <View className="mt-6 gap-3">
            {currentQuestion.options?.map((option) => (
              <Pressable
                key={option.id}
                disabled={isAnswering}
                onPress={() => selectMultipleChoice(option.id)}
                className={`flex-row items-center rounded-2xl border p-4 ${getAnswerStyle(
                  option.id,
                )}`}
              >
                <View className="mr-4 size-10 items-center justify-center rounded-xl bg-blue-100">
                  <Text className="text-lg font-black text-blue-600">
                    {option.label.replace(")", "")}
                  </Text>
                </View>

                <Text className="flex-1 text-base font-semibold leading-6 text-slate-800">
                  {option.text}
                </Text>

                {answerStatus !== "idle" &&
                  option.id === String(currentQuestion.answer) && (
                    <Feather name="check-circle" size={23} color="#16a34a" />
                  )}

                {answerStatus === "wrong" &&
                  selectedAnswer === option.id &&
                  option.id !== String(currentQuestion.answer) && (
                    <Feather name="x-circle" size={23} color="#dc2626" />
                  )}
              </Pressable>
            ))}
          </View>
        )}

        {/* True / False */}
        {currentQuestion.type === "true_false" && (
          <View className="mt-6 gap-3">
            {[
              {
                value: true,
                label: "Verdadeiro",
                icon: "check-circle" as const,
              },
              {
                value: false,
                label: "Falso",
                icon: "x-circle" as const,
              },
            ].map((option) => {
              const optionId = String(option.value);

              return (
                <Pressable
                  key={optionId}
                  disabled={isAnswering}
                  onPress={() => selectTrueFalse(option.value)}
                  className={`flex-row items-center rounded-2xl border p-5 ${
                    selectedAnswer === optionId
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <View className="mr-4 size-11 items-center justify-center rounded-full bg-blue-100">
                    <Feather
                      name={option.icon}
                      size={23}
                      color={colors.primary}
                    />
                  </View>

                  <Text className="flex-1 text-lg font-bold text-slate-800">
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        )}

        {/* Open answer */}
        {currentQuestion.type === "open" && (
          <View className="mt-6">
            <TextInput
              value={openAnswer}
              onChangeText={setOpenAnswer}
              editable={!isAnswering}
              multiline
              textAlignVertical="top"
              placeholder="Escreva sua resposta..."
              placeholderTextColor="#94a3b8"
              className="min-h-[160px] rounded-2xl border border-slate-200 bg-white p-5 text-base font-medium text-slate-800"
            />
          </View>
        )}

        {/* Feedback */}
        {answerStatus !== "idle" && (
          <View
            className={`mt-4 rounded-2xl p-4 ${
              answerStatus === "correct"
                ? "bg-green-100"
                : answerStatus === "timeout"
                  ? "bg-yellow-100"
                  : "bg-red-100"
            }`}
          >
            <View className="flex-row items-center">
              <Feather
                name={
                  answerStatus === "correct"
                    ? "check-circle"
                    : answerStatus === "timeout"
                      ? "clock"
                      : "x-circle"
                }
                size={22}
                color={
                  answerStatus === "correct"
                    ? "#16a34a"
                    : answerStatus === "timeout"
                      ? "#ca8a04"
                      : "#dc2626"
                }
              />

              <Text
                className={`ml-3 flex-1 text-base font-bold ${
                  answerStatus === "correct"
                    ? "text-green-700"
                    : answerStatus === "timeout"
                      ? "text-yellow-700"
                      : "text-red-700"
                }`}
              >
                {answerStatus === "correct" && "Resposta correta! 🎉"}

                {answerStatus === "wrong" && "Resposta incorreta."}

                {answerStatus === "timeout" && "O tempo acabou!"}
              </Text>
            </View>
          </View>
        )}

        {/* Submit */}
        <Pressable
          disabled={
            isAnswering ||
            (currentQuestion.type === "open" && !openAnswer.trim()) ||
            (currentQuestion.type !== "open" && !selectedAnswer)
          }
          onPress={() => submitAnswer()}
          className={`mt-5 flex-row items-center justify-center rounded-2xl py-4 ${
            isAnswering ||
            (currentQuestion.type === "open" && !openAnswer.trim()) ||
            (currentQuestion.type !== "open" && !selectedAnswer)
              ? "bg-slate-300"
              : "bg-blue-600"
          }`}
        >
          <Text className="text-lg font-bold text-white">
            {currentNumber === totalQuestions
              ? "Finalizar questionário"
              : "Responder"}
          </Text>

          <Feather
            name={currentNumber === totalQuestions ? "check" : "arrow-right"}
            size={21}
            color={colors.white}
            style={{
              marginLeft: 8,
            }}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}
