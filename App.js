/** @format */

import React from "react";
import { Image } from "react-native";
import { Images, Config } from "@common";
import { AppLoading, Asset, Font } from "@expo";
import Reactotron from "reactotron-react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { WooWorker } from "api-ecommerce";
import store from "@store/configureStore";
import RootRouter from "./src/Router";
import "./ReactotronConfig";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = { appIsReady: false };

  componentWillMount() {
    console.ignoredYellowBox = [
      "Warning: View.propTypes",
      "Warning: BackAndroid",
    ];
    if (__DEV__) {
      Reactotron.connect();
      Reactotron.clear();
    }
  }

  componentDidMount() {
    WooWorker.init({
      url: Config.WooCommerce.url,
      consumerKey: Config.WooCommerce.consumerKey,
      consumerSecret: Config.WooCommerce.consumerSecret,
      wp_api: true,
      version: "wc/v2",
      queryStringAuth: true,
    });
  }

  loadAssets = async () => {
    const fontAssets = cacheFonts([
      { OpenSans: require("@assets/fonts/OpenSans-Regular.ttf") },
      { Baloo: require("@assets/fonts/Baloo-Regular.ttf") },
      { Entypo: require("@expo/vector-icons/fonts/Entypo.ttf") },
      {
        "Material Icons": require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
      },
      {
        MaterialCommunityIcons: require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
      },
      {
        "Material Design Icons": require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
      },
      { FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf") },
      {
        "simple-line-icons": require("@expo/vector-icons/fonts/SimpleLineIcons.ttf"),
      },
      { Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf") },
    ]);

    const imageAssets = cacheImages([
      Images.icons.iconCard,
      Images.icons.iconColumn,
      Images.icons.iconLeft,
      Images.icons.iconRight,
      Images.icons.iconThree,
      Images.icons.iconAdvance,
      Images.icons.iconHorizal,
      Images.icons.back,
      Images.icons.home,
      Images.IconSwitch,
      Images.IconFilter,
      Images.IconList,
      Images.IconGrid,
      Images.IconCard,
      Images.IconSearch,
      Images.IconHome,
      Images.IconCategory,
      Images.IconHeart,
      Images.IconOrder,
      Images.IconCart,
    ]);

    await Promise.all([...fontAssets, ...imageAssets]);
  };

  render() {
    const persistor = persistStore(store);

    if (!this.state.appIsReady) {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={() => this.setState({ appIsReady: true })}
        />
      );
    }

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootRouter />
        </PersistGate>
      </Provider>
    );
  }
}
