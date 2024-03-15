import React from "react";
import { Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { commonSmStyles } from "../CSS/commonSmStyles";

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <>
      <View style={commonSmStyles.containerBtn}>
        <Pressable 
          onPress={() => [navigation.navigate("Contact")]}
          style={commonSmStyles.btn}
        >
          <Text style={commonSmStyles.textBtn}>Contact</Text>
        </Pressable>
        <Pressable
          onPress={() => [navigation.navigate("Cart")]}
          style={commonSmStyles.btn}
        >
          <Text style={commonSmStyles.textBtn}>Cart</Text>
        </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;
