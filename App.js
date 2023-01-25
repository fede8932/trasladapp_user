import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { rootStyles } from './src/styles/root';

export default function App() {
  return (
    <View style={rootStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
