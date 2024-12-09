import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Button,
  Pressable,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../assets/images";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default function ProfilePage({ navigation }) {
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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert(
        "Signed Out",
        "You have been signed out successfully.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("LogIn"),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      Alert.alert("Error signing out: ", error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F3C7E" }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>
              Profile <Text style={{ color: "#FBEAEB" }}>Page</Text>
            </Text>

            {displayName ? (
              <Text style={styles.welcomeText}>{displayName}!</Text>
            ) : (
              <Text style={styles.welcomeText}>User!</Text>
            )}

            <Pressable
              title="Sign Out"
              onPress={handleSignOut}
              style={styles.signOutButton}>
              <Text style={styles.buttonText}>Sign Out</Text>
            </Pressable>
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
  signOutButton: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    marginBottom: 10,
    backgroundColor: "#3E144D",
    color: "#FFFFFF",
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFFFFF",
  },
  welcomeText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 0.8,
    color: "#FFFFFF",
    marginVertical: 30,
  },
});
