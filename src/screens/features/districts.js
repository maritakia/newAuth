import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../../components/customButton";

const Districts = (props) => {
  const handlePress = () => {
    props.navigation.navigate("candidates");
  };
  return (
    <View style={styles.screen}>
      <View style={{ marginTop: -250, marginBottom: 120 }}>
        <Text style={styles.txt}>DISTRICTS SCREEN</Text>
      </View>

      <CustomButton handlePress={handlePress} title="Candidates" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default Districts;
