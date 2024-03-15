import { StyleSheet } from "react-native";

export const commonFormSmStyles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 9.6,
        padding: 9.6,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
});