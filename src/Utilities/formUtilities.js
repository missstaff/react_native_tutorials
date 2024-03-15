import { validateEmail } from "../../common/utilities";
export const handleChange = (field, setStateFunction, state, value) => {
  setStateFunction({
    ...state,
    [field]: value,
  });
};

export const handleEmailValidation = (formData, setStateFunction) => {
  const { email } = formData;
  if (!email) {
    setStateFunction((prevErrors) => ({
      ...prevErrors,
      email: "Email is required",
    }));
  } else if (!validateEmail(email)) {
    setStateFunction((prevErrors) => ({
      ...prevErrors,
      email: "Invalid email format",
    }));
    return false;
  } else {
    return true;
  }
};

export const handleMessageValidation = (formData, setStateFunction) => {
  const { message } = formData;
  if (!message) {
    setStateFunction((prevErrors) => ({
      ...prevErrors,
      message: "Message is required",
    }));
    return false;
  } else {
    return true;
  }
};

export const handleNameValidation = (formData, setStateFunction) => {
  if (!formData.name) {
    setStateFunction((prevErrors) => ({
      ...prevErrors,
      name: "Name is required",
    }));
    return false;
  } else {
    return true;
  }
};
