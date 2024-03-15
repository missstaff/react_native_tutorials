import Toast from "react-native-toast-message";

const serverBaseUrl = process.env.SERVER_BASE_URL;

export const postRequest = async (data, endpoint, navigation, setLoading) => {
  try {
    const response = await fetch(`${serverBaseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(
        `Failed to complete request: ${response.status}\n${response.statusText}`
      );
      Toast.show({
        type: "error",
        text1: `Failed to complete request: ${response.status}\n${response.statusText}`,
      });
      return;
    }

    const responseData = await response.json();
    if (responseData.message) {
      Toast.show({
        type: "success",
        text1: responseData.message,
      });
    } else {
      console.error('No message received from the server');
      Toast.show({
        type: "error",
        text1: "An unexpected error occurred while processing the request",
      });
    }
    navigation.navigate("Home");
  } catch (error) {
    console.error(`Server error: ${error.message}\n${error.stack}`);
    Toast.show({
      type: "error",
      text1: "A server error occurred while processing the request",
    });
  } finally {
    setLoading(false);
  }
};
