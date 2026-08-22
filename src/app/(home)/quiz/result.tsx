import colors from "@/constants/colors";
import { getUsername } from "@/service/user.service";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function ResultScreen() {
  const { id, score, correct, wrong, total } = useLocalSearchParams<{
    id: string;
    score: string;
    correct: string;
    wrong: string;
    total: string;
  }>();

  const [username, setUsername] = useState("");

  const totalQuestions = Number(total);
  const correctAnswers = Number(correct!);
  const wrongAnswers = totalQuestions - correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;

  useEffect(() => {
    const loadUser = async () => {
      const name = await getUsername();

      if (name) {
        setUsername(name);
      }
    };

    loadUser();
  }, []);

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar backgroundColor={colors.primary} style="light" />

      <View
        className="absolute left-0 top-0 h-[280px] w-full"
        style={{
          backgroundColor: colors.primary,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-10 pt-8"
      >
        <View className="items-center">
          <View className="mb-3 size-14 items-center justify-center rounded-full bg-white/20">
            <Feather name="award" size={30} color={colors.white} />
          </View>

          <Text className="text-3xl font-black text-white">
            Quiz concluído! 🎉
          </Text>

          <Text className="mt-2 text-center text-base text-indigo-200">
            Excelente trabalho! Confira seu resultado.
          </Text>
        </View>

        <View className="mt-10 items-center rounded-[32px] bg-white px-6 py-8 shadow-sm">
          <Text className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Sua pontuação
          </Text>

          <View className="mt-5 size-48 items-center justify-center rounded-full border-[12px] border-indigo-100">
            <View className="absolute size-36 items-center justify-center rounded-full border-4 border-yellow-400">
              <Text className="text-5xl font-black text-indigo-600">
                {percentage}%
              </Text>

              <Text className="mt-1 text-sm font-medium text-slate-400">
                resultado
              </Text>
            </View>
          </View>

          <Text className="mt-6 text-2xl font-black text-slate-900">
            {correctAnswers} de {totalQuestions}
          </Text>

          <Text className="mt-1 text-base text-slate-400">
            respostas corretas
          </Text>
        </View>

        <View className="mt-5 flex-row gap-3">
          {/* Correct */}
          <View className="flex-1 items-center rounded-2xl bg-white p-5">
            <View className="size-11 items-center justify-center rounded-full bg-green-100">
              <Feather name="check" size={22} color="#16a34a" />
            </View>

            <Text className="mt-3 text-2xl font-black text-slate-900">
              {correctAnswers}
            </Text>

            <Text className="mt-1 text-sm font-medium text-slate-400">
              Corretas
            </Text>
          </View>

          <View className="flex-1 items-center rounded-2xl bg-white p-5">
            <View className="size-11 items-center justify-center rounded-full bg-red-100">
              <Feather name="x" size={22} color="#dc2626" />
            </View>

            <Text className="mt-3 text-2xl font-black text-slate-900">
              {wrongAnswers}
            </Text>

            <Text className="mt-1 text-sm font-medium text-slate-400">
              Incorretas
            </Text>
          </View>
        </View>

        <View className="mt-5 flex-row items-center rounded-2xl bg-yellow-400 p-5">
          <View className="size-12 items-center justify-center rounded-full bg-yellow-300">
            <Feather name="zap" size={25} color={colors.black} />
          </View>

          <View className="ml-4 flex-1">
            <Text className="text-sm font-semibold text-yellow-900">
              Experiência conquistada
            </Text>

            <Text className="mt-1 text-2xl font-black text-slate-900">
              +{score} XP
            </Text>
          </View>

          <Feather name="trending-up" size={24} color={colors.black} />
        </View>

        <View className="mt-7 gap-3">
          <Pressable
            onPress={() => router.replace(`/(home)/quiz/${id}`)}
            className="flex-row items-center justify-center rounded-2xl bg-indigo-600 py-4 active:opacity-80"
          >
            <Feather name="refresh-cw" size={20} color={colors.white} />

            <Text className="ml-2 text-lg font-bold text-white">
              Fazer novamente
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.replace(`/(home)`)}
            className="flex-row items-center justify-center rounded-2xl border-2 border-indigo-600 bg-transparent py-4 active:opacity-70"
          >
            <Feather name="home" size={20} color={colors.primary} />

            <Text className="ml-2 text-lg font-bold text-indigo-600">
              Voltar ao início
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
