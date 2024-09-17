import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "expo-router";

export default function Login() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-3xl font-bold mb-8 ">Se connecter</Text>
        <View className="w-full space-y-4 mb-6">
          <Input placeholder="Email" />
          <Input placeholder="Mot de passe" />
        </View>
        <View className="w-full">
          <Button title="Se connecter" />
        </View>
        {/* link to register */}
        <View className="w-full mt-4">
          <Text className="text-center">
            Pas encore de compte ?{" "}
            <Link href={"register"} className="text-blue-500">
              Créer
            </Link>
          </Text>
        </View>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}
