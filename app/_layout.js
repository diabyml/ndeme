import { Stack } from "expo-router";
import { AuthProvider } from "../providers/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
