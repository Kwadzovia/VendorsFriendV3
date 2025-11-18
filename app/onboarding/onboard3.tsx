// app/onboarding/index.tsx
import { useRouter } from "expo-router";
import React from "react";
import OnboardingPage from "../../components/onboardpage";

export default function Onboarding1Screen() {
  const router = useRouter();

  return (
    <OnboardingPage
      image={require("../../assets/images/journal.png")} // ⬅ your first cute image
      background="#eae7d7"
      title="Track your progress"
      description="Organize your ideas, plan your journey, and watch yourself grow"
      buttonOneText="Register"
      buttonTwoText="Login"
      onNext1={() => router.push("/register")} // ⬅ go to next screen
      onNext2={() => router.push("/login")} // ⬅ go to next screen
    />
  );
}
