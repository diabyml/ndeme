import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

export default function Register() {
  const router = useRouter();
  const { register, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    if (!fullName || !email || !password) {
      setLoading(false);
      Alert.alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      await register(fullName, email, password);
    } catch (error) {
      Alert.alert("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      router.replace("/home");
    }
  }, [user]);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View className="flex-1 items-center justify-center px-4 py-8">
          <Text className="text-3xl font-bold mb-8 text-red-500 ">
            Créer un compte
          </Text>
          <View className="w-full space-y-4 mb-6">
            <Input
              autoCapitalize="words"
              autoCorrect={false}
              inputMode="text"
              textContentType="name"
              placeholder="Nom complet"
              value={fullName}
              onChangeText={setFullName}
            />
            <Input
              inputMode="email"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              inputMode="text"
              textContentType="newPassword"
              secureTextEntry
              // passwordRules="required: upper; required: lower; required: digit; required: symbol; minSymbols: 1; minUppercase: 1; minLowercase: 1; minDigits: 1;"
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View className="w-full">
            <Button
              title="S'inscrire"
              disabled={loading}
              loading={loading}
              loadingText="Inscription..."
              onPress={handleSubmit}
            />
          </View>
          {/* link to register */}
          <View className="w-full mt-4">
            <Text className="text-center">
              Deja un compte ?{" "}
              <Link href={"login"} className="text-red-500">
                Connecter
              </Link>
            </Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
