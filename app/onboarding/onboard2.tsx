// app/onboarding/index.tsx
import { useRouter } from "expo-router";
import React from "react";
import OnboardingPage from "../../components/onboardpage";

export default function Onboarding1Screen() {
  const router = useRouter();

  return (
    <OnboardingPage
      image={require("../../assets/images/desk.png")} // ⬅ your first cute image
      background="#becade"
      title="Focus on what matters"
      description="We'll help organize the chaos of applications, setup information, and deadlines so you can focus on what you really enjoy."
      buttonOneText="Next"
      onNext={() => router.push("/onboarding/onboard3")} // ⬅ go to next screen
    />
  );
}
