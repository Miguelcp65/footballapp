import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    height: "auto",
    backgroundColor: COLORS.tertiary,
    borderRadius: 16,
    marginBottom: 10,
    padding: 15,
  },
  tableheader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  tablestandings: {
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
    marginBottom: 15
  },
  tablebodycontent: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  tablebody: {
    marginTop: 12
  },
  logoImage: {
    width: "20%",
    height: "100%",
    alignSelf: "flex-start",
    marginRight: 3
  },
  tablecolumn: {
    width: "12%",
    textAlign: "right",
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 18,
  },
  tablecolumn1: {
    width: "52%",
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 18,
    paddingLeft: 5
  },
  tablecolumn5: {
    width: "12%",
    textAlign: "right",
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 18,
    paddingRight: 2
  },
  tablecolumnbody: {
    width: "12%",
    textAlign: "right",
    color: COLORS.lightWhite,
    fontSize: 17,
    alignSelf: "center"
  },
  tablecolumnbody1: {
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 17,
    alignSelf: "center"
  },
  tablecolumnbodyview: {
    width: "52%",
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  }
});

export default styles;
