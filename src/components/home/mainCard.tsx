import colors from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function MainCard() {
  const router = useRouter();

  return (
    <View className="mt-8 overflow-hidden rounded-3xl bg-indigo-600 p-6">
      {/* Badge */}
      <View className="flex-row items-center">
        <View className="mr-2 size-8 items-center justify-center rounded-xl bg-white/15">
          <Feather name="book-open" size={16} color={colors.white} />
        </View>

        <Text className="text-sm font-bold tracking-wide text-indigo-200">
          ESTUDO DO DIA
        </Text>
      </View>

      {/* Title */}
      <Text className="mt-3 text-3xl font-black leading-9 text-white">
        Prepare-se para o próximo desafio!
      </Text>

      {/* Description */}
      <Text className="mt-3 text-base leading-6 text-indigo-100">
        Revise os principais prazos, juros, percentagens e valores do Código
        Geral Tributário antes de testar os seus conhecimentos.
      </Text>

      {/* Actions */}
      <View className="mt-6 flex-row items-center gap-3">
        {/* Quiz */}
        <Pressable
          className="flex-1 flex-row items-center hidden justify-center rounded-2xl bg-white px-4 py-4 active:opacity-80"
          onPress={() => router.push("/(home)/quiz")}
        >
          <Feather name="play" size={18} color={colors.primary} />

          <Text className="ml-2 font-bold text-indigo-600">Começar Quiz</Text>
        </Pressable>

        {/* Resumo */}
        <Pressable
          className="flex-row items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-4 py-4 active:opacity-70"
          onPress={() => router.push("/(home)/resumo")}
        >
          <Feather name="book-open" size={18} color={colors.white} />

          <Text className="ml-2 font-bold text-white">Revisar</Text>
        </Pressable>
      </View>
    </View>
  );
}
