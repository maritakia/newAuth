import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const Temp = (props) => {
  return (
    <View style={styles.screen}>
      <View style={{ marginTop: -250, marginBottom: 120 }}>
        <Text style={styles.txt}>You are signed in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default Temp;
