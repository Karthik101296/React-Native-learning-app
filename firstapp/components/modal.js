import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

const ForgotPwdSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function Modals({}) {
  const [modalVisible, setModalVisible] = useState(false);

  //   const handleConfirm = () => {
  //     console.log("Confirmed!");
  //     setModalVisible(false);
  //   };

  const handleCancel = () => {
    // console.log("Canceled!");
    setModalVisible(false);
  };

  const handleSignup = () => {
    // Proceed with login logic
    console.log("Sign up...");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.forgotPwd} onPress={() => setModalVisible(true)}>
          Forgot password?
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Forgot your password?</Text>
            <Text style={styles.modalText}>
              Don't worry, Simply enter your email & click Submit. We will then
              send you a link to reset your password.
            </Text>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotPwdSchema}
              onSubmit={(values) => handleSignup(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View style={styles.form}>
                    <View style={styles.input}>
                      <Text style={styles.inputLabel}>Email*</Text>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        keyboardType="email-address"
                        placeholder="john@example.com"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <Text style={styles.error}>{errors.email}</Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                      <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={handleCancel}>
                      <Text style={styles.btnText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 320,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 5,
  },
  confirmButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginLeft: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalHeading: {
    fontSize: 24,
    marginBottom: 15,
    color: "#00246B",
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },

  forgotPwd: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00246B",
    textAlign: "center",
  },
  form: {
    marginBottom: 10,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    width: 320,
  },
  input: {
    marginBottom: 5,
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
  error: { color: "red", marginTop: 2, marginBottom: 3 },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 8,
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
