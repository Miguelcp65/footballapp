import { StyleSheet } from "react-native";
import { FONT, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        height: 240,
    },
    matchcontainer: {
        height: "auto",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "grey",
        borderBottomWidth: 0.5,
    },
    headertext: {
        fontSize: 16,
        color: COLORS.lightWhite,
        fontFamily: FONT.medium,
        padding: 10
    },
    goals: {
        marginTop: 10,
        height: "auto",
        maxHeight: 80,
        overflow: "hidden",
        width: "90%"
    },
    scoreBoardView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    logoContainer: {
        width: 170,
        height: 90,
        alignItems: "center",
    },
    logoImage: {
        height: "80%",
        width: "50%",
    },
    teamName: {
        color: COLORS.lightWhite,
        fontFamily: FONT.medium,
        fontSize: 20,
        marginTop: 8,
        width: "100%",
        textAlign: "center",
    },

    scoreBoardText: {
        color: COLORS.lightWhite,
        fontFamily: FONT.medium,
        fontSize: 34,
        textAlign: "center",
        marginTop: -25,
    },
});

export default styles;
