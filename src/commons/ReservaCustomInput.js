import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const ReservaCustomInput = function (props) {
  const [border, setBorder] = useState("inputContainer")
  return (
    <View style={styles.container}>
      <View style={styles[border]}>
        <Icon
          name={props.icon}
          type={props.iconType}
          size={20}
          color="#C0C0C0"
        />
        <TextInput
          style={styles.input}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor="#C0C0C0"
          onPressIn={()=>{
            setBorder("inputContainerActive")
          }}
          onEndEditing={() => {
            setBorder("inputContainer")
          }}
          {...props}
        />
      </View>
    </View>
  );
};

export default ReservaCustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    backgroundColor: "#FFF7A7",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 7,
    borderRadius: 5,
  },
  inputContainerActive: {
    backgroundColor: "#FFFFFF",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 7,
    borderRadius: 5,
    
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  label: {
    marginBottom: 8,
    marginLeft: 8,
    color: "#535450",
  }
});
