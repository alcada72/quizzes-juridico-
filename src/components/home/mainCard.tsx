import colors from "@/constants/colors";
import { Resumos } from "@/constants/resumos";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function MainCard({ resumeId }: Readonly<{ resumeId: string }>) {
  const router = useRouter();

  const haveResume = !!Resumos[resumeId];

  return (
    <View className=" overflow-hidden rounded-3xl bg-blue-600 p-6">
      {/* Badge */}
      <View className="flex-row items-center">
        <View className="mr-2 size-8 items-center justify-center rounded-xl bg-white/15">
          <Feather name="book-open" size={16} color={colors.white} />
        </View>

        <Text className="text-sm font-bold tracking-wide text-indigo-200">
          ESTUDO DO DIA
        </Text>
      </View>

      <Text className="mt-3 text-3xl font-black leading-9 text-white">
        Prepare-se para o próximo desafio!
      </Text>

      <Text className="mt-3 text-base leading-6 text-indigo-100">
        Revise os principais prazos, juros, percentagens e valores do Código
        Antes de testar os seus conhecimentos.
      </Text>

      <View
        style={{ display: haveResume ? "flex" : "none" }}
        className="mt-6 flex-row items-center gap-3"
      >
        <Pressable
          className="flex-1 flex-row items-center hidden justify-center rounded-2xl bg-white px-4 py-4 active:opacity-80"
          onPress={() => router.push("/(home)/quiz")}
        >
          <Feather name="play" size={18} color={colors.primary} />

          <Text className="ml-2 font-bold text-blue-600">Começar Quiz</Text>
        </Pressable>

        <Pressable
          className="flex-row items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-4 py-4 active:opacity-70"
          onPress={() =>
            router.push({
              pathname: "/(home)/resumo",
              params: {
                resumeId,
              },
            })
          }
        >
          <Feather name="book-open" size={18} color={colors.white} />

          <Text className="ml-2 font-bold text-white">Revisar</Text>
        </Pressable>
      </View>
    </View>
  );
}
