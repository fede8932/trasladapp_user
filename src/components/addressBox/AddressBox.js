import { View, TouchableOpacity, Text } from "react-native";
import { addresBoxStyles } from "./addressBoxStyles";
import Icon from "react-native-dynamic-vector-icons";
import ModalApp from "../../commons/modalApp";
import { useState } from "react";

const AddressBox = function () {
  const [butonStyle, setButtonStyle] = useState("container");
  const boton = (props) => {
    const { mensaje, accion } = props;
    return (
      <TouchableOpacity
        style={addresBoxStyles.botonReserva}
        onPress={() => {
          setButtonStyle("containerNone");
          accion();
        }}
      >
        <Icon name="gps-fixed" type="MaterialIcons" size={25} color="#FFAE00" />
        <Text style={addresBoxStyles.textPress}>{mensaje}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={addresBoxStyles[butonStyle]}>
      <View style={addresBoxStyles.boxContainer}>
        <ModalApp OpenModal={boton} closeModal={setButtonStyle} />
        <TouchableOpacity
          style={addresBoxStyles.enlace}
          onPress={() => {
            console.log("press link");
          }}
        >
          <Icon name="enviroment" type="AntDesign" size={20} color="#FFAE00" />
          <Text style={addresBoxStyles.textLink}>
            Consultá por destinos preestablecidos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressBox;
