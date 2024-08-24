import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, View } from "react-native";

export default function TaskListItem({ task }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>
      <AntDesign name="close" size={16} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2125",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
