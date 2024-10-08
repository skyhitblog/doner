/** @format */

import { StyleSheet, Dimensions } from "react-native";
import { Constants } from "@common";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  flatWrap: {
    flex: 1,
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 15,
  },
  flatlist: {
    flexDirection: "row",
  },
  flatVertical: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FFF",
  },
  isListing: {
    marginTop: 60,
  },
  more: {
    width,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  spinView: {
    width,
    backgroundColor: "#fff",
    flex: 1,
    height,
    paddingTop: 20,
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 9999,
    backgroundColor: "transparent",
    // borderBottomColor: 'none',
    // borderBottomWidth: 1,
    height: 40,
    justifyContent: "center",
  },
  contentContainer: {
    paddingTop: 40,
  },
  title: {
    color: "#333333",
  },
  row: {
    height: 300,
    width: null,
    marginBottom: 1,
    padding: 16,
    backgroundColor: "transparent",
  },
  rowText: {
    color: "white",
    fontSize: 18,
  },
  transparentTop: {
    backgroundColor: "transparent",
  },
  // RenderHedearListView
  header: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 18,
  },
  headerLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 15,
  },
  headerRight: {
    flex: 1 / 3,
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 0,
    flexDirection: "row",
  },
  headerRightText: {
    fontSize: 11,
    marginRight: 0,
    marginTop: 0,
    color: "#666",
    fontFamily: Constants.fontFamily,
  },
  icon: {
    marginRight: 8,
    marginTop: 2,
    backgroundColor: "transparent",
  },
  tagHeader: {
    fontSize: 16,
    color: "#666",
    letterSpacing: 2,
    fontFamily: Constants.fontHeader,
  },
});
