import React from "react";
import { Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../CSS/styles";

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.containerBtn}>
        <Pressable 
          onPress={() => [navigation.navigate("Contact")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Contact</Text>
        </Pressable>
        <Pressable
          onPress={() => [navigation.navigate("Cart")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Cart</Text>
        </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;
