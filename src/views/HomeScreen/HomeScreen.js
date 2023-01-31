import { View } from "react-native";
import ButtonNavigation from "../../commons/ButtonNavigation";
import SheetApp from "../../components/sheet/SheetApp";
import AddressBoxContainer from "../../containers/AddressBoxContainer";
import MapContainer from "../../containers/MapContainer";
import homeScreenStyles from "./homeScreenStyles";

function HomeScreen({ navigation }) {
  return (
    <View style={homeScreenStyles.container}>
      <MapContainer />
      <ButtonNavigation Navigation={navigation.openDrawer} />
      <SheetApp />
      {/* <AddressBoxContainer /> */}
    </View>
  );
}

export default HomeScreen;
