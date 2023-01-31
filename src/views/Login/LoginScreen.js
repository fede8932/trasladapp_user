import { View } from "react-native";
import homeScreenStyles from "./loginStyles";
import LoginContainer from "../../containers/LoginContainer"

function HomeScreen({ navigation }) {
  return (
    <View style={homeScreenStyles.container}>
      <LoginContainer />
    </View>
  );
}

export default HomeScreen;
