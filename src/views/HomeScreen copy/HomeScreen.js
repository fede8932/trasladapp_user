import { View } from "react-native";
import CustomButton from "../../commons/CustomButton";
import MapContainer from "../../containers/MapContainer";
import SheetContainer from "../../containers/SheetContainer";
import homeScreenStyles from "./homeScreenStyles";

function HomeScreen({ navigation }) {
  return (
    <View style={homeScreenStyles.container}>
      <MapContainer />
      <CustomButton Navigation={navigation.openDrawer} />
      <SheetContainer />
    </View>
  );
}

export default HomeScreen;
