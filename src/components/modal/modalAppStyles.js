import { StyleSheet } from "react-native";

export const modalAppStyles = StyleSheet.create({
    centeredView: {
      width: "100%",
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    modalView: {
      width:"100%",
      height: "60%",
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
      alignItems: "flex-end",
      padding: "1%",
    }
  });