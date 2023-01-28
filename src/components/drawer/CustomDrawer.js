import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Button, SafeAreaView } from "react-native";
import HomeScreen from "../../views/HomeScreen/HomeScreen";
import NotificationsScreen from "../../views/NotificationsScreen";
import PerfilContainer from "../perfilContainer/PerfilContainer";
import { customDrawerStyle } from "./customDrawerStyle";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={customDrawerStyle.drawerContainer}
    >
      <PerfilContainer />
      <SafeAreaView
        style={customDrawerStyle.itemsContainer}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert("Link to help")} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function CustomDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#fff57b",
          height: "100%",
        },
        drawerType: "slide",
        drawerActiveTintColor: "#484848",
        drawerActiveBackgroundColor: "#FFFCE2",
        drawerInactiveTintColor: "#7A7A7A",
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Mis viajes" component={NotificationsScreen} />
      <Drawer.Screen name="Mensajes" component={NotificationsScreen} />
      <Drawer.Screen name="Configuración" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export default CustomDrawer;
