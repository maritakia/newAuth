import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.handlePress}>
        <Text style={styles.txt}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  txt: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 15,
  },
});

export default CustomButton;
