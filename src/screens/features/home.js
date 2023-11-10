import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";

const Home = (props) => {
  const handlePress = () => {
    props.navigation.navigate("districts");
  };

  return (
    <View style={styles.screen}>
      <View style={{ marginTop: -250, marginBottom: 120 }}>
        <Text style={styles.txt}>HOME SCREEN</Text>
      </View>
      <CustomButton handlePress={handlePress} title="Districts" />
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

export default Home;
