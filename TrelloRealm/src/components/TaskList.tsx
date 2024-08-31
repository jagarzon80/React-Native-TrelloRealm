import { useQuery, useRealm, useUser } from "@realm/react";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Task } from "../models/Task";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const realm = useRealm();
  const tasks = useQuery(Task);

  const user = useUser();

  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    realm.write(() => {
      realm.create(Task, { description: newTask, user_id: user.id });
    });

    setNewTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
      <TextInput
        onChangeText={setNewTask}
        placeholder="New task"
        placeholderTextColor="gray"
        style={styles.input}
        value={newTask}
      />
      <Button title="Add task" onPress={createTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    borderRadius: 5,
    gap: 5,
    padding: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: "white",
    padding: 15,
    backgroundColor: "#1D2125",
    borderRadius: 5,
  },
});
