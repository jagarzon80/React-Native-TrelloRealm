import { AppProvider, RealmProvider, UserProvider } from "@realm/react";
import { PropsWithChildren } from "react";
import Login from "../components/Login";
import { Task } from "../models/Task";

const appId = "application-0-frkvzaa";

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={Login}>
        <RealmProvider schema={[Task]}>{children}</RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
