import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskBoard from "../src/components/TaskBoard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Project Board" }} />
      <TaskBoard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
