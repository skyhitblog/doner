/** @format */

// @flow
/**
 * Created by matrix on 19/02/2017.
 */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Styles, Images, Config, Languages, Constants } from "@common";
import { Timer, toast, BlockTimer } from "@app/Omni";
import {
  Empty,
  CategorySlider,
  PostBanner,
  LogoSpinner,
  CategoryCarousel,
} from "@components";
import Parallax from "react-native-parallax";
import styles from "./styles";
import Icon from "@expo/vector-icons/FontAwesome";

class CategoriesScreen extends React.PureComponent {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  changeLayout = () => this.props.setActiveLayout(!this.props.selectedLayout);

  componentWillReceiveProps(props) {
    const { error } = props.categories;
    if (error) toast(error);
  }

  renderLayoutButton = () => {
    const hitSlop = { top: 20, right: 20, left: 20, bottom: 20 };
    return (
      <TouchableOpacity
        style={styles.fab}
        onPress={this.changeLayout}
        activeOpacity={1}
        hitSlop={hitSlop}>
        <Icon.Button
          onPress={this.changeLayout}
          color="#fff"
          iconStyle={{ backgroundColor: "transparent", left: 5 }}
          borderRadius={50}
          backgroundColor="transparent"
          name="exchange"
          size={14}
        />
      </TouchableOpacity>
    );
  };

  onRowClickHandle = (category) => {
    const { setSelectedCategory, onViewCategory } = this.props;
    BlockTimer.execute(() => {
      setSelectedCategory({
        ...category,
        mainCategory: category,
      });
      onViewCategory({ mainCategory: category });
    }, 500);
  };

  render() {
    const { categories, selectedLayout } = this.props;

    if (categories.error) {
      return <Empty text={categories.error} />;
    }

    if (categories.isFetching) {
      return <LogoSpinner fullStretch />;
    }

    // if (selectedLayout !== Config.CategoryListView) {
    //   return <View>
    //     <CategoryCarousel onViewCategory={this.onRowClickHandle}/>
    //   </View>
    // }

    const mainCategories = categories.list.filter(
      (category) => category.parent === 0
    );
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Parallax.ScrollView style={styles.fill}>
          {mainCategories.map((category, index) => {
            const textStyle =
              index % 2 == 0
                ? { marginRight: 30, textAlign: "right" }
                : { marginLeft: 30, textAlign: "left" };
            const categoryImage =
              category.image !== null
                ? { uri: category.image.src }
                : Images.categoryPlaceholder;

            return (
              <Parallax.Image
                key={index}
                onPress={() => this.onRowClickHandle(category)}
                style={styles.image}
                overlayStyle={styles.overlay}
                containerStyle={styles.containerStyle}
                parallaxFactor={0.4}
                source={categoryImage}>
                <View
                  style={[
                    styles.dim_layout,
                    index % 2 == 0 && { alignItems: "flex-end" },
                    index % 2 != 0 && { alignItems: "flex-start" },
                  ]}>
                  <Text style={[styles.mainCategoryText, { ...textStyle }]}>
                    {category.name}
                  </Text>
                  <Text style={[styles.numberOfProductsText, { ...textStyle }]}>
                    {`${category.count} products`}
                  </Text>
                </View>
              </Parallax.Image>
            );
          })}
        </Parallax.ScrollView>
        {/* {this.renderLayoutButton()}*/}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    netInfo: state.netInfo,
    user: state.user,
    selectedLayout: state.categories.selectedLayout,
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { netInfo } = stateProps;
  const { dispatch } = dispatchProps;
  const { actions } = require("@redux/CategoryRedux");

  return {
    ...ownProps,
    ...stateProps,
    fetchCategories: () => {
      if (!netInfo.isConnected) return toast(Languages.noConnection);
      actions.fetchCategories(dispatch);
    },
    setActiveLayout: (value) => dispatch(actions.setActiveLayout(value)),
    setSelectedCategory: (category) =>
      dispatch(actions.setSelectedCategory(category)),
  };
}

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(CategoriesScreen);
