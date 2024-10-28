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

export default function HomePage({ navigation, route }) {
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F3C7E" }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            
            <Text style={styles.title}>
             Home  <Text style={{ color: "#FBEAEB" }}>Page</Text>
            </Text>
           
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
    fontWeight: "700",
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
