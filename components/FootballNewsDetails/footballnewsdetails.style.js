import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.lightWhite,
        fontFamily: FONT.medium,
    },
    topic: {
        fontSize: 20,
        color: COLORS.secondary,
        marginTop: 5
    },
    date: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row"
    },
    datetext: {
        color: "grey",
        marginRight: 5,
        fontSize: 16
    },
    image: {
        width: "100%",
        height: 230,
        borderRadius: 10,
        marginTop: 20
    },
    description: {
        marginTop: 20,
        fontSize: 20,
        color: COLORS.lightWhite,
        fontFamily: FONT.medium,
    }
});

export default styles;