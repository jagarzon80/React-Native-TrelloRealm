import { useAuth } from "@realm/react";
import { StyleSheet, Text, View } from "react-native";

const AnonymousLogin = () => {
  const { logInWithAnonymous } = useAuth();

  logInWithAnonymous();

  return null;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AnonymousLogin;
