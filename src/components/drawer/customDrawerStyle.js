import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height;

export const customDrawerStyle = StyleSheet.create({
  itemsContainer: {
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 20,
    paddingTop: 20,
    height: (15 / 16) * ScreenHeight,
  },
  drawerContainer: {
    flex: 1,
    height: ScreenHeight,
  },
  separadorContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 11,
  },
  separador: {
    flex: 1,
    height: 1,
    backgroundColor: "#E9E9E9",
    width: "80%",
  },
});
