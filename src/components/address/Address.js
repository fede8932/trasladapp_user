import { View, Text, Pressable } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import CustomInput from "../../commons/CustomInput.js";
import { addressStyles } from "./addressStyles.js";

const Address = function ( props ) {
  return (
    <View style={addressStyles.container}>
      <View style={addressStyles.formContainer}>
        <View style={addressStyles.inputContainer}>
          <CustomInput
            iconName="gps-fixed"
            iconType="MaterialIcons"
            iconSize={15}
            iconColor="#49D35E"
            placeholder="Ingresa el origen del viaje"
          />
          <Icon
            name="add"
            type="MaterialIcons"
            size={30}
            color="#FFFFFF"
            style={addressStyles.icon}
          />
        </View>
        <View style={addressStyles.inputContainer}>
          <CustomInput
            iconName="gps-fixed"
            iconType="MaterialIcons"
            iconSize={15}
            iconColor="#F0500B"
            placeholder="Ingresa el destino del viaje"
          />
          <Icon
            name="add"
            type="MaterialIcons"
            size={30}
            color="#C0C0C0"
            style={addressStyles.icon}
          />
        </View>
        <Pressable style={addressStyles.linkContainer}>
          <Icon name="location" type="Ionicons" size={25} color="#FFD502" />
          <Text style={addressStyles.link}>
            Seleccionar la ubicación en el mapa
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Address;
