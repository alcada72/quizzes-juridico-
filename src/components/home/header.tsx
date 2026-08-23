import colors from "@/constants/colors";
import { storeUsername } from "@/service/user.service";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type HeaderHomeProps = {
  name?: string;
  onNameChange?: (name: string) => void;
};

const DEBOUNCE_TIME = 600;

export function HeaderHome({ name = "", onNameChange }: HeaderHomeProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(name);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setUsername(name);
  }, [name]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const handleChangeName = (value: string) => {
    const newName = value.replace(/\s+/g, " ");

    setUsername(newName);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      const cleanName = newName.trim();

      if (!cleanName) return;

      try {
        await storeUsername(cleanName);

        onNameChange?.(cleanName);
      } catch (error) {
        console.error("Erro ao salvar nome:", error);
      }
    }, DEBOUNCE_TIME);
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleFinishEditing = async () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }

    const cleanName = username.trim();

    if (cleanName) {
      await storeUsername(cleanName);
      onNameChange?.(cleanName);
    }

    setIsEditing(false);
  };

  const displayName = username.trim();

  return (
    <View className="flex-row items-center justify-between px-5 bg-blue-600 py-3">
      {/* Greeting */}
      <View className="flex-1 pr-4">
        <Text className="text-sm font-medium text-slate-300">
          Bem-vindo de volta
        </Text>

        {isEditing ? (
          <View className="mt-1 flex-row items-center">
            <TextInput
              value={username}
              onChangeText={handleChangeName}
              onBlur={handleFinishEditing}
              autoFocus
              selectTextOnFocus
              maxLength={30}
              returnKeyType="done"
              onSubmitEditing={handleFinishEditing}
              placeholder="Digite seu nome"
              placeholderTextColor="#94a3b8"
              className="flex-1 border-b-2 border-indigo-600 py-1 text-2xl font-black text-slate-900"
            />

            <Pressable
              onPress={handleFinishEditing}
              accessibilityRole="button"
              accessibilityLabel="Salvar nome"
              className="ml-2 size-9 items-center justify-center rounded-full bg-indigo-100 active:opacity-70"
            >
              <FontAwesome name="check" size={16} color={colors.primary} />
            </Pressable>
          </View>
        ) : (
          <Pressable
            onPress={handleStartEditing}
            accessibilityRole="button"
            accessibilityLabel="Alterar nome"
            className="mt-1 self-start active:opacity-60"
          >
            <View className="flex-row items-center">
              <Text
                numberOfLines={1}
                className="max-w-[240px] text-2xl font-black text-slate-100"
              >
                Olá, {displayName} 👋
              </Text>

              <FontAwesome
                name="pencil"
                size={14}
                color={colors.white}
                style={{ marginLeft: 8 }}
              />
            </View>
          </Pressable>
        )}
      </View>

      <Pressable
        onPress={() => router.push("/(public)/about")}
        accessibilityRole="button"
        accessibilityLabel="Abrir perfil"
        className=" items-center justify-center   active:opacity-70"
      >
        <FontAwesome name="info-circle" size={25} color={colors.white} />
      </Pressable>
    </View>
  );
}
