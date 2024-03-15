import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import ContactForm from "../Components/Forms/ContactForm";
import { commonSmStyles } from "../CSS/commonSmStyles";

const ContactScreen = () => {

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);

  return (
    <View style={commonSmStyles.wrapper}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ContactForm
          errors={errors}
          formData={formData}
          setErrors={setErrors}
          setFormData={setFormData}
          setLoading={setLoading}
        />
      )}
    </View>
  );
};

export default ContactScreen;
