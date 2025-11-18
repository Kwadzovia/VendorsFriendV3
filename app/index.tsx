// app/index.tsx
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Index() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  // Not logged in → go to onboarding (which then leads to login/register)
  if (!session) {
    return <Redirect href="/onboarding" />;
  }

  // Logged in → go to your main app screen
  return <Redirect href="/home" />; // change to "/(tabs)" or whatever later
}
