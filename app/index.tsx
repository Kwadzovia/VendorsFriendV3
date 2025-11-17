import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome!</Text>
        <Pressable
          onPress={() => router.push("/onboarding")}
          style={{ padding: 20, backgroundColor: 'purple', borderRadius: 10 }}>
              <Text style={{ color: 'white' }}>Next</Text>
        </Pressable>
    </View>
  );
}
