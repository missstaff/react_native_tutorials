import React from "react";
import { Text, Pressable, View } from "react-native";

import { commonSmStyles } from "../CSS/commonSmStyles";

const CartScreen = ({ navigation }) => {
  return (
    <>
      <View style={commonSmStyles.containerBtn}>
        <Pressable
          onPress={() => [navigation.navigate("Home")]}
          style={commonSmStyles.btn}
        >
          <Text style={commonSmStyles.textBtn}>Home</Text>
        </Pressable>
        <Pressable 
          onPress={() => [navigation.navigate("Contact")]}
          style={commonSmStyles.btn}
        >
          <Text style={commonSmStyles.textBtn}>Contact Us</Text>
        </Pressable>
      </View>
    </>
  );
};

export default CartScreen;
