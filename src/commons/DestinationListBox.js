import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const DestinationListBox = function (props) {
  const { titulo, direccion } = props;
  return (
    <Pressable style={styles.container} onPress={()=>{console.log({titulo})}}>
      <Icon name="location-pin" type="Entypo" size={38} color="#7A7A7A" />
      <View style={styles.textos}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.direccion}>{direccion}</Text>
      </View>
    </Pressable>
  );
};

export default DestinationListBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 12,
  },
  textos: {
    width: "100%",
    marginHorizontal: 15,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "600",
    color: "#484848",
  },
  direccion: {
    fontSize: 10,
    color: "#7A7A7A",
  },
});
