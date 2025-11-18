// app/home.tsx
import { Text, TouchableOpacity, View } from "react-native";
import { supabase } from "../../lib/supabase";

export default function HomeScreen() {
  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "700" }}>VendorOS Home</Text>
      <Text>You are logged in 🎉</Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          marginTop: 16,
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 999,
          borderWidth: 1,
        }}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
