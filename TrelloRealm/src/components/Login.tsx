import { useAuth } from "@realm/react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  const { logInWithAnonymous } = useAuth();

  const guestLogin = () => {
    logInWithAnonymous();
  };

  return (
    <View style={styles.content}>
      <Text onPress={guestLogin}>Continue as a guest</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
