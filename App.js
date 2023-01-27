import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import LoginContainer from './src/containers/LoginContainer';
import { rootStyles } from './src/styles/root';

export default function App() {
  return (
    <View style={rootStyles.container}>
      <LoginContainer />
      <StatusBar style="auto" />
    </View>
  );
}
