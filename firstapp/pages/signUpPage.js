import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Image,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../assets/images";
import { Formik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Validation schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignUp({ navigation }) {
  const handleSignup = async (values, { setSubmitting, setErrors }) => {
    const { name, email, password } = values;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up successfully:", user);

      await updateProfile(user, { displayName: name });
      console.log("User created with name:", user.displayName);

      // Additional actions after successful signup, like navigation
      Alert.alert(
        `Welcome ${user.displayName}!`,
        "You have successfully signed up. Please click OK to navigate Sign in page.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("LogIn"),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      const firebaseErrorMessages = {
        "auth/invalid-email":
          "The email address is invalid. Please check and try again.",
        "auth/email-already-in-use":
          "This email is already registered. Please use a different email.",
      };

      setErrors({
        firebase: firebaseErrorMessages[error.code] || error.message,
      });

      // const customMessage = firebaseErrorMessages[error.code] || "An unknown error occurred. Please try again.";
      // Alert.alert(customMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={handleSignup}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#8AAAE5" }}>
          <View style={styles.container}>
            <KeyboardAwareScrollView>
              <View style={styles.header}>
                <Image
                  alt="App Logo"
                  resizeMode="contain"
                  source={images.SignUpIconImage}
                  style={styles.headerImg}></Image>
                <Text style={styles.title}>Get Started</Text>
                <Text style={styles.subtitle}>
                  All Fields are Required to continue.
                </Text>
              </View>
              <View style={styles.form}>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Name*</Text>
                  <TextInput
                    placeholder="Name"
                    style={styles.inputControl}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <Text style={styles.error}>{errors.name}</Text>
                  )}
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Email*</Text>
                  <TextInput
                    placeholder="Email"
                    style={styles.inputControl}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Password*</Text>
                  <TextInput
                    placeholder="Password"
                    style={styles.inputControl}
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>

                <TouchableOpacity onPress={handleSubmit}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>

                {errors.firebase && (
                  <Text style={styles.firebaseError}>{errors.firebase}</Text>
                )}
              </View>
            </KeyboardAwareScrollView>
          </View>
        </SafeAreaView>
      )}
    </Formik>
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
  subtitle: {
    fontSize: 15,
    fontWeight: 500,
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
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: 600,
    color: "#00246B",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: 500,
    color: "#121212",
    borderWidth: 1,
    borderColor: "#C9D3DB",
    borderStyle: "solid",
  },
  firebaseError: { color: "red", marginTop: 5 },
  error: { color: "red", marginTop: 2, marginBottom: 3 },
  /** Input */
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
    fontWeight: 600,
    color: "#CADCFC",
  },
});
