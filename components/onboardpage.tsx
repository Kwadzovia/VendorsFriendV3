// components/OnboardingPage.tsx
import React from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  image: ImageSourcePropType;
  background: string;
  title: string;
  description: string;
  buttonOneText?: string;
  buttonTwoText?: string;
  onNext?: () => void;
};

export default function OnboardingPage({
  image,
  background,
  title,
  description,
  buttonOneText,
  buttonTwoText,

  onNext,
}: Props) {
  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <View style={styles.illustrationWrapper}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.button2} onPress={onNext}>
        <Text style={styles.buttonText}>{buttonOneText}</Text>
      </TouchableOpacity>
      {buttonTwoText ? (
        <TouchableOpacity style={styles.button1} onPress={onNext}>
          <Text style={styles.buttonText}>{buttonTwoText}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },

  illustrationWrapper: {
    width: "100%",
    marginTop: 50,
    alignItems: "center", // centers horizontally
  },
  image: {
    paddingTop: 300,
    width: width * 0.95,
    height: width * 0.95,
  },

  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: "center",
    lineHeight: 22,
  },

  button1: {
    backgroundColor: "#111",
    marginBottom: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#3356a3ff",
    marginBottom: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    paddingVertical: 16,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
