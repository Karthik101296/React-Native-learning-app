import { StyleSheet, Text, View, Button } from 'react-native';

export default function Profile({navigation, route}) {
  return (
    <Text>This is {route.params.name}'s profile</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
