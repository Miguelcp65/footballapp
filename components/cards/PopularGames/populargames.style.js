import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.small,
    height: 140,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
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
    color: "#fff",
    fontSize: 15
  },
  teamName: {
    color: "#fff",
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
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    marginTop: -25,
  },
});

export default styles;
