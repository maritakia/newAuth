import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/features/home";
import Districts from "../screens/features/districts";
import Candidates from "../screens/features/candidates";

const Stack = createNativeStackNavigator();

const MyNav = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="districts" component={Districts} />
      <Stack.Screen name="candidates" component={Candidates} />
    </Stack.Navigator>
  );
};

export default MyNav;
