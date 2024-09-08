import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RealmCustomProvider from "../src/providers/Realm";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <RealmCustomProvider>
        <Stack
          screenOptions={{
            headerRight: () => (
              <View style={styles.menu}>
                <Link href="/login">
                  <FontAwesome name="sign-in" size={24} color="lightgray" />
                </Link>
                <Link href="/profile">
                  <FontAwesome
                    name="user-circle-o"
                    size={24}
                    color="lightgray"
                  />
                </Link>
              </View>
            ),
          }}
        ></Stack>
      </RealmCustomProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    gap: 10,
  },
});
