import { useObject, useRealm } from "@realm/react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { BSON } from "realm";
import { Task } from "../src/models/Task";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectId(id as string));

  const [updatedDescription, setUpdatedDescription] = useState(
    task?.description
  );

  const realm = useRealm();

  const updateDescription = () => {
    if (!task) {
      return;
    }

    realm.write(() => {
      task.description = updatedDescription ?? "";
    });
  };

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task Details" }} />
      <TextInput
        onChangeText={setUpdatedDescription}
        onEndEditing={updateDescription}
        style={{ color: "white", fontSize: 20 }}
        value={updatedDescription}
      />
    </View>
  );
};

export default TaskDetails;
