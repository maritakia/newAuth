import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../../components/customButton";

const Candidates = (props) => {
  const handlePress = () => {
    props.navigation.navigate("home");
  };
  return (
    <View style={styles.screen}>
      <View style={{ marginTop: -250, marginBottom: 120 }}>
        <Text style={styles.txt}>CANDIDATES SCREEN</Text>
      </View>

      <CustomButton handlePress={handlePress} title="Candidates" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default Candidates;
