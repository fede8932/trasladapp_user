import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import LoginContainer from "./src/containers/LoginContainer";
// import { rootStyles } from "./src/styles/root";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./src/drawer/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    //aca va el ternario con LoginContainer
    <NavigationContainer>
      <CustomDrawer />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
