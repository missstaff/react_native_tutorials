import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, TextInput, View } from "react-native";
import {
  handleChange,
  handleEmailValidation,
  handleMessageValidation,
  handleNameValidation,
} from "../../Utilities/formUtilities";
import { postRequest } from "../../Utilities/apiUtilities";
import { commonFormSmStyles } from "../../CSS/Forms/commonFormSmStyles";
import { commonSmStyles } from "../../CSS/commonSmStyles";

const ContactForm = ({
  errors,
  formData,
  setErrors,
  setFormData,
  setLoading,
}) => {
  const navigation = useNavigation();
  const handleFormValidation = () => {
    const nameValidation = handleNameValidation(formData, setErrors);
    const emailValidation = handleEmailValidation(formData, setErrors);
    const messageValidation = handleMessageValidation(formData, setErrors);
    if (!nameValidation || !emailValidation || !messageValidation) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!handleFormValidation()) {
      return;
    }
    setLoading(true);
    await postRequest(formData, "contact", navigation, setLoading);
  };

  return (
    <View style={commonFormSmStyles.container}>
      <Text style={commonFormSmStyles.label}>Name:</Text>
      <TextInput
        id="name"
        accessibilityActions={formData.name}
        accessibilityLabel="Name"
        accessibilityValue={{ text: formData.name }}
        aria-label="Name input field"
        inputMode="text"
        maxLength={75}
        onBlur={() => handleNameValidation(formData, setErrors)}
        onChangeText={(value) =>
          handleChange("name", setFormData, formData, value)
        }
        onFocus={() => handleChange("name", setErrors, errors, "")}
        placeholder="Enter your name"
        role="text"
        style={commonFormSmStyles.input}
        value={formData.name}
      />
      {errors.name && (
        <Text style={commonFormSmStyles.error}>{errors.name}</Text>
      )}

      <Text style={commonFormSmStyles.label}>Email:</Text>
      <TextInput
        id="email"
        accessibilityActions={formData.email}
        accessibilityLabel="Email"
        accessibilityValue={{ text: formData.email }}
        aria-label="Email input field"
        inputMode="text"
        onBlur={() => handleEmailValidation(formData, setErrors)}
        onChangeText={(value) =>
          handleChange("email", setFormData, formData, value)
        }
        onFocus={() => handleChange("email", setErrors, errors, "")}
        placeholder="Enter your email"
        role="text"
        style={commonFormSmStyles.input}
        value={formData.email}
      />
      {errors.email && (
        <Text style={commonFormSmStyles.error}>{errors.email}</Text>
      )}

      <Text style={commonFormSmStyles.label}>Message:</Text>
      <TextInput
        id="message"
        accessibilityActions={formData.message}
        accessibilityLabel="Message"
        accessibilityValue={{ text: formData.message }}
        aria-label="Message input field"
        inputMode="text"
        multiline
        onBlur={() => handleMessageValidation(formData, setErrors)}
        onChangeText={(value) =>
          handleChange("message", setFormData, formData, value)
        }
        onFocus={() => handleChange("message", setErrors, errors, "")}
        role="text"
        placeholder="Enter your message"
        style={[commonFormSmStyles.input, { height: 100 }]}
        value={formData.message}
      />
      {errors.message && (
        <Text style={commonFormSmStyles.error}>{errors.message}</Text>
      )}

      <Pressable onPress={handleSubmit} style={commonSmStyles.btn}>
        <Text style={commonFormSmStyles.textBtn}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default ContactForm;
