import React from "react";
import { Text, Pressable, View } from "react-native";

import { styles } from "../CSS/styles";

const CartScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.containerBtn}>
        <Pressable
          onPress={() => [navigation.navigate("Home")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Home</Text>
        </Pressable>
        <Pressable 
          onPress={() => [navigation.navigate("Contact")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Contact Us</Text>
        </Pressable>
      </View>
    </>
  );
};

export default CartScreen;
