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
      <View style={styles.View_0_986}>
        <View style={styles.View_0_987} />
        <View style={styles.View_0_988}>
          <View style={styles.View_I0_988_0_3847}>
            <View style={styles.View_I0_988_0_3850} />
            <View style={styles.View_I0_988_0_3852}>
              <Text style={styles.Text_I0_988_0_3852}>CHECKOUT</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3_3186}>
          <Text style={styles.Text_3_3186}>Shipping</Text>
        </View>
        <View style={styles.View_3_3195}>
          <Text style={styles.Text_3_3195}>$10</Text>
        </View>
        <View style={styles.View_3_3183}>
          <Text style={styles.Text_3_3183}>Subtotal</Text>
        </View>
        <View style={styles.View_3_3193}>
          <Text style={styles.Text_3_3193}>$120</Text>
        </View>
        <View style={styles.View_3_3191}>
          <Text style={styles.Text_3_3191}>130</Text>
        </View>
        <View style={styles.View_3_3188}>
          <Text style={styles.Text_3_3188}>$</Text>
        </View>
        <View style={styles.View_3_3198}>
          <Text style={styles.Text_3_3198}>Total</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8997/2bfd/13eb38a9b039e025ee42b56a5e0f1b5c"
          }}
          style={styles.ImageBackground_0_1000}
        />
        <View style={styles.View_0_1001} />
      </View>
      <View style={styles.View_0_1007}>
        <View style={styles.View_0_1008}>
          <View style={styles.View_I0_1008_0_4227}>
            <View style={styles.View_I0_1008_0_4228} />
            <View style={styles.View_I0_1008_0_4230}>
              <View style={styles.View_I0_1008_0_4232} />
              <View style={styles.View_I0_1008_0_4231} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc88/8e0e/d61e6cf105a40bba6d523ecd7ae6b0e6"
                }}
                style={styles.ImageBackground_I0_1008_0_4233}
              />
            </View>
            <View style={styles.View_I0_1008_3_2135}>
              <View style={styles.View_I0_1008_3_2135_0_3927}>
                <Text style={styles.Text_I0_1008_3_2135_0_3927}>Color</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adf3/d196/002f4b281da3ec68b54f1a5b42e88eaa"
              }}
              style={styles.ImageBackground_I0_1008_3_2136}
            />
            <View style={styles.View_I0_1008_3_2137}>
              <View style={styles.View_I0_1008_3_2137_0_3927}>
                <Text style={styles.Text_I0_1008_3_2137_0_3927}>One Size</Text>
              </View>
            </View>
            <View style={styles.View_I0_1008_3_2138}>
              <View style={styles.View_I0_1008_3_2138_0_4110}>
                <Text style={styles.Text_I0_1008_3_2138_0_4110}>
                  Belt suit blazer
                </Text>
              </View>
            </View>
            <View style={styles.View_I0_1008_3_2139}>
              <View style={styles.View_I0_1008_3_2139_0_3923}>
                <Text style={styles.Text_I0_1008_3_2139_0_3923}>1x</Text>
              </View>
            </View>
            <View style={styles.View_I0_1008_3_2140}>
              <View style={styles.View_I0_1008_3_2140_0_4110}>
                <Text style={styles.Text_I0_1008_3_2140_0_4110}>$120</Text>
              </View>
            </View>
            <View style={styles.View_I0_1008_3_2141}>
              <View style={styles.View_I0_1008_3_2141_0_4099}>
                <Text style={styles.Text_I0_1008_3_2141_0_4099}>ZF876</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1009}>
          <View style={styles.View_I0_1009_0_3929}>
            <View style={styles.View_I0_1009_3_1674}>
              <View style={styles.View_I0_1009_0_3932} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef0e/c793/bcfe26e348c0f653790f2a1911977c58"
                }}
                style={styles.ImageBackground_I0_1009_3_1677}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f081/c38f/f1b74c0176ca7e32a21d1a25eca60f35"
                }}
                style={styles.ImageBackground_I0_1009_3_1678}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f081/c38f/f1b74c0176ca7e32a21d1a25eca60f35"
              }}
              style={styles.ImageBackground_I0_1009_0_3936}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1010}>
        <View style={styles.View_3_3200}>
          <Text style={styles.Text_3_3200}>Edit</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
        }}
        style={styles.ImageBackground_3_2335}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_986: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.65573770491803%")
  },
  View_0_987: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(13, 54, 98, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_988: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_988_0_3847: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_988_0_3850: {
    width: wp("87.2%"),
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
  View_I0_988_0_3852: {
    width: wp("68.55029296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.576822916666666%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_988_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3186: {
    width: wp("21.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("13.251366120218584%")
  },
  Text_3_3186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3195: {
    width: wp("10.928104654947916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    top: hp("13.661202185792355%")
  },
  Text_3_3195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3183: {
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.786885245901651%")
  },
  Text_3_3183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3193: {
    width: wp("10.928104654947916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("8.333333333333336%")
  },
  Text_3_3193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3191: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    top: hp("27.390710382513667%")
  },
  Text_3_3191: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3188: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%"),
    top: hp("27.322404371584703%")
  },
  Text_3_3188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3198: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("26.775956284153004%")
  },
  Text_3_3198: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1000: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("21.92622950819672%")
  },
  View_0_1001: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(138, 150, 173, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1007: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("15.573770491803279%")
  },
  View_0_1008: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1008_0_4227: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_1008_0_4228: {
    width: wp("87.2%"),
    height: hp("23.633879781420767%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1008_0_4230: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("19.255211835350494%"),
    minHeight: hp("19.255211835350494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.247694672131148%")
  },
  View_I0_1008_0_4232: {
    width: wp("20%"),
    height: hp("19.255211835350494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1008_0_4231: {
    width: wp("20%"),
    height: hp("19.255211835350494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1008_0_4233: {
    width: wp("20%"),
    height: hp("19.255211835350494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_1008_3_2135: {
    width: wp("12.266666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("11.065573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1008_3_2135_0_3927: {
    flexGrow: 1,
    width: wp("12.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%")
  },
  Text_I0_1008_3_2135_0_3927: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1008_3_2136: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("12.295081967213113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%")
  },
  View_I0_1008_3_2137: {
    width: wp("18.4%"),
    height: hp("2.73224043715847%"),
    top: hp("11.065573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1008_3_2137_0_3927: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%")
  },
  Text_I0_1008_3_2137_0_3927: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1008_3_2138: {
    width: wp("36.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("4.0983606557377055%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1008_3_2138_0_4110: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584597%")
  },
  Text_I0_1008_3_2138_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1008_3_2139: {
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("17.349726775956277%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1008_3_2139_0_3923: {
    flexGrow: 1,
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I0_1008_3_2139_0_3923: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1008_3_2140: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("16.393442622950822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1008_3_2140_0_4110: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_I0_1008_3_2140_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1008_3_2141: {
    width: wp("32%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("7.923497267759563%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1008_3_2141_0_4099: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%")
  },
  Text_I0_1008_3_2141_0_4099: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1009: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333332%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1009_0_3929: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("6.1816939890710385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.5027322404371546%")
  },
  View_I0_1009_3_1674: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1009_0_3932: {
    width: wp("11.200000000000001%"),
    height: hp("10.10928961748634%"),
    top: hp("-1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4000000000000057%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1009_3_1677: {
    width: wp("0.4%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.819672131147545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%")
  },
  ImageBackground_I0_1009_3_1678: {
    width: wp("3.0666666666666664%"),
    height: hp("0.20491803278688525%"),
    top: hp("1.5027322404371617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%")
  },
  ImageBackground_I0_1009_0_3936: {
    width: wp("3.2%"),
    height: hp("0.20491803278688525%"),
    top: hp("5.976775956284154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666572%")
  },
  View_0_1010: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("7.650273224043716%")
  },
  View_3_3200: {
    width: wp("9.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_3200: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_2335: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
