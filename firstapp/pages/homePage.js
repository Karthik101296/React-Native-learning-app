import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../assets/images";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function HomePage({ navigation, route }) {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, retrieve displayName
        setDisplayName(user.displayName || "User"); // Default to 'User' if displayName is null
      } else {
        //setDisplayName('');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F3C7E" }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              source={images.HomeAppImage}
              style={styles.appHomeImg}></Image>
            <Text style={styles.title}>
              Home <Text style={{ color: "#FBEAEB" }}>Page</Text>
            </Text>

            {displayName ? (
              <Text style={styles.welcomeText}>Welcome, {displayName}!</Text>
            ) : (
              <Text style={styles.welcomeText}>Welcome!</Text>
            )}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    fontFamily: "PlaywriteIN",
  },
  appHomeImg: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 31,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 6,
  },
  /** Header */
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 36,
  },
});
