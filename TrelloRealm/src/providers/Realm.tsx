import { AppProvider, RealmProvider, UserProvider } from "@realm/react";
import { PropsWithChildren } from "react";
import AnonymousLogin from "../components/AnonymousLogin";
import { Task } from "../models/Task";

const appId = "application-0-frkvzaa";

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={AnonymousLogin}>
        <RealmProvider
          schema={[Task]}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects(Task));
              },
            },
          }}
        >
          {children}
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
