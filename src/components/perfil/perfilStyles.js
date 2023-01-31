import { StyleSheet } from "react-native";

export const perfilContainerStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 5,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 5,
    alignItems: "center",
  },
  nombre: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
  categoria: {
    fontSize: 12,
    color: "grey",
  }
});
