import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <View style={styles.userInputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.userInput}
          autoComplete={"email"}
        />
      </View>

      <View style={styles.userInputContainer}>
        <TextInput
          placeholder="Password"
          value={passwd}
          onChangeText={setPasswd}
          style={styles.userInput}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.txtRegister}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLoginGoogle}>
        <Image style={styles.googleLogo} source={require('../assets/google-logo.png')} />
        <Text style={styles.txtLoginGoogle}>Login With Google</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    top: 1,
    height: "60%",
  },

  logo: {
    resizeMode: "contain",
    width: "90%",
    height: "50%",
    marginBottom: 20,
  },

  userInput: {
    width: "80%",
    height: 40,
  },

  userInputContainer: {
    width: "90%",
    borderWidth: 1,
    marginBottom: 10,
    overflow: "hidden",
    borderRadius: 100,
    padding: 3,
  },

  btnLogin: {
    backgroundColor: "#0275d8",
    width: 120,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 10,
  },

  txtLogin: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },

  btnLoginGoogle: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 5
  },

  txtLoginGoogle: {
    fontSize: 18,
    fontWeight: "600",
  },

  googleLogo: {
    width: 35,
    height: 35,
    marginRight: 20
  },
  
  btnRegister: {
    marginBottom: 10
  },

  txtRegister: {
    color: 'blue'
  }
});
