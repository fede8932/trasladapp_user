import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const LinkFavoritos = function (props) {
  const { text, iconName, iconType, iconColor, iconSize } = props
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {console.log(text)}} style={styles.button}>
        <Text style={styles.texto}>{text}</Text>
        <Icon name={iconName} type={iconType} size={iconSize} color={iconColor} />
      </Pressable>
    </View>
  );
};

export default LinkFavoritos;

const styles = StyleSheet.create({
    container: {
      width: "45%",
    },
    button: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 37,
    },
    texto: {
      marginHorizontal: 7,
      paddingBottom: 2,
      color: "#7A7A7A",
    }
});
