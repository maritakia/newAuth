import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/account/login";
import Register from "../screens/account/register";
import Temp from "../screens/account/temp";

const Stack = createNativeStackNavigator();

const MyAcc = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="temp" component={Temp} />
    </Stack.Navigator>
  );
};

export default MyAcc;
