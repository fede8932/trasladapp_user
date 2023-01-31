import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { StyleSheet } from "react-native";

const CustomButton = function (props) {
    const { Press, iconName, iconSize, IconType, iconColor, styleContainer, styleButton } = props
  return (
    <View style={styles[styleContainer]}>
      <TouchableOpacity onPress={() => Press()} style={styles[styleButton]}>
        <Icon name={iconName} type={IconType} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

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
