import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import welcomeScreen from "../firstapp/pages/welcomePage";
import homeScreen from "../firstapp/pages/homePage";
import signUpScreen from "../firstapp/pages/signUpPage";
import logInScreen from "../firstapp/pages/login";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.heading}>WELCOME...!</Text>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      {
        <stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerBackTitleVisible: false,
          }}>
          <stack.Screen
            name="Welcome"
            component={welcomeScreen}
            options={{
              title: "App",
              headerTitleAlign: "center",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#F6FBF4",
              },
              headerTintColor: "#FBF4F5",
              headerTitleStyle: {
                fontSize: 22,
                fontFamily: "PlaywriteIN",
                fontWeight: "600",
              },
            }}></stack.Screen>
          <stack.Screen
            name="LogIn"
            component={logInScreen}
            options={{
              title: "SignIn",
              headerTitleAlign: "center",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#8AAAE5",
              },
              headerTintColor: "#FBF4F5",
              headerTitleStyle: {
                fontSize: 22,
                fontFamily: "PlaywriteIN",
                fontWeight: "600",
              },
            }}></stack.Screen>

          <stack.Screen
            name="Home"
            component={homeScreen}
            options={{
              title: "Home",
              headerTitleAlign: "center",
              headerShown: false,
              headerStyle: {
                backgroundColor: "#2F3C7E",
              },
              headerTintColor: "#FBEAEB",
              headerTitleStyle: {
                fontSize: 22,
                fontFamily: "PlaywriteIN",
                fontWeight: "600",
              },
            }}></stack.Screen>

          <stack.Screen
            name="SignUp"
            component={signUpScreen}
            options={{
              title: "SignUp",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#8AAAE5", //Set Header color
              },
              headerTintColor: "#FBF4F5", //Set Header text color
              headerTitleStyle: {
                fontSize: 22,
                fontFamily: "PlaywriteIN",
                fontWeight: "600", //Set Header text style
              },
            }}></stack.Screen>
        </stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    color: "#121212",
  },
});
