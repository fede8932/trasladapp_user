import { StyleSheet } from "react-native";

export const addresBoxStyles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: 145,
    zIndex: 10,
    bottom: "1.5%",
    display: "flex",
    alignItems: "center",
  },
  containerNone: {
    zIndex: -20,
  },
  boxContainer: {
    width: "90%",
    height: "100%",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    display: "flex",
    alignItems: "center",
  },
  botonReserva: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: "95%",
    height: 65,
    backgroundColor: "#F3F3F3",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  textPress: {
    marginHorizontal: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#505050",
    textAlign: "center",
  },
  enlace: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
  },
  textLink: {
    color: "#FFAE00",
    marginHorizontal: 5,
    textDecorationLine: 'underline',
  }
});
