// @flow

import color from 'color';
import {Platform, Dimensions, PixelRatio} from 'react-native';

import {PLATFORM} from './commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = PLATFORM.MATERIAL;
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

export default {
  platformStyle,
  platform,

  // Accordion
  headerStyle: '#edebed',
  iconStyle: '#000',
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  accordionBorderColor: '#d3d3d3',

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
  innerTouchableBackgroundColor: '#fff',
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: '#757575',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: 0,

  // Button
  buttonFontFamily: 'Roboto',
  buttonDisabledBg: '#b5b5b5',
  // buttonPadding: 16,
  buttonPadding: 5,
  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  get buttonTextSize() {
    return this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: platform === PLATFORM.IOS ? 10 : 12,

  // CheckBox
  CheckboxRadius: 50,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 7,
  CheckboxPaddingBottom: 5,
  CheckboxIconSize: 20,
  CheckboxIconMarginTop: 5,
  CheckboxFontSize: 20,
  checkboxBgColor: '#CA60E3',
  checkboxSize: 30,
  checkboxTickColor: '#fff',

  // Color
  brandPrimary: '#CA60E3',
  brandInfo: '#6560E3',
  brandSuccess: '#60E36F',
  brandDanger: '#E36060',
  brandWarning: '#E3E360',
  brandDark: '#000',
  brandLight: '#848484',

  // Container
  containerBgColor: '#fff',

  // Date Picker
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // FAB
  fabWidth: 56,

  // Font
  DefaultFontSize: 16,
  fontFamily: 'Roboto',
  fontSizeBase: 16,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 56,
  footerDefaultBg: '#FFF',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: '#CA60E3',
  tabBarTextSize: 24,
  activeTab: '#fff',
  sTabBarActiveTextColor: '##CA60E3',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: '#fff',

  // Header
  toolbarBtnColor: '#fff',
  toolbarDefaultBg: '#A53BBA',
  toolbarHeight: 56,
  toolbarSearchIconSize: 23,
  toolbarInputColor: '#fff',
  searchBarHeight: platform === PLATFORM.IOS ? 30 : 40,
  searchBarInputHeight: platform === PLATFORM.IOS ? 40 : 50,
  toolbarBtnTextColor: '#fff',
  toolbarDefaultBorder: '#3F51B5',
  iosStatusbar: 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: 28,
  iconHeaderSize: 28,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#B5B5B5',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#E36060',
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#B5B5B5';
  },

  // Line Height
  buttonLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 25,
  lineHeight: 24,

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: 12,
  listNoteColor: '#808080',
  listNoteSize: 13,
  listItemSelected: '#3F51B5',

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: '#3F51B5',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  segmentActiveTextColor: '#3F51B5',
  segmentBorderColor: '#fff',
  segmentBorderColorMain: '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#CA60E3',
  inverseSpinnerColor: '#E36060',

  // Tab
  tabDefaultBg: '#3F51B5',
  topTabBarTextColor: '#b3c7f9',
  topTabBarActiveTextColor: '#fff',
  topTabBarBorderColor: '#fff',
  topTabBarActiveBorderColor: '#fff',

  // Tabs
  tabBgColor: '#A53BBA',
  tabFontSize: 15,

  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 16,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: 'Roboto',
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: '#FFF',
  titleFontColor: '#FFF',

  // Other
  borderRadiusBase: 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
};
