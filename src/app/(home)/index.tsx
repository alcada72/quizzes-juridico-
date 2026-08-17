import { HeaderHome } from "@/components/home/header";
import { MainCard } from "@/components/home/mainCard";
import { ProgressCard } from "@/components/home/progressCard";
import { Questions } from "@/constants/questionst";
import {
    getProgress,
    getUsername,
    QuizProgress,
} from "@/service/points.service";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const BLOCO_ENTRIES = Object.entries(Questions);

  const [username, setUsername] = useState("");
  const [progress, setprogress] = useState<QuizProgress>();

  useEffect(() => {
    const loadUser = async () => {
      const name = await getUsername();
      const resProgress = await getProgress();
      setprogress(resProgress);
      setUsername(name);
    };

    loadUser();
  }, []);

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      contentContainerClassName="px-5 pt-5 pb-28 bg-slate-50"
    >
      {/* Header */}
      <HeaderHome name={username} onNameChange={setUsername} />

      {/* Main Quiz Card */}
      <MainCard />

      {/* Progress */}
      <ProgressCard
        totalXP={progress?.totalXP || 0}
        quizzesCompleted={progress?.quizzesCompleted || 0}
        bestScore={progress?.bestScore || 0}
        correctAnswers={progress?.correctAnswers || 0}
        totalQuestions={progress?.totalQuestions || 0}
      />

      {/* Categories */}
      <View className="mt-8">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-xl font-bold text-slate-900">Blocos</Text>

          <Text className="font-medium text-blue-600 hidden">Ver todas</Text>
        </View>

        <View className="flex-row flex-wrap justify-between gap-y-4">
          {BLOCO_ENTRIES.map(([key, question], index) => (
            <Pressable
              key={key}
              onPress={() => router.push(`/(home)/quiz/${key as string}`)}
              className="w-[48%] rounded-2xl bg-white p-5 shadow-sm"
            >
              <Text className="text-3xl">Bloco {index + 1}</Text>

              <Text className="mt-4 font-semibold text-slate-900">
                {question.title}
              </Text>

              <Text className="mt-1 text-sm text-slate-400">
                {question.questions.length} Questoes
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
