import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  username: "@quiz/username",
} as const;

export const storeUsername = async (name: string) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.username, name.trim());
  } catch (error) {
    console.error("Erro ao salvar nome:", error);
  }
};

export const getUsername = async (): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEYS.username);

    return value;
  } catch (error) {
    console.error("Erro ao obter nome:", error);
    return "";
  }
};

export const clearUserData = async () => {
  try {
    await AsyncStorage.multiRemove([STORAGE_KEYS.username]);
  } catch (error) {
    console.error("Erro ao limpar dados:", error);
  }
};
