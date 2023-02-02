import { StyleSheet } from "react-native";

export const addressStyles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 5,
    alignItems: "center",
  },
  formContainer: {
    width:"95%",
    alignItems: "center",
    paddingLeft: "3%",
  },
  inputContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width:"100%",
    justifyContent: "flex-end",
  },
  icon: {
    marginLeft: 5,
  },
  linkContainer: {
    width: "100%",
    marginTop: 1,
    flexDirection: "row",
    paddingLeft: "5%"
  },
  link: {
    color:"#FFD502",
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
