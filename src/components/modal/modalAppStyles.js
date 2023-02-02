import { StyleSheet } from "react-native";

export const modalAppStyles = StyleSheet.create({
  centeredView: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeContainer: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 13,
    marginBottom: 8,
    marginTop: 3,
  },
  title: {
    width: "80%",
    textAlign: "center",
    fontSize: 17,
    color: "#484848",
    fontWeight: "600",
  },
});
