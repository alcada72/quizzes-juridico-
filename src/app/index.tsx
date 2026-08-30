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
      style={{ flex: 1, backgroundColor: colors.primary }}
      className="flex items-center justify-center gap-3"
    >
      <StatusBar style="light" />

      <Text className="text-4xl font-bold text-white">Legislação Fiscal</Text>
      <ActivityIndicator color={"#fff"} size={"large"} />
    </View>
  );
}
