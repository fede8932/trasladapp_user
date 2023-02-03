import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { StyleSheet } from "react-native";

const ButtonReserva = function (props) {
  const {
    text,
    styleContainer,
    styleButton,
    styleText,
    iconName,
    iconType,
    iconColor,
    iconSize,
    accion,
  } = props;
  return (
    <View style={styles[styleContainer]}>
      <TouchableOpacity onPress={() => accion()} style={styles[styleButton]}>
        <Icon
          name={iconName}
          type={iconType}
          size={iconSize}
          color={iconColor}
        />
        <Text style={styles[styleText]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonReserva;

const styles = StyleSheet.create({
  containerSmall: {
    width: "92%",
  },
  containerLonge: {
    width: "92%",
  },
  reserva: {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 9,
    flexDirection: "row",
    alignItems: "center",
    height: 37,
  },
  textoReserva: {
    marginHorizontal: 7,
  },
  confirmacion: {
    backgroundColor: "#FFD919",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
  },
  textoConfirmacion: {
    color: "#494949",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
});
