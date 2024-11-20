import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Image,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../assets/images";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}>
        <View style={styles.container}>
          <View style={styles.headerSec}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              source={images.WelcomeAppImage}
              style={styles.appImg}></Image>
            <Text style={styles.title}>
              Welcome To The<Text style={{ color: "#BEC75C" }}> ...App!</Text>
            </Text>
            <Text style={styles.subtitle}>Lets Get Started...</Text>
          </View>
          <View style={styles.bodySec}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LogIn");
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  headerSec: {
    marginBottom: 30,
    alignItems: "center",
    width: "100%",
  },
  appImg: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#97d17a",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "400",
    color: "#97d17a",
    marginTop: 10,
    textAlign: "center",
  },
  bodySec: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
  },
  btn: {
    backgroundColor: "#BEC75C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    //paddingHorizontal: 20,
    marginVertical: 10,
    width: 150,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#F6FBF4",
  },
});