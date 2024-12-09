import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

export default function DryFruit({
  label,
  image,
  price,
  index,
  onPress,
  onAddToCart,
}) {
  const [quantities, setQuantities] = useState([1]);
  const [dispQtyBtn, setdispQtyBtn] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (value) => {
    setSelectedQuantity(value);
    setDropdownOpen(false);
  };

  const handleAddToCartBtn = () => {
    if (!selectedQuantity) {
      alert("Please select a quantity before adding to the cart");
      return;
    }
    setButtonText("Added");
    setdispQtyBtn(true);
    updateQuantity(index, 1);

    const item = { label, price, selectedQuantity, quantities };
    onAddToCart(item);
  };

  // Function to update the quantity for a specific item
  const updateQuantity = (index, change) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + change : qty))
    );
  };

  return (
    <>
      <View style={styles.dryFruitImageContainer}>
        <TouchableOpacity title={label} onPress={onPress}>
          <Image source={image} style={styles.itemImage}></Image>
          <Text style={styles.itemText}>{label}</Text>
          <Text style={styles.itemText}>Price: {price}/kg</Text>
        </TouchableOpacity>
      </View>
      {quantities.map((quantity, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={toggleDropdown}
            activeOpacity={0.6}>
            <Text style={styles.qtyTxt}>
              Quantity:{" "}
              <Text style={styles.selectedText}>
                {selectedQuantity || "Select"}
              </Text>
            </Text>
            <Icon
              name={dropdownOpen ? "caretup" : "caretdown"}
              size={15}
              color="#2dc653"
            />
          </TouchableOpacity>

          {/* Dropdown Items */}
          {dropdownOpen && (
            <View style={styles.dropdownOptions}>
              {["100gm", "250gm", "500gm", "1kg"].map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => handleSelect(option)}>
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => updateQuantity(index, -1)}
              disabled={quantity <= 0}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => updateQuantity(index, 1)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.selectButtonContainer}>
            <TouchableOpacity
              style={[
                styles.selectButton,
                { backgroundColor: quantities[index] > 0 ? "#00246B" : "#ccc" },
              ]}
              onPress={() => handleAddToCartBtn()}
              disabled={quantities[index] <= 0}>
              <Text style={styles.selectButtonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  dryFruitImageContainer: {
    width: "40%",
    margin: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  itemImage: {
    width: 60,
    height: 60,
    backfaceVisibility: "visible",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignSelf: "center",
  },
  itemText: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 21,
    fontWeight: 400,
    letterSpacing: 0.25,
    color: "#292f33",
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#00246B",
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    height: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectButton: {
    backgroundColor: "#00246B",
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 25,
    marginHorizontal: 5,
    marginTop: 5,
    height: 40,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "400",
  },
  card: {
    width: "40%",
    margin: 10,
    paddingVertical: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  qtyTxt: {
    fontSize: 12,
    color: "#121212",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: 140,
  },
  selectedText: {
    fontSize: 15,
    color: "#6f1d1b",
    flex: 1,
  },
  dropdownOptions: {
    marginTop: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 1,
  },
  option: {
    padding: 8,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 14,
    color: "#333",
  },
});
