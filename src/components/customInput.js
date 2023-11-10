import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CustomInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        style={styles.input}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",
    height: 40,
    justifyContent: 'center',
    backgroundColor: "white",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  input: {
    fontSize: 17,
  },
});

export default CustomInput;
