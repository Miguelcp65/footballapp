import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants"

const styles = StyleSheet.create({
    container: {
        height: "auto",
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    matchstats: {
        fontSize: 22,
        color: "#fff",
        textAlign: "center",
        marginTop: 10,
    },
    statscontainer: {
        marginTop: 20,
    },
    statscontainerlines: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    statslinetext: {
        color: "#fff",
        fontSize: 16,
    },
    statsprogress: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 10,
        gap: 1,
    }
});

export default styles;
