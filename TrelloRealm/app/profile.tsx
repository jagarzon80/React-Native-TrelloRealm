import { useAuth, useUser } from "@realm/react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const user = useUser();
  const { logOut } = useAuth();

  return (
    <View>
      <Text style={styles.text}>{user.id}</Text>
      <Button onPress={() => logOut()} title="Sign out" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
