import { StatusBar } from "expo-status-bar";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../providers/AuthProvider";
import Button from "../components/Button";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user, logout } = useAuth();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Text>Home</Text>

        <View className="bg-blue-400 p-4 rounded-lg shadow-2xl mt-6 mb-4">
          <Text className="text-blue-100">{user?.email}</Text>
          <Text className="text-blue-100">{user?.name}</Text>
        </View>

        <Button
          title="Se deconnecter"
          buttonClassnames="bg-red-500"
          disabled={loading}
          loading={loading}
          loadingText="Deconnexion..."
          onPress={async () => {
            try {
              setLoading(true);
              await logout();
              setLoading(false);
              router.replace("/login");
            } catch (error) {
              Alert.alert("Se deconnecter", "Une erreur est survenue", [
                {
                  text: "Annuler",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
            }
          }}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
