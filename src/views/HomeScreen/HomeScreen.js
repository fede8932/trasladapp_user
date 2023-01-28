import { View } from "react-native";
import ButtonNavigation from "../../commons/ButtonNavigation";
import MapContainer from "../../containers/MapContainer";
import homeScreenStyles from "./homeScreenStyles";

function HomeScreen({ navigation }) {
  return (
    <View style={homeScreenStyles.container}>
      <MapContainer />
      <ButtonNavigation Navigation={navigation.openDrawer} />
    </View>
  );
}

export default HomeScreen;
