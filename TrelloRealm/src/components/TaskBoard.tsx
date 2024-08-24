import TaskList from "./TaskList";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TaskBoard() {
  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <TaskList />
    </>
  );
}
