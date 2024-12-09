import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
  Alert,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Icon from "react-native-vector-icons/FontAwesome6";

export default function Slider() {
  const [activeDot, setActiveDot] = useState(0);

  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleScrollToBottom = () => {
  //   if (scrollViewRef.current) {
  //     scrollViewRef.current.scrollTo({
  //       y: (currentIndex + 1) * 20, // Assuming each view is 20px tall
  //       animated: true,
  //     });
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };
  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0, // Scroll to the top
        animated: true, // Smooth scroll
      });
    }
  };

  const handleLinkPress = (link) => {
    if (link) {
      Linking.openURL(link).catch((err) =>
        Alert.alert("Error", "Unable to open link")
      );
    } else {
      Alert.alert("No Link", "This item does not have a link.");
    }
  };

  const data = [
    {
      title: "Card 1",
      body: "React native react-native-snap-carousel | React native Expo | slider card",
      imgUrl: require("../assets/images/homeFit_guide_img.png"),
    },
    {
      title: "Card 2",
      body: "React native react-native-snap-carousel | React native Expo | slider card",
      imgUrl: require("../assets/images/liability_index_tool_img.png"),
    },
    {
      title: "Card 3",
      body: "React native react-native-snap-carousel | React native Expo | slider card",
      imgUrl: require("../assets/images/accessory_dwelling_units_img.png"),
    },
    {
      title: "Card 4",
      body: "React native react-native-snap-carousel",
      imgUrl: require("../assets/images/liability_index_tool_img.png"),
    },
  ];

  const scrollItem = [
    {
      title: "Array",
      body: "An array is a special type of variable because it can contain more than one value. An array consists of an array name and an index. The index identifies the element of the array that is addressed.",
      imgUrl: require("../assets/images/homeTips_tools_card_img1.jpg"),
      link: "https://www.w3schools.com/js/js_arrays.asp",
    },
    {
      title: "Object",
      body: "Objects are the instances of a class that are created to use the attributes and methods of a class. A typical Java program creates many objects, which as you know, interact by invoking methods.",
      imgUrl: require("../assets/images/homeTips_tools_card_img2.jpg"),
      link: "https://www.w3schools.com/js/js_object_definition.asp",
    },
    {
      title: "Map",
      body: "In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.",
      imgUrl: require("../assets/images/homeTips_tools_card_img3.jpg"),
      link: "https://www.w3schools.com/js/js_maps.asp",
    },
    {
      title: "Variable",
      body: "A variable in JavaScript is a named container that stores values, such as numbers, strings, or objects. Variables can be used to store information that may need to be referenced or modified multiple times.",
      imgUrl: require("../assets/images/homeTips_tools_card_img4.jpg"),
      link: "https://www.w3schools.com/js/js_variables.asp",
    },
    {
      title: "AJAX",
      body: "Ajax enables a web application user to interact with a web page without the interruption of constant web page reloading. Website interaction happens quickly with only portions of the page reloading and refreshing.",
      imgUrl: require("../assets/images/homeTips_tools_card_img1.jpg"),
      link: "https://www.w3schools.com/js/js_ajax_intro.asp",
    },
    {
      title: "Null",
      body: "In JavaScript, null and undefined represent the absence of a value. null is an assignment value that represents no value or no object. It is often used to indicate that a variable has no value or that an object does not exist.",
      imgUrl: require("../assets/images/homeTips_tools_card_img5.jpg"),
    },
  ];

  const scrollImages = [
    {
      title: "Risins",
      imgUrl: require("../assets/images/raisins.jpg"),
    },
    {
      title: "Cashew",
      imgUrl: require("../assets/images/cashew.jpg"),
    },
    {
      title: "Almonds",
      imgUrl: require("../assets/images/almonds.jpg"),
    },
    {
      title: "Strawberry",
      imgUrl: require("../assets/images/strawberry.jpg"),
    },
    {
      title: "Pista",
      imgUrl: require("../assets/images/pista.jpg"),
    },
  ];

  const width = Dimensions.get("window").width;

  const renderItem = ({ index, item }) => {
    if (!item) {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.errorText}>No Data Available</Text>
        </View>
      );
    }
    return (
      <View
        key={index}
        style={[
          styles.itemContainer,
          index % 2 === 0 ? styles.evenItem : styles.oddItem, // Conditional class
        ]}>
        <Image source={item.imgUrl} style={styles.itemImg} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemBody}>{item.body}</Text>
      </View>
    );
  };

  const renderItem1 = ({ index, item }) => {
    if (!item) {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.errorText}>No Data Available</Text>
        </View>
      );
    }
    return (
      <View key={index} style={styles.scrollItemContainer}>
        <Image source={item.imgUrl} style={styles.itemImg} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemBody}>{item.body}</Text>
        {item.link && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLinkPress(item.link)}>
            <Text style={styles.buttonText}>
              Learn more <Icon name={"chevron-right"} size={12} color="#fff" />
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  const renderItem2 = ({ index, item }) => {
    if (!item) {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.errorText}>No Images Available</Text>
        </View>
      );
    }
    return (
      <View key={index} style={styles.scrollImgContainer}>
        <Image source={item.imgUrl} style={styles.itemImg1} />
      </View>
    );
  };

  const CustomDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {scrollImages.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeDot === index ? styles.activeDot : null]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView ref={scrollViewRef} style={{ position: "relative" }}>
        <View style={{ flex: 1 }}>
          <Carousel
            layout="default"
            width={width}
            height={270}
            data={data}
            autoPlay={true}
            scrollAnimationDuration={3000}
            renderItem={renderItem}
            mode="horizontal"></Carousel>
        </View>
        {Array.from({ length: 1 }, (_, i) => (
          <View key={i} style={styles.item}>
            <TouchableOpacity style={styles.scrollButton}>
              <Icon name={"angles-down"} size={30} color="#121212" />
            </TouchableOpacity>
          </View>
        ))}

        <View style={{ flex: 1 }}>
          <Carousel
            layout="default"
            vertical={false}
            width={width}
            height={450}
            data={scrollItem}
            scrollAnimationDuration={1000}
            renderItem={renderItem1}
            mode="horizontal"></Carousel>
        </View>
        <View>
          <Text style={styles.text}>
            React native react-native-snap-carousel | React native Expo | slider
            card
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "grey" }}>
          <Carousel
            layout="default"
            vertical={false}
            width={width}
            height={120}
            data={scrollImages}
            onSnapToItem={(index) => setActiveDot(index)}
            scrollAnimationDuration={1000}
            renderItem={renderItem2}
            mode="horizontal"></Carousel>
          <CustomDots />
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.buttonTop} onPress={handleScrollToTop}>
          <Icon name={"angles-up"} size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "green",
    borderRadius: 4,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    textAlign: "center",
  },
  evenItem: {
    backgroundColor: "lightgreen",
  },
  oddItem: {
    backgroundColor: "lightpink",
  },
  itemImg: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemBody: {
    fontSize: 18,
    fontWeight: "400",
  },
  errorText: {
    color: "#000",
  },
  scrollItemContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "#00246B",
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 25,
    marginHorizontal: "auto",
    marginTop: 30,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollButton: {
    marginHorizontal: "auto",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#37383d",
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 10,
  },
  buttonTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.5,
    paddingHorizontal: 5,
    borderRadius: 25,
    marginTop: 30,
    height: 50,
    width: 50,
    position: "absolute",
    bottom: 20,
    right: 10,
    cursor: "pointer",
    transitionDuration: "0.2s",
    transitionTimingFunction: "linear",
    transitionDelay: "0s",
  },
  scrollImgContainer: {
    marginTop: 20,
    marginHorizontal: "auto",
    zIndex: 1,
  },
  itemImg1: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginHorizontal: "auto",
    backfaceVisibility: "visible",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "purple",
    width: 10,
    height: 10,
  },
});
