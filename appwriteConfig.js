import { Client, Account, Databases } from "react-native-appwrite";

const client = new Client();

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT)
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
