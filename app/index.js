import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { account } from "../appwriteConfig";
import { useAuth } from "../providers/AuthProvider";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userAccount = await account.get();
        setUser(userAccount);
      } catch (error) {
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      router.replace("/home");
    }
  }, [user]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  return null;
}
