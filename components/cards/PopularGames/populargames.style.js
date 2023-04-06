import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: 12,
    height: 140,
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
  },
  logoContainer: {
    width: 110,
    height: 100,
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
    marginTop: 8,
    width: "95%",
    textAlign: "center",
  },
  scoreBoardView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "95%",
  },
  logoImage: {
    width: "55%",
    height: "55%",
  },
  scoreBoardText: {
    color: COLORS.lightWhite,
    fontSize: 26,
    textAlign: "center",
    marginTop: -25,
  },
});

export default styles;
