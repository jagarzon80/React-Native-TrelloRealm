import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import RealmCustomProvider from "../src/providers/Realm";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <RealmCustomProvider>
        <Stack screenOptions={{}}></Stack>
      </RealmCustomProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
