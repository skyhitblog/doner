/**
 * Created by matrix on 19/02/2017.
 *
 * @format
 */

import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";
import { Config, Device, Styles } from "@common";
import { MyToast, MyNetInfo } from "@containers";
import { AppIntro, ModalReview } from "@components";
import Navigation from "@navigation";
import { connect } from "react-redux";

import MenuSide from "@components/LeftMenu/MenuOverlay";
// import MenuSide from '@components/LeftMenu/MenuSmall';
// import MenuSide from '@components/LeftMenu/MenuWide';

import { toast, closeDrawer } from "./Omni";

class Router extends React.PureComponent {
  static propTypes = {
    introStatus: PropTypes.bool,
  };

  goToScreen = (routeName, params) => {
    if (!this.navigator) {
      return toast("Cannot navigate");
    }
    this.navigator.dispatch({ type: "Navigation/NAVIGATE", routeName, params });
    closeDrawer();
  };

  render() {
    if (!this.props.introStatus) {
      return <AppIntro />;
    }

    return (
      <MenuSide
        goToScreen={this.goToScreen}
        routes={
          <View style={Styles.app}>
            <StatusBar
              hidden={Device.isIphoneX ? false : !Config.showStatusBar}
            />
            <MyToast />
            <Navigation ref={(comp) => (this.navigator = comp)} />
            <ModalReview />
            <MyNetInfo />
          </View>
        }
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  introStatus: user.finishIntro,
});
export default connect(mapStateToProps)(Router);
