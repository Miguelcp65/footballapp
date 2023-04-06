import { StyleSheet } from "react-native";
import { FONT, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
  },
  headerBtn: {
    fontSize: 16,
    color: COLORS.secondary,
  },
  cardsContainer: {
    marginTop: 10,
  },
});

export default styles;
