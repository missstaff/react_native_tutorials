import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "../CSS/styles";

const ContactScreen = (props) => {

  
  return (
    <View>
      <Text style={styles.h1}>ContactScreen</Text>
      <View style={styles.containerBtn}>
        <TouchableOpacity 
          onPress={() => [props.navigation.navigate("Home")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => [props.navigation.navigate("Cart")]}
          style={styles.btn}
          >
          <Text style={styles.textBtn}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactScreen;
