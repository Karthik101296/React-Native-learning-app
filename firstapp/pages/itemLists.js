import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import DryFruit from "../components/dryFruitItems";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const handleViewCart = () => {
    if (cartItems.length === 0) {
      Alert.alert("Your cart is empty", "Please add items to the cart first.");
    } else {
      navigation.navigate("Cart", { cartItems });
    }
  };

  const dryFruitItems = [
    {
      avaiableList: [
        {
          label: "Cashew",
          value: "Cashew",
          price: "1000",
          image: require("../assets/images/cashew.jpg"),
        },
        {
          label: "Risins",
          value: "Risins",
          price: "350",
          image: require("../assets/images/raisins.jpg"),
        },
        {
          label: "Almonds",
          value: "Almonds",
          price: "780",
          image: require("../assets/images/almonds.jpg"),
        },
        {
          label: "Strawberry",
          value: "Strawberry",
          price: "600",
          image: require("../assets/images/strawberry.jpg"),
        },
        {
          label: "Pista",
          value: "Pista",
          price: "1250",
          image: require("../assets/images/pista.jpg"),
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.itemsContainer}>
              {Object.keys(dryFruitItems[0]["avaiableList"]).map((key) => (
                <DryFruit
                  key={key}
                  label={dryFruitItems[0]["avaiableList"][key]["label"]}
                  image={dryFruitItems[0]["avaiableList"][key]["image"]}
                  price={dryFruitItems[0]["avaiableList"][key]["price"]}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => handleViewCart()}>
            <Text style={styles.cartButtonText}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    width: "100%",
  },
  form: {
    backgroundColor: "#CADCFC",
    padding: 10,
    marginHorizontal: 25,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: "#00246B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    width: "100%",
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: 320,
  },
  cartButton: {
    backgroundColor: "#ffc300",
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 25,
    marginHorizontal: 5,
    marginTop: 10,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  cartButtonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default App;
