import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../assets/images";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const validateForm = () => {
    let valid = true;
    let errors = { email: "", password: "" };

    // Email validation

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Enter a valid email";
      valid = false;
    }

    // Password validation

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setError(errors);
    return valid;
  };

  const handleLogin = () => {
    if (validateForm()) {
        navigation.navigate("Home");
      // Proceed with login logic
      console.log("Logging in...");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#8AAAE5" }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              source={images.LogInIconImage}
              style={styles.headerImg}></Image>
            {/* <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={{
                uri: "https://assets.withfra.me/SignIn.2.png",
              }}
            /> */}
            <Text style={styles.title}>
              Sign in to <Text style={{ color: "#fff" }}>App</Text>
            </Text>
            <Text style={styles.subtitle}>
              Get access to your portfolio and more
            </Text>
          </View>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address*</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onFocus={() => setError((prev) => ({ ...prev, email: "" }))}
                onChangeText={(text) => setEmail(text)}
                onBlur={() => validateForm('email', email)}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={email}
              />
              {error.email ? (
                <Text style={styles.error}>{error.email}</Text>
              ) : null}
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password*</Text>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(text) => setPassword(text)}
                onFocus={() => setError((prev) => ({ ...prev, password: "" }))}
                onBlur={validateForm}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={password}
              />
              {error.password ? (
                <Text style={styles.error}>{error.password}</Text>
              ) : null}
            </View>
            <View style={styles.formAction}>
              <TouchableOpacity onPress={handleLogin}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>
                    Sign in
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.formLink}>Forgot password?</Text>
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity
          style={{ marginTop: "auto" }}>
          <Text style={styles.formFooter}>
            Don't have an account?{" "}
            <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                navigation.navigate("SignUp");
              }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    fontFamily: "PlaywriteIN",
  },
  title: {
    fontSize: 31,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  /** Header */
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00246B",
    textAlign: "center",
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "600",
    color: "#00246B",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  error: { color: "red", marginTop: 2, marginBottom: 3 },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#00246B",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#121212",
    borderWidth: 1,
    borderColor: "#C9D3DB",
    borderStyle: "solid",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#00246B",
    borderColor: "#CADCFC",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#CADCFC",
  },
});
