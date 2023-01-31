import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const CustomSeperator = function (props) {
  const { styleContainer, styleSeparator } = props;
  return (
    <View style={styles[styleContainer]}>
      <View style={styles[styleSeparator]} />
    </View>
  );
};

export default CustomSeperator;

const styles = StyleSheet.create({
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
  sheetContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 2,
  },
  sheetSeparator: {
    flex: 1,
    height: 4,
    backgroundColor: "#F5F5F5",
    width: "80%",
  },
});
