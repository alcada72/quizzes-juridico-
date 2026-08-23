import colors from "@/constants/colors";
import { clearQuizDataPoints } from "@/service/points.service";
import { Feather } from "@expo/vector-icons";
import { Alert, Pressable, Text, View } from "react-native";
import { useState } from "react";

type ProgressCardProps = {
  totalXP: number;
  quizzesCompleted: number;
  bestScore: number;
  correctAnswers: number;
  totalQuestions: number;
};

export function ProgressCard({
  totalXP,
  quizzesCompleted,
  bestScore,
  correctAnswers,
  totalQuestions,
}: Readonly<ProgressCardProps>) {
  const [progress, setProgress] = useState({
    totalXP,
    quizzesCompleted,
    bestScore,
    correctAnswers,
    totalQuestions,
  });

  const accuracy =
    progress.totalQuestions > 0
      ? Math.round(
          (progress.correctAnswers / progress.totalQuestions) * 100,
        )
      : 0;

  const handleResetProgress = () => {
    Alert.alert(
      "Resetar Seu Progresso",
      "Tem certeza que deseja reiniciar seu progresso?",
      [
        {
          style: "cancel",
          text: "Não",
        },
        {
          text: "Sim",
          onPress: async () => {
            await clearQuizDataPoints();
            setProgress({
              totalXP: 0,
              quizzesCompleted: 0,
              bestScore: 0,
              correctAnswers: 0,
              totalQuestions: 0,
            });
          },
        },
      ],
    );
  };

  return (
    <View className="mt-8 bg-pr">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-xl font-black text-slate-900">Seu progresso</Text>
        <View className="flex-row items-center gap-4">
          <Pressable onPress={handleResetProgress}>
            <Feather name="refresh-ccw" size={20} color={colors.primary} />
          </Pressable>
          <Feather name="trending-up" size={20} color={colors.primary} />
        </View>
      </View>

      <View className="rounded-3xl bg-blue-600  p-5">
        <View className="flex-row justify-between">
          {/* XP */}
          <View className="flex-1">
            <Text className="text-sm font-medium text-slate-200">XP total</Text>

            <Text className="mt-1 text-2xl font-black text-gray-100">
              {progress.totalXP || 0}
            </Text>
          </View>

          {/* Quizzes */}
          <View className="flex-1">
            <Text className="text-sm font-medium text-slate-200">Quizzes</Text>

            <Text className="mt-1 text-2xl font-black text-gray-100">
              {progress.quizzesCompleted || 0}
            </Text>
          </View>

          {/* Melhor */}
          <View className="flex-1">
            <Text className="text-sm font-medium text-slate-200">Melhor</Text>

            <Text className="mt-1 text-2xl font-black text-gray-100">
              {progress.bestScore || 0}%
            </Text>
          </View>
        </View>

        {/* Accuracy */}
        <View className="mt-5 border-t border-slate-100/70 pt-5">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-sm font-semibold text-slate-200">
              Aproveitamento geral
            </Text>

            <Text className="text-sm font-black text-gray-100">
              {accuracy}%
            </Text>
          </View>

          <View className="h-2 overflow-hidden rounded-full bg-slate-100">
            <View
              className="h-full rounded-full bg-green-600"
              style={{
                width: `${accuracy}%`,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
