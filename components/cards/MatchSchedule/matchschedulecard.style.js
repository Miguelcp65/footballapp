import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    height: 80,
    backgroundColor: COLORS.tertiary,
    borderRadius: 16,
    marginBottom: 10,
  },
  logoContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  gameInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoCompetition: {
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 15
  },
  teamName: {
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 16,
    width: "20%",
    margin: 7,
    textAlign: "center"
  },
  scoreBoardView: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  hour: {
    width: "20%",
    alignItems: "center",
  },
  hourText: {
    color: COLORS.lightWhite,
    fontSize: 18,
  },
});

export default styles;
