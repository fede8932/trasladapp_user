import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { StyleSheet } from "react-native";

const ButtonReserva = function (props) {
    const { text, styleContainer, iconName, iconType, iconColor, iconSize } = props
  return (
    <View style={styles[styleContainer]}>
      <TouchableOpacity onPress={() => {console.log(props)}} style={styles.button}>
        <Icon name={iconName} type={iconType} size={iconSize} color={iconColor} />
        <Text style={styles.texto}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonReserva;

const styles = StyleSheet.create({
    containerSmall: {
      width: "45%",
    },
    containerLonge: {
      width: "45%",
    },
    button: {
      backgroundColor: "#F3F3F3",
      borderRadius: 10,
      paddingHorizontal:9,
      flexDirection: "row",
      alignItems: "center",
      height: 37,
    },
    texto: {
      marginHorizontal: 7,
    }
});
