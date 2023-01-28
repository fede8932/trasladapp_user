import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { StyleSheet } from "react-native";

const ButtonNavigation = function (props) {
    const { Navigation } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Navigation()} style={styles.button}>
        <Icon name="menu" type="MaterialIcons" size={35} color="#C0C0C0" />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonNavigation;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        marginTop: 50,
        marginLeft: 10,
    },
    button: {
      backgroundColor: "#F3F3F3",
      borderRadius: 50,
      padding: 5,
    }
});
