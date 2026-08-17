import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

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
}: ProgressCardProps) {
  const accuracy =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  return (
    <View className="mt-8">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-xl font-black text-slate-900">Seu progresso</Text>

        <Feather name="trending-up" size={20} color="#4f46e5" />
      </View>

      <View className="rounded-3xl bg-white p-5">
        <View className="flex-row justify-between">
          {/* XP */}
          <View className="flex-1">
            <Text className="text-sm font-medium text-slate-400">XP total</Text>

            <Text className="mt-1 text-2xl font-black text-slate-900">
              {totalXP || 0}
            </Text>
          </View>

          {/* Quizzes */}
          <View className="flex-1">
            <Text className="text-sm font-medium text-slate-400">Quizzes</Text>

            <Text className="mt-1 text-2xl font-black text-slate-900">
              {quizzesCompleted || 0}
            </Text>
          </View>

          {/* Melhor */}
          <View className="flex-1">
            <Text className="text-sm font-medium text-slate-400">Melhor</Text>

            <Text className="mt-1 text-2xl font-black text-indigo-600">
              {bestScore || 0}%
            </Text>
          </View>
        </View>

        {/* Accuracy */}
        <View className="mt-5 border-t border-slate-100 pt-5">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-sm font-semibold text-slate-600">
              Aproveitamento geral
            </Text>

            <Text className="text-sm font-black text-indigo-600">
              {accuracy}%
            </Text>
          </View>

          <View className="h-2 overflow-hidden rounded-full bg-slate-100">
            <View
              className="h-full rounded-full bg-indigo-600"
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
