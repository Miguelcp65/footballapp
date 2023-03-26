import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: SIZES.small,
    height: 80,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
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
    color: "#fff",
    fontSize: 15
  },
  teamName: {
    color: "#fff",
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
  infoContainer: {
    marginTop: SIZES.large,
  },
  hour: {
    width: "20%",
    alignItems: "center",
  },
  hourText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default styles;
