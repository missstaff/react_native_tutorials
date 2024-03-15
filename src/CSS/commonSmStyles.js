import { StyleSheet } from "react-native";

export const commonSmStyles = StyleSheet.create({
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
    wrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
});