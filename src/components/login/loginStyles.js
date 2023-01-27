import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  logoContainer: {
    height: "25%",
    marginTop: 110,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 200,
    width: "70%",
  },
  inputContainer: {
    width: "79%",
    marginTop: 25,
    flexDirection: "column"

  },
  logo: {
    width: 225,
    height:170
  },
  buttonContainer: {
    marginTop: 10,
  }
});
