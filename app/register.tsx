import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../lib/supabase";

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!email || !password) {
      Alert.alert("Missing info", "Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        Alert.alert("Sign up error", error.message);
        return;
      }

      // Depending on your Supabase settings, email might need confirmation.
      // For now, just show a message and send them to login:
      Alert.alert(
        "Check your email",
        "If email confirmation is enabled, please verify your email."
      );

      router.replace("/login");
    } catch (e: any) {
      Alert.alert("Error", e.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={{ flex: 1, padding: 24, justifyContent: "center", gap: 24 }}>
        <View>
          <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 8 }}>
            Create account
          </Text>
          <Text style={{ color: "#555" }}>
            Sign up with your email to get started.
          </Text>
        </View>

        <View style={{ gap: 16 }}>
          <View>
            <Text style={{ marginBottom: 6 }}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 999,
                paddingHorizontal: 16,
                paddingVertical: 12,
              }}
            />
          </View>

          <View>
            <Text style={{ marginBottom: 6 }}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="At least 6 characters"
              secureTextEntry
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 999,
                paddingHorizontal: 16,
                paddingVertical: 12,
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          disabled={loading}
          style={{
            backgroundColor: loading ? "#999" : "black",
            paddingVertical: 14,
            borderRadius: 999,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            {loading ? "Creating account..." : "Sign up"}
          </Text>
        </TouchableOpacity>

        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}
        >
          <Text>Already have an account?</Text>
          <Link href="/login">
            <Text style={{ fontWeight: "600" }}>Log in</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
