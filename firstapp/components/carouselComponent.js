import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

export default function myCarousel() {
  const data = ["Slide 1", "Slide 2", "Slide 3"];

  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {data.map((item, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.slide}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal: "auto",
  },
  slide: {
    width,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ABC",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
