import { View, SafeAreaView, Image, Button } from "react-native";
import { loginStyles } from "./loginStyles";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "../../commons/CustomInput";
import { useState } from "react";

const Login = function () {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#ffe700", "#fff57b"]}
      style={loginStyles.container}
      end={{ x: 1, y: 0.2 }}
    >
      <View style={loginStyles.logoContainer}>
        <Image
          style={loginStyles.logo}
          source={require("../../assets/logo/logo.png")}
        />
      </View>
      <View style={loginStyles.formContainer}>
        <CustomInput
          label="Usuario"
          placeholder="juancito@imail.com"
          icon="mail"
          iconType="MaterialIcons"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <CustomInput
          label="Contraseña"
          placeholder="******"
          icon="people"
          iconType="MaterialIcons"
          value={pass}
          onChangeText={(pass) => setPass(pass)}
          secureTextEntry={true}
        />
      </View>
      <View style={loginStyles.buttonContainer}>
        <Button
          onPress={() => {
            console.log("press");
          }}
          title="Iniciar sesión"
          color="#535450"
          style={loginStyles.boton}
        />
      </View>
    </LinearGradient>
  );
};

export default Login;
