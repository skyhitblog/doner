/** @format */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Constants, Languages } from "@common";
import { actions } from "@redux/ProductRedux";
import { connect } from "react-redux";
import styles from "./styles";

class ItemLayout extends PureComponent {
  static propTypes = {
    switchLayoutHomePage: PropTypes.func,
    close: PropTypes.func,
    layoutHome: PropTypes.any,
    layout: PropTypes.any,
    image: PropTypes.any,
    text: PropTypes.string,
  };

  changeLayout = (layout) => {
    this.props.switchLayoutHomePage(layout);
    this.props.close();
  };

  render() {
    const { layoutHome, layout, image, text } = this.props;

    let displayMode = layoutHome;

    if (typeof displayMode === "undefined") {
      displayMode = Constants.Layout.advance;
    }

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.rowView}
        onPress={() => this.changeLayout(layout)}>
        <View style={[styles.row, displayMode === layout && styles.rowActive]}>
          <Image
            source={image}
            style={[
              styles.imageIcon,
              displayMode === layout && { tintColor: "#fff" },
            ]}
          />
          <Text
            style={[
              styles.text,
              displayMode === layout && styles.imageIconActive,
            ]}>
            {" "}
            {Languages[text]}{" "}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = ({ products }) => ({ layoutHome: products.layoutHome });
const switchLayoutHomePage = actions.switchLayoutHomePage;
export default connect(
  mapStateToProps,
  { switchLayoutHomePage }
)(ItemLayout);
