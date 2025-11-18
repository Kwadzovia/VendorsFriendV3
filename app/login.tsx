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

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Missing info", "Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert("Login error", error.message);
        return;
      }

      // 🎯 At this point, user is logged in.
      // We'll later add logic to show the "main app" if session exists.
      router.replace("/"); // or "/(tabs)" or whatever your main route is
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
            Welcome back
          </Text>
          <Text style={{ color: "#555" }}>
            Log in with your email and password.
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
              placeholder="••••••••"
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
          onPress={handleLogin}
          disabled={loading}
          style={{
            backgroundColor: loading ? "#999" : "black",
            paddingVertical: 14,
            borderRadius: 999,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            {loading ? "Logging in..." : "Log in"}
          </Text>
        </TouchableOpacity>

        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}
        >
          <Text>Don’t have an account?</Text>
          <Link href="/register">
            <Text style={{ fontWeight: "600" }}>Sign up</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
