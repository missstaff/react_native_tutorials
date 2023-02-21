import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "../CSS/styles";

const CartScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.h1}>CartScreen</Text>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          onPress={() => [navigation.navigate("Home")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => [navigation.navigate("Contact")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
