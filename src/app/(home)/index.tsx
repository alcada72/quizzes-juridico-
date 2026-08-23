import { HeaderHome } from "@/components/home/header";
import { ProgressCard } from "@/components/home/progressCard";
import { BlocoCard } from "@/components/ui/clocoCard";
import { Quiz_Menu } from "@/constants/quiz_menu";
import { getProgress, QuizProgress } from "@/service/points.service";
import { getUsername } from "@/service/user.service";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

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
    <>
      <HeaderHome name={username} onNameChange={setUsername} />

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-28 flex-1 bg-slate-100"
      >
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
              <BlocoCard
                key={key}
                id={key}
                title={menu.name}
                subDesc={`${Object.keys(menu.questions_quis).length} blocos`}
                onClick={() =>
                  router.push({
                    pathname: "/quiz",
                    params: {
                      id: key,
                    },
                  })
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
