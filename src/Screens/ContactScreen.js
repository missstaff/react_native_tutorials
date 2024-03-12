import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Text, Pressable } from "react-native";
import { contactScreenSmStyles } from "../CSS/contactScreenSmStyles";


const ContactScreen = () => {

  const navigation = useNavigation();

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFocus = (field) => {
    setErrors({
      ...errors,
      [field]: "",
    });
  };
  

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleValidation = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Add more validation rules as needed

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    } else {
      console.log("Form data:", formData);
      return true;
    }
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      console.log("Form submitted");
      // #TODO: Send data to backend

      navigation.navigate("Home");
    }
  };

 
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={contactScreenSmStyles.wrapper}>
      <View style={contactScreenSmStyles.container}>
        <Text style={contactScreenSmStyles.label}>Name:</Text>
        <TextInput
          id="name"
          accessibilityActions={formData.name}
          aria-label="Name input field"
          role="text"
          accessibilityValue={{ text: formData.name }}
          inputMode="text"
          maxLength={75}
          onBlur={handleValidation}
          onChangeText={(value) => handleChange("name", value)}
          onFocus={() => handleFocus("name")}
          placeholder="Enter your name"
          style={contactScreenSmStyles.input}
          value={formData.name}
        />
        {errors.name && <Text style={contactScreenSmStyles.error}>{errors.name}</Text>}

        <Text style={contactScreenSmStyles.label}>Email:</Text>
        <TextInput
          id="email"
          accessibilityActions={formData.email}
          aria-label="Email input field"
          role="text"
          accessibilityValue={{ text: formData.email }}
          inputMode="text"
          onBlur={handleValidation}
          onChangeText={(value) => handleChange("email", value)}
          onFocus={() => handleFocus("email")}
          placeholder="Enter your email"
          style={contactScreenSmStyles.input}
          value={formData.email}
        />
        {errors.email && <Text style={contactScreenSmStyles.error}>{errors.email}</Text>}

        <Text style={contactScreenSmStyles.label}>Message:</Text>
        <TextInput
          id="message"
          accessibilityActions={formData.message}
          aria-label="Message input field"
          role="text"
          accessibilityValue={{ text: formData.message }}
          inputMode="text"
          style={[contactScreenSmStyles.input, { height: 100 }]}
          multiline
          value={formData.message}
          onChangeText={(value) => handleChange("message", value)}
          placeholder="Enter your message"
        />
        <Pressable onPress={handleSubmit} style={contactScreenSmStyles.btn}>
          <Text style={contactScreenSmStyles.textBtn}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ContactScreen;
