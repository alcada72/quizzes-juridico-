import { storeUsername } from "@/service/user.service";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Page() {
  const [username, setUsername] = useState("");

  const handleChangeName = async () => {
    const cleanName = username.replace(/\s+/g, " ").trim();
    if (!cleanName) return;

    try {
      await storeUsername(cleanName);
      router.replace("/(home)");
    } catch (error) {
      console.error("Erro ao salvar nome:", error);
    }
  };

  const isFormValid = username.trim().length > 0;

  return (
    <View className="flex-1 bg-slate-50 justify-center px-6">
      <View className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 items-center">
        {/* Cabeçalho */}
        <View className="items-center mb-8">
          <Text className="text-3xl font-extrabold text-slate-800 text-center mb-2">
            Olá, bem-vindo ao Quiz CGT! 👋
          </Text>
          <Text className="text-base text-slate-500 text-center leading-6 px-2">
            Vamos acompanhar a sua caminhada no aprendizado das leis e
            regulamentos da legislação angolana.
          </Text>
        </View>

        {/* Formulário */}
        <View className="w-full gap-4">
          <TextInput
            value={username}
            onChangeText={setUsername}
            autoFocus
            selectTextOnFocus
            maxLength={30}
            returnKeyType="done"
            onSubmitEditing={handleChangeName}
            placeholder="Digite seu nome"
            placeholderTextColor="#94a3b8"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-lg font-semibold text-slate-800 text-center focus:border-blue-600"
          />

          <Pressable
            onPress={handleChangeName}
            disabled={!isFormValid}
            accessibilityRole="button"
            accessibilityLabel="Salvar nome e continuar"
            className={`w-full py-4 rounded-2xl flex-row items-center justify-center gap-2 bg-blue-600 active:opacity-80 ${
              !isFormValid ? "opacity-50" : ""
            }`}
          >
            <Text className="text-white text-base font-bold">Começar</Text>
            <FontAwesome name="arrow-right" size={16} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
