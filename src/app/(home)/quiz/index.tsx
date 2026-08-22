import { MainCard } from "@/components/home/mainCard";
import { Quiz_Menu, QuizMenuKey } from "@/constants/quiz_menu";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

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
      {/* Header */}
      <View className="bg-blue-600 p-5">
        <Text numberOfLines={2} className="text-2xl font-bold text-white">
          {questionary.name}
        </Text>

        <Text className="mt-1 text-blue-100">
          {BLOCO_ENTRIES.length} blocos de estudo
        </Text>
      </View>

      {/* Blocos */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pt-8 pb-28"
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
            <Pressable
              key={key}
              onPress={() => router.push(`/(home)/quiz/${key}`)}
              className="w-[48%] rounded-2xl bg-white p-5 shadow-sm"
            >
              <Text className="text-3xl font-bold text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </Text>

              <Text className="mt-4 font-bold text-slate-900">
                {quiz.title}
              </Text>

              <Text className="mt-2 text-sm text-slate-400">
                {quiz.questions.length} questões
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
