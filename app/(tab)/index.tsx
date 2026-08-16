import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">Welcome to Nativewind!</Text>
      <View className="flex flex-col gap-5">
        <Link href="/homepage" className="bg-primary text-white p-5 rounded-2xl">
          Go to homePage
        </Link>
        <Link href="/(auth)/signin" className="bg-primary text-white text-center p-5 rounded-2xl">
          Sign in
        </Link>
        <Link href="/(auth)/register" className="bg-primary text-white text-center p-5 rounded-2xl">
          Register
        </Link>

        <Link href="/(tab)/settings" className="bg-primary text-white text-center p-5 rounded-2xl">settings</Link>

        <Link href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }} className="bg-primary text-white text-center p-5 rounded-2xl">subscription details</Link>
      </View>
    </View>
  );
}
