import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    marginBottom: 10,
  },
  infoBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: "25%",
    height: "100%"
  },
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },
  infoCompetition: {
    color: "#fff",
    fontSize: 14
  },
  title: {
    width: "60%",
    paddingTop: 10,
  },
  titleText: {
    color: "#fff",
    textAlign: "left",
    fontSize: 16,
  },
  topic: {
    bottom: 10,
    position: "absolute"
  },
  topicText: {
    fontSize: 15,
    color: COLORS.secondary
  },
  scoreBoardView: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  bookmark: {
    width: 25,
    height: 20,
    marginRight: 10,
    marginTop: 10,
  },
  bookmarkImage: {
    width: "100%",
    height: "100%"
  },
});

export default styles;
