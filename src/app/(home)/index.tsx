import { HeaderHome } from "@/components/home/header";
import { MainCard } from "@/components/home/mainCard";
import { ProgressCard } from "@/components/home/progressCard";
import { Quiz_Menu } from "@/constants/quiz_menu";
import { getProgress, QuizProgress } from "@/service/points.service";
import { getUsername } from "@/service/user.service";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const MENU_ENTRIES = Object.entries(Quiz_Menu);

  const [username, setUsername] = useState("");
  const [progress, setprogress] = useState<QuizProgress>();

  useEffect(() => {
    const loadUser = async () => {
      const name = await getUsername();
      const resProgress = await getProgress();
      setprogress(resProgress);
      if (name) {
        setUsername(name);
      }
    };

    loadUser();
  }, []);

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      contentContainerClassName="px-5 pt-5 pb-28 bg-slate-50"
    >
      <HeaderHome name={username} onNameChange={setUsername} />

      <MainCard />

      <ProgressCard
        totalXP={progress?.totalXP || 0}
        quizzesCompleted={progress?.quizzesCompleted || 0}
        bestScore={progress?.bestScore || 0}
        correctAnswers={progress?.correctAnswers || 0}
        totalQuestions={progress?.totalQuestions || 0}
      />

      <View className="mt-8">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-xl font-bold text-slate-900">Temas</Text>

          <Text className="font-medium text-blue-600 hidden">Ver todas</Text>
        </View>

        <View className="flex-row flex-wrap justify-between gap-y-4">
          {MENU_ENTRIES.map(([key, menu]) => (
            <Pressable
              key={key}
              onPress={() =>
                router.push({
                  pathname: "/quiz",
                  params: {
                    id: key,
                  },
                })
              }
              className="w-[48%] rounded-2xl bg-white p-5 shadow-sm"
            >
              <Text className="text-xl font-bold text-slate-900">
                {menu.name}
              </Text>

              <Text className="mt-2 text-sm text-slate-500">
                {Object.keys(menu.questions_quis).length} blocos
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
