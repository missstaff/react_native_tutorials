import { StyleSheet } from "react-native";

export const contactScreenSmStyles = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
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
    btn: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "red",
        borderRadius: 50,
        margin: 50,
        padding: 10,
        width: "25%",
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        textAlign: "center",
    },
    containerBtn: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    h1: {
        fontSize: 28,
        marginVertical: 25,
        textAlign: "center",
    },
    textBtn: {
        fontSize: 12,
    },
});