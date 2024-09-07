import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import RealmCustomProvider from "../src/providers/Realm";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <RealmCustomProvider>
        <Stack
          screenOptions={{
            headerRight: () => (
              <FontAwesome name="user-circle-o" size={24} color="lightgray" />
            ),
          }}
        ></Stack>
      </RealmCustomProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
