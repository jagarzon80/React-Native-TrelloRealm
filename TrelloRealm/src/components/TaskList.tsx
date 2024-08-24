import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { description: "First task" },
    { description: "Second task" },
    { description: "Third task" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo</Text>
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
