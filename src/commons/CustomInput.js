import { useState } from "react";
import { View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const CustomInput = function (props) {
  const {
    iconName,
    iconType,
    iconSize,
    iconColor,
    placeholder,
    onChangeText,
    value,
  } = props;
  const [border, setBorder] = useState("inputContainer");
  return (
    <View style={styles.container}>
      <View style={styles[border]}>
        <Icon
          name={iconName}
          type={iconType}
          size={iconSize}
          color={iconColor}
        />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#C0C0C0"
          onPressIn={() => {
            setBorder("inputContainerActive");
          }}
          onEndEditing={() => {
            setBorder("inputContainer");
          }}
          {...props}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "86%",
  },
  inputContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#F3F3F3",
    backgroundColor: "#F3F3F3",
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 7,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  inputContainerActive: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#FFD502",
    backgroundColor: "#FFFFFF",
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 7,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  input: {
    width: "95%",
    height: 40,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});
