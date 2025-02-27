import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Troquei mais uma vez!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: Constants.statusBarHeight, 
  },
});
