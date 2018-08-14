/** @format */

import Images from "./Images";
import Constants from "./Constants";
import Icons from "./Icons";

export default {

  WooCommerce: {
    url: "http://139.59.71.36/",
    consumerKey: "ck_91e22c0f3c9ad8191ec573a4360f3f2a2b54b3ab",
    consumerSecret: "cs_3661a6e7275b4e89d96b3814548d371c92606cdd",
  },

  ProductSize: {
    enable: false,
    CatalogImages: { width: 300, height: 360 },
    SingleProductImage: { width: 600, height: 720 },
    ProductThumbnails: { width: 180, height: 216 },
  },

  HorizonLayout: [
    { tag: 19, paging: true, layout: Constants.Layout.miniBanner },
    {
      name: "Horticulture",
      category: 17,
      layout: Constants.Layout.threeColumn,
    },
    {
      name: "Handicrafts",
      category: 16,
      layout: Constants.Layout.twoColumn,
    },
    {
      name: "Handlooms",
      category: 18,
      layout: Constants.Layout.twoColumnHigh,
    },
  ],

  /**
     step 3: Config image for the Payment Gateway
     Notes:
     - Only the image list here will be shown on the app but it should match with the key id from the WooCommerce Website config
     - It's flexible way to control list of your payment as well
     Ex. if you would like to show only cod then just put one cod image in the list
     * */
  Payments: {
    bacs: require("@images/payment_logo/PayPal.png"),
    cod: require("@images/payment_logo/cash_on_delivery.png"),
    paypal: require("@images/payment_logo/PayPal.png"),
    stripe: require("@images/payment_logo/stripe.png"),
  },

  /**
     Step 4: Advance config:
     - showShipping: option to show the list of shipping method
     - showStatusBar: option to show the status bar, it always show iPhoneX
     - LogoImage: The header logo
     - LogoWithText: The Logo use for sign up form
     - LogoLoading: The loading icon logo
     - appFacebookId: The app facebook ID, use for Facebook login
     - CustomPages: Update the custom page which can be shown from the left side bar (Components/Drawer/index.js)
     - WebPages: This could be the id of your blog post or the full URL which point to any Webpage (responsive mobile is required on the web page)
     - CategoryListView: default layout for category (true/false)
     - intro: The on boarding intro slider for your app
     - menu: config for left menu side items (isMultiChild: This is new feature from 3.4.5 that show the sub products categories)
     * */
  shipping: {
    visible: true,
    time: {
      // free_shipping: "4 - 7 Days",
      // flat_rate: "1 - 4 Days",
      // local_pickup: "1 - 4 Days",
    },
  },
  showStatusBar: true,
  LogoImage: require("@images/new_logo.png"),
  LogoWithText: require("@images/logo_with_text.png"),
  LogoLoading: require("@images/logo.png"),

  showAdmobAds: false,
  AdMob: {
    deviceID: "pub-2101182411274198",
    unitID: "ca-app-pub-2101182411274198/4100506392",
    unitInterstitial: "ca-app-pub-2101182411274198/8930161243",
    isShowInterstital: true,
  },
  appFacebookId: "422035778152242",
  CustomPages: { contact_id: 10941 },
  WebPages: { marketing: "http://github.com" },
  CategoryListView: true,
  intro: [
    {
      key: "page1",
      title: "Lorem Ipsum Dolor Sit Ame",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "ios-basket-outline",
      colors: ["#0FF0B3", "#036ED9"],
    },
    {
      key: "page2",
      title: "Consectetur Adipisicing Elit Sed Do Eiusmod",
      text:
        "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      icon: "ios-card-outline",
      colors: ["#13f1fc", "#0470dc"],
    },
    {
      key: "page3",
      title: "Adipisicing Elit Sed Do",
      text: "Usage Consectetur adipisicing elit, sed do eiusmod",
      icon: "ios-finger-print-outline",
      colors: ["#b1ea4d", "#459522"],
    },
  ],

  /**
   * Config Menu Side Drawer
   * @param goToScreen 3 Params (routeName, params, isReset = false)
   * BUG: Language can not change when set default value in Config.js ==> pass string to change Languages
   */
  menu: {
    // has child categories
    isMultiChild: true,
    // Unlogged
    listMenuUnlogged: [
      {
        text: "Login",
        routeName: "LoginScreen",
        params: {
          isLogout: false,
        },
        icon: Icons.MaterialCommunityIcons.SignIn,
      },
    ],
    // user logged in
    listMenuLogged: [
      {
        text: "Logout",
        routeName: "LoginScreen",
        params: {
          isLogout: true,
        },
        icon: Icons.MaterialCommunityIcons.SignOut,
      },
    ],
    // Default List
    listMenu: [
      {
        text: "Shop",
        routeName: "Default",
        icon: Icons.MaterialCommunityIcons.Home,
      },
      {
        text: "News",
        routeName: "NewsScreen",
        icon: Icons.MaterialCommunityIcons.News,
      },
      {
        text: "contactus",
        routeName: "CustomPage",
        params: {
          id: 10941,
          title: "contactus",
        },
        icon: Icons.MaterialCommunityIcons.Pin,
      },
      {
        text: "About",
        routeName: "CustomPage",
        params: {
          url: "http://github.com",
        },
        icon: Icons.MaterialCommunityIcons.Email,
      },
      // {
      //   text: "Setting",
      //   routeName: "SettingScreen",
      //   icon: Icons.MaterialCommunityIcons.Setting,
      // },
    ],
  },

  // Layout select
  layouts: [
    {
      layout: Constants.Layout.card,
      image: Images.icons.iconCard,
      text: "cardView",
    },
    {
      layout: Constants.Layout.simple,
      image: Images.icons.iconRight,
      text: "simpleView",
    },
    {
      layout: Constants.Layout.twoColumn,
      image: Images.icons.iconColumn,
      text: "twoColumnView",
    },
    {
      layout: Constants.Layout.threeColumn,
      image: Images.icons.iconThree,
      text: "threeColumnView",
    },
    {
      layout: Constants.Layout.horizon,
      image: Images.icons.iconHorizal,
      text: "horizontal",
    },
    {
      layout: Constants.Layout.advance,
      image: Images.icons.iconAdvance,
      text: "advanceView",
    },
  ],
};
