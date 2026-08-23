import { MainCard } from "@/components/home/mainCard";
import { BlocoCard } from "@/components/ui/clocoCard";
import { Quiz_Menu, QuizMenuKey } from "@/constants/quiz_menu";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: QuizMenuKey }>();

  const questionary = Quiz_Menu[id];

  if (!questionary) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <Text className="text-lg font-semibold text-slate-900">
          Tema não encontrado
        </Text>
      </View>
    );
  }

  const BLOCO_ENTRIES = Object.entries(questionary.questions_quis);

  return (
    <View className="flex-1 bg-slate-50">
      <View className="bg-blue-600 p-5">
        <Text numberOfLines={2} className="text-2xl font-bold text-white">
          {questionary.name}
        </Text>

        <Text className="mt-1 text-blue-100">
          {BLOCO_ENTRIES.length} blocos de estudo
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pt-8 pb-28"
        overScrollMode="never"
      >
        <MainCard resumeId={id} />
        <View className="my-4">
          <Text className="text-xl font-bold text-slate-900">Blocos</Text>

          <Text className="mt-1 text-sm text-slate-500">
            Escolhe um bloco para começar o estudo.
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between gap-y-4">
          {BLOCO_ENTRIES.map(([key, quiz], index) => (
            <BlocoCard
              key={key}
              id={key}
              title={String(index + 1).padStart(2, "0")}
              desc={quiz.title}
              subDesc={`${quiz.questions.length} questões`}
              onClick={() => router.push(`/(home)/quiz/${key}`)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
