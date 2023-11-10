import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";

const Register = (props) => {
  const handleSignUp = () => {
    props.navigation.navigate("temp");
  };
  const handleSignIn = () => {
    props.navigation.navigate("temp");
  };

  return (
    <View style={styles.screen}>
      <View style={{ marginTop: -40, marginBottom: 120 }}>
        <Text style={styles.txt}>Sign Up</Text>
      </View>
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <View>
        <CustomButton handlePress={handleSignUp} title="Register" />
      </View>
      <View style={{ marginVertical: 8 }}>
        <CustomButton handlePress={handleSignIn} title="Sigin in" />
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

export default Register;
