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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6FBF4" }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.headerSec}>
            <Text style={styles.title}>
              Welcome To The<Text style={{ color: "#BEC75C" }}> ...App!</Text>
            </Text>
            <Text style={styles.subtitle}>
              Lets Get Started...
            </Text>
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
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: "column",
    flexShrink: 1,
    flexBasis: 0,
    fontFamily: "PlaywriteIN",
    marginVertical: 'auto',
    textAlign: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    color: "#97d17a",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 400,
    color: "#97d17a",
  },
  headerSec: {
    paddingVertical: 50,
    flex: 1,
justifyContent: 'center',
textAlign: 'center'  },
  bodySec: {
    width: '90%',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#BEC75C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    width: 150,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#CADCFC",
    color: "#F6FBF4",
  },
});
