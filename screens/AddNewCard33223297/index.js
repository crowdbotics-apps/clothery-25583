import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_1074}>
        <View style={styles.View_0_1075} />
        <View style={styles.View_0_1076}>
          <View style={styles.View_I0_1076_0_3847}>
            <View style={styles.View_I0_1076_0_3850} />
            <View style={styles.View_I0_1076_0_3852}>
              <Text style={styles.Text_I0_1076_0_3852}>ADD CARD</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1077}>
          <View style={styles.View_0_1078}>
            <View style={styles.View_I0_1078_0_4263} />
          </View>
          <View style={styles.View_0_1079}>
            <View style={styles.View_I0_1079_0_3883}>
              <Text style={styles.Text_I0_1079_0_3883}>CVC</Text>
            </View>
          </View>
          <View style={styles.View_0_1080}>
            <View style={styles.View_I0_1080_0_3960}>
              <Text style={styles.Text_I0_1080_0_3960}>CVC</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1081}>
          <View style={styles.View_0_1082}>
            <View style={styles.View_I0_1082_0_4263} />
          </View>
          <View style={styles.View_0_1083}>
            <View style={styles.View_I0_1083_0_3883}>
              <Text style={styles.Text_I0_1083_0_3883}>Exp Date</Text>
            </View>
          </View>
          <View style={styles.View_0_1084}>
            <View style={styles.View_I0_1084_0_3960}>
              <Text style={styles.Text_I0_1084_0_3960}>_ _</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1085}>
          <View style={styles.View_0_1086}>
            <View style={styles.View_I0_1086_0_4263} />
          </View>
          <View style={styles.View_0_1087}>
            <View style={styles.View_I0_1087_0_3883}>
              <Text style={styles.Text_I0_1087_0_3883}>Exp Month</Text>
            </View>
          </View>
          <View style={styles.View_0_1088}>
            <View style={styles.View_I0_1088_0_3960}>
              <Text style={styles.Text_I0_1088_0_3960}>_ _</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1089}>
          <View style={styles.View_0_1090}>
            <View style={styles.View_I0_1090_0_4263} />
          </View>
          <View style={styles.View_0_1091}>
            <View style={styles.View_I0_1091_0_3883}>
              <Text style={styles.Text_I0_1091_0_3883}>Card Number</Text>
            </View>
          </View>
          <View style={styles.View_0_1092}>
            <View style={styles.View_I0_1092_0_3960}>
              <Text style={styles.Text_I0_1092_0_3960}>Enter card number</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1093}>
          <View style={styles.View_0_1094}>
            <View style={styles.View_I0_1094_0_4263} />
          </View>
          <View style={styles.View_0_1095}>
            <View style={styles.View_I0_1095_0_3883}>
              <Text style={styles.Text_I0_1095_0_3883}>Name on card</Text>
            </View>
          </View>
          <View style={styles.View_0_1096}>
            <View style={styles.View_I0_1096_0_3960}>
              <Text style={styles.Text_I0_1096_0_3960}>Barbara Villis</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1097}>
          <View style={styles.View_0_1098} />
          <View style={styles.View_0_1099} />
          <View style={styles.View_0_1100}>
            <View style={styles.View_I0_1100_0_3969}>
              <View style={styles.View_I0_1100_0_3970}>
                <Text style={styles.Text_I0_1100_0_3970}>Barbara Villis </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_0_1101}>
            <View style={styles.View_I0_1101_0_3921}>
              <Text style={styles.Text_I0_1101_0_3921}>00</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df3/48be/70a69a65020824c907a6237f604ef96d"
            }}
            style={styles.ImageBackground_0_1102}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e2d/09bf/48f1179d168cc1dc666c85a3828559cc"
            }}
            style={styles.ImageBackground_0_1103}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14d6/338d/e0c9a85c8e3034ada3b831574cd87c08"
            }}
            style={styles.ImageBackground_0_1104}
          />
        </View>
      </View>
      <View style={styles.View_0_1110}>
        <View style={styles.View_3_3464}>
          <Text style={styles.Text_3_3464}>Add new card</Text>
        </View>
        <View style={styles.View_0_1111}>
          <View style={styles.View_0_1113} />
          <View style={styles.View_0_1114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4586/529e/c851564cef6fbaa7bad5600949a07ecf"
              }}
              style={styles.ImageBackground_I0_1114_0_4255}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
        }}
        style={styles.ImageBackground_0_1115}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1074: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("104.64480874316939%"),
    minHeight: hp("104.64480874316939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("22.6775956284153%")
  },
  View_0_1075: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("104.64480874316939%"),
    minHeight: hp("104.64480874316939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1076: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("91.80327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1076_0_3847: {
    flexGrow: 1,
    width: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_1076_0_3850: {
    width: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 45, 135, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1076_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("2.868852459016381%")
  },
  Text_I0_1076_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1077: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("75.13661202185791%")
  },
  View_0_1078: {
    width: wp("78.66666666666666%"),
    height: hp("7.786885245901639%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1078_0_4263: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1079: {
    width: wp("9.866666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1079_0_3883: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1079_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1080: {
    width: wp("50.93333333333333%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1080_0_3960: {
    flexGrow: 1,
    width: wp("50.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1080_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1081: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    top: hp("60.10928961748634%")
  },
  View_0_1082: {
    width: wp("37.06666666666666%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1082_0_4263: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1083: {
    width: wp("25.6%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1083_0_3883: {
    flexGrow: 1,
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1083_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1084: {
    width: wp("7.199999999999999%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000003%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1084_0_3960: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1084_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1085: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("60.10928961748634%")
  },
  View_0_1086: {
    width: wp("37.06666666666666%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1086_0_4263: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1087: {
    width: wp("25.6%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1087_0_3883: {
    flexGrow: 1,
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1087_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1088: {
    width: wp("7.199999999999999%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1088_0_3960: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1088_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1089: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("45.08196721311475%")
  },
  View_0_1090: {
    width: wp("78.66666666666666%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1090_0_4263: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1091: {
    width: wp("31.733333333333334%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1091_0_3883: {
    flexGrow: 1,
    width: wp("31.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1091_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1092: {
    width: wp("50.93333333333333%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1092_0_3960: {
    flexGrow: 1,
    width: wp("50.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1092_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1093: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("30.054644808743173%")
  },
  View_0_1094: {
    width: wp("78.66666666666666%"),
    height: hp("7.786885245901639%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1094_0_4263: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1095: {
    width: wp("31.733333333333334%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1095_0_3883: {
    flexGrow: 1,
    width: wp("31.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1095_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1096: {
    width: wp("50.93333333333333%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1096_0_3960: {
    flexGrow: 1,
    width: wp("50.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1096_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1097: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726775%")
  },
  View_0_1098: {
    width: wp("78.66666666666666%"),
    height: hp("23.497267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(13, 54, 98, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1099: {
    width: wp("10.4%"),
    height: hp("3.825136612021858%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1100: {
    width: wp("34.13333333333333%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599999999999998%"),
    top: hp("17.89617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1100_0_3969: {
    flexGrow: 1,
    width: wp("34.13333333333333%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1100_0_3970: {
    width: wp("34.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1100_0_3970: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1101: {
    width: wp("5.866666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1101_0_3921: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%")
  },
  Text_I0_1101_0_3921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1102: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("16.939890710382517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%")
  },
  ImageBackground_0_1103: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("16.939890710382517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%")
  },
  ImageBackground_0_1104: {
    width: wp("7.466666666666668%"),
    height: hp("0.546448087431694%"),
    top: hp("4.371584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333332%")
  },
  View_0_1110: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("4.644808743169399%")
  },
  View_3_3464: {
    width: wp("75.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.885245901639344%")
  },
  Text_3_3464: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1111: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%"),
    top: hp("0%")
  },
  View_0_1113: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(239, 237, 237, 1)",
    borderWidth: 1
  },
  View_0_1114: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1114_0_4255: {
    flexGrow: 1,
    width: wp("4.444444783528645%"),
    height: hp("2.2768672046765603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.22213541666666%"),
    top: hp("1.1384557505122945%")
  },
  ImageBackground_0_1115: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_2: { height: 977 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
