// app/onboarding/index.tsx
import { useRouter } from "expo-router";
import React from "react";
import OnboardingPage from "../../components/onboardpage";

export default function Onboarding1Screen() {
  const router = useRouter();

  return (
    <OnboardingPage
      image={require("../../assets/images/selling.png")} // ⬅ your first cute image
      background="#a9c2be"
      title="Find your next market"
      description="Discover and share local events! Find whats perfect for you."
      buttonOneText="Next"
      onNext1={() => router.push("/onboarding/onboard2")} // ⬅ go to next screen
    />
  );
}
