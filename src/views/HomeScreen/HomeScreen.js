import { View } from "react-native";
import ButtonNavigation from "../../commons/ButtonNavigation";
import MapContainer from "../../containers/MapContainer";
import SheetContainer from "../../containers/SheetContainer";
import homeScreenStyles from "./homeScreenStyles";

function HomeScreen({ navigation }) {
  return (
    <View style={homeScreenStyles.container}>
      <MapContainer />
      <ButtonNavigation Navigation={navigation.openDrawer} />
      <SheetContainer />
    </View>
  );
}

export default HomeScreen;
