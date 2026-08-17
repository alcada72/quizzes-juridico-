import colors from "@/constants/colors";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(home)");
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View
      style={{ flex: 1 }}
      className="flex items-center justify-center bg-blue-600 gap-3"
    >
      <StatusBar backgroundColor={colors.primary} style="light" />

      <Text className="text-5xl font-bold text-white">Quiz CGT</Text>
      <ActivityIndicator color={"#fff"} size={"large"} />
    </View>
  );
}
