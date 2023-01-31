import { StyleSheet } from "react-native";

export const sheetAppStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 500,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    alignItems: "flex-start",
  },
  imagen: {
    width: 105,
    height: 65,
  },
  formContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 1,
  },
  saludoConsulta: {
    width: "65%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  saludo: {
    color: "#7A7A7A",
    fontSize: 11,
  },
  consulta: {
    color: "#484848",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  favoritosContainer: {
    marginTop: 5,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  scrollView:{
    marginHorizontal: 20,
    marginTop: 10,
  }
});