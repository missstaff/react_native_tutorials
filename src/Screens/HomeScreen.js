import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../CSS/styles";

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.h1}>HomeScreen</Text>
      <View style={styles.containerBtn}>
        <TouchableOpacity 
          onPress={() => [navigation.navigate("Contact")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => [navigation.navigate("Cart")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
