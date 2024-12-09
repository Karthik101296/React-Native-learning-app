import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import email from "react-native-email";
import { EMAIL } from "@env";

export default function Items() {
  const [response, setResponse] = useState("");
  const [responseList, setResponseList] = useState([]);

  const addResponse = () => {
    if (response.trim()) {
      setResponseList([...responseList, response]);
      setResponse("");
    }
  };

  const sendEmail = () => {
    const body = responseList.join("\n");
    const to = [EMAIL];

    email(to, {
      subject: "Responses from the App",
      body: `Here are the responses:\n\n${body}`,
    }).catch(console.error);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0}>
        <View style={{ padding: 20 }}>
          <TextInput
            style={{
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}
            placeholder="Enter a response"
            value={response}
            onChangeText={setResponse}
          />
          <Button title="Add Response" onPress={addResponse} />
          <FlatList
            data={responseList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text
                style={{
                  padding: 10,
                  backgroundColor: "#f9f9f9",
                  marginVertical: 5,
                }}>
                {item}
              </Text>
            )}
          />
          <Button title="Send Responses via Email" onPress={sendEmail} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
