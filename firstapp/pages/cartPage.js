import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import email from "react-native-email";
import { EMAIL } from "@env";

export default function CartPage({ route }) {
  const { cartItems } = route.params;

  const sendEmail = () => {
    let body = `Here are the order details:\n\n`;

    cartItems.forEach((item) => {
      body += `Item: ${item.label}\n`;
      body += `Price: ${item.price}\n`;
      body +=
        `Quantity: ${item.selectedQuantity}` +
        " * " +
        `${item.quantities.join(", ")}\n`;
      body += `------------------------\n`; // Add a newline between items
    });

    const to = [EMAIL];

    // Send email
    email(to, {
      subject: "Orders from the App",
      body: body,
    }).catch(console.error);
  };

  const renderItem = ({ item, index }) => (
    <View
      style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
      <Text style={styles.cell}>{index + 1}</Text>
      <Text style={styles.cell}>{item.label}</Text>
      <Text style={styles.cell}>{item.price}</Text>
      <Text style={styles.cell}>
        {item.selectedQuantity} * {item.quantities}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Order <Text style={{ color: "grey" }}>Details</Text>
          </Text>
          {/* Table Header */}
          <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.headerText]}>#</Text>
            <Text style={[styles.cell, styles.headerText]}>Item</Text>
            <Text style={[styles.cell, styles.headerText]}>Price per kg</Text>
            <Text style={[styles.cell, styles.headerText]}>Quantity</Text>
          </View>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
        <TouchableOpacity style={styles.sendEmail} onPress={sendEmail}>
          <Text style={styles.sendEmailText}>Send via Email</Text>
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
    
  },
  title: {
    fontSize: 31,
    fontWeight: 700,
    color: "#000",
    marginVertical: 20,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  evenRow: {
    backgroundColor: "#f1f3f5",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
  headerRow: {
    backgroundColor: "#00246B",
    width: "100%",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
  },
  headerItemText: {
    width: "40%",
  },
  sendEmail: {
    backgroundColor: "#ffc300",
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
  sendEmailText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
  },
});
