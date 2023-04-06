import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: COLORS.tertiary,
    borderRadius: 16,
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
    borderRadius: 16,
  },
  title: {
    width: "60%",
    paddingTop: 10,
  },
  titleText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
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
