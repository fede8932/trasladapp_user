import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, SafeAreaView } from "react-native";
import HomeScreen from "../views/HomeScreen/HomeScreen";
import NotificationsScreen from "../views/NotificationsScreen";
import PerfilContainer from "../components/perfilContainer/PerfilContainer";
import { customDrawerStyle } from "./customDrawerStyle";
import Icon from "react-native-dynamic-vector-icons";
import CustomSeperator from "../commons/CustomSeperator";

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
        <CustomSeperator styleContainer="separadorContainer" styleSeparator="separador"/>
        <DrawerItem
          label="Ayuda"
          onPress={() => alert("ayuda")}
          icon={({ focused, size }) => (
            <Icon
              name="help-circle"
              type="Feather"
              size={size}
              color={focused ? "#484848" : "#7A7A7A"}
            />
          )}
        />
        <DrawerItem
          label="Cerrar sesión"
          onPress={() => alert("saliste")}
          icon={({ focused, size }) => (
            <Icon
              name="log-out"
              type="Feather"
              size={size}
              color={focused ? "#484848" : "#7A7A7A"}
            />
          )}
        />
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
      <Drawer.Screen
        options={{
          title: "Inicio",
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              type="FontAwesome5"
              size={size}
              color={focused ? "#484848" : "#7A7A7A"}
            />
          ),
        }}
        name="Inicio"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          title: "Mis viajes",
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="road"
              type="FontAwesome5"
              size={size}
              color={focused ? "#484848" : "#7A7A7A"}
            />
          ),
        }}
        name="Mis viajes"
        component={NotificationsScreen}
      />
      <Drawer.Screen
        options={{
          title: "Mensajes",
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="mail-bulk"
              type="FontAwesome5"
              size={size}
              color={focused ? "#484848" : "#7A7A7A"}
            />
          ),
        }}
        name="Mensajes"
        component={NotificationsScreen}
      />
      <Drawer.Screen
        options={{
          title: "Billetera",
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="wallet"
              type="FontAwesome5"
              size={size}
              color={focused ? "#484848" : "#7A7A7A"}
            />
          ),
        }}
        name="Billetera"
        component={NotificationsScreen}
      />
      <Drawer.Screen
        options={{
          title: "Configuración",
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="wrench"
              type="FontAwesome5"
              size={size}
              color={focused ? "#484848" : "#7A7A7A"}
            />
          ),
        }}
        name="Configuración"
        component={NotificationsScreen}
      />
    </Drawer.Navigator>
  );
}

export default CustomDrawer;
