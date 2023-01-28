import { View, Text, Image } from "react-native";
import { perfilContainerStyles } from "./perfilContainerStyles";

const PerfilContainer = function () {
  return (
    <View style={perfilContainerStyles.container}>
      <Image
        style={perfilContainerStyles.photo}
        source={require("../../data/img/perfil.jpg")}
      />
      <View style={perfilContainerStyles.textContainer}>
        <Text style={perfilContainerStyles.nombre}>Lionel Andres Messi</Text>
        <Text style={perfilContainerStyles.categoria}>Pasajero VIP</Text>
      </View>
    </View>
  );
};

export default PerfilContainer;
