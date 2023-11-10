import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";
import { FIREBASE_AUTH } from "../../../firebase";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const auth = FIREBASE_AUTH;

  const handleSignIn = () => {
    props.navigation.navigate("temp");
  };

  const handleSignUp = () => {
    props.navigation.navigate("register");
  };

  return (
    <View style={styles.screen}>
      <View style={{ marginTop: -40, marginBottom: 120 }}>
        <Text style={styles.txt}>Log In</Text>
      </View>

      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <CustomInput placeholder="Password" />

      <View style={{ marginVertical: 8 }}>
        <CustomButton handlePress={handleSignIn} title="Sigin in" />
      </View>
      <View style={{ marginVertical: 8 }}>
        <CustomButton handlePress={handleSignUp} title="Register" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Login;
