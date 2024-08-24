import { StyleSheet, Text, View } from "react-native";

export default function TaskListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2125",
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: "white",
  },
});
