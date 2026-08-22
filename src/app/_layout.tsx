import colors from "@/constants/colors";
import { getUsername } from "@/service/user.service";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  useEffect(() => {
    const redirect = async () => {
      const name = await getUsername();
      if (name) {
        router.replace("/");
      } else {
        router.replace("/(public)");
      }
    };

    redirect();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.backGround }}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { flex: 1, backgroundColor: colors.backGround },
        }}
      />
      ;
    </SafeAreaView>
  );
}
