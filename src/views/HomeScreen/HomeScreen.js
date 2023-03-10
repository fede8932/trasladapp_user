import { View } from "react-native";
import CustomButton from "../../commons/CustomButton";
import MapContainer from "../../containers/MapContainer";
import SheetContainer from "../../containers/SheetContainer";
import homeScreenStyles from "./homeScreenStyles";

function HomeScreen({ navigation }) {
  return (
    <View style={homeScreenStyles.container}>
      <MapContainer />
      <CustomButton
        Press={navigation.openDrawer}
        iconName="menu"
        iconType="MaterialIcons"
        iconSize={35}
        iconColor="#C0C0C0"
        styleContainer="container"
        styleButton="button"
      />
      <SheetContainer />
    </View>
  );
}

export default HomeScreen;
