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
      <View style={styles.View_0_315}>
        <View style={styles.View_I0_315_0_3847}>
          <View style={styles.View_I0_315_0_3850} />
          <View style={styles.View_I0_315_0_3852}>
            <Text style={styles.Text_I0_315_0_3852}>APPLY</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_316}>
        <View style={styles.View_3_3086}>
          <Text style={styles.Text_3_3086}>Tighter</Text>
        </View>
        <View style={styles.View_3_3089}>
          <Text style={styles.Text_3_3089}>How do you want to fit?</Text>
        </View>
        <View style={styles.View_3_3084}>
          <Text style={styles.Text_3_3084}>Perfect</Text>
        </View>
        <View style={styles.View_3_3091}>
          <Text style={styles.Text_3_3091}>Looser</Text>
        </View>
        <View style={styles.View_3_3093}>
          <Text style={styles.Text_3_3093}>Preference</Text>
        </View>
        <View style={styles.View_3_3094}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd8a/9e4d/1483bedba47abb8953becf111037d9cc"
            }}
            style={styles.ImageBackground_0_323}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd8a/9e4d/1483bedba47abb8953becf111037d9cc"
            }}
            style={styles.ImageBackground_0_324}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0163/69e1/3d97957c57d51f20623faa20f9823545"
            }}
            style={styles.ImageBackground_0_325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd8a/9e4d/1483bedba47abb8953becf111037d9cc"
            }}
            style={styles.ImageBackground_0_326}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd8a/9e4d/1483bedba47abb8953becf111037d9cc"
            }}
            style={styles.ImageBackground_0_327}
          />
        </View>
      </View>
      <View style={styles.View_0_328}>
        <View style={styles.View_0_329}>
          <View style={styles.View_I0_329_0_3908}>
            <View style={styles.View_I0_329_0_3911} />
            <View style={styles.View_I0_329_0_3913}>
              <View style={styles.View_I0_329_0_3915} />
            </View>
            <View style={styles.View_I0_329_0_3917}>
              <View style={styles.View_I0_329_0_3917_0_3906}>
                <Text style={styles.Text_I0_329_0_3917_0_3906}>58</Text>
              </View>
            </View>
            <View style={styles.View_I0_329_3_3107}>
              <Text style={styles.Text_I0_329_3_3107}>Height - cm</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_330}>
          <View style={styles.View_I0_330_0_4266}>
            <View style={styles.View_I0_330_0_4267}>
              <View style={styles.View_I0_330_0_4270} />
              <View style={styles.View_I0_330_0_4272}>
                <Text style={styles.Text_I0_330_0_4272}>kg</Text>
              </View>
            </View>
            <View style={styles.View_I0_330_0_4273}>
              <View style={styles.View_I0_330_0_4276} />
              <View style={styles.View_I0_330_0_4278}>
                <Text style={styles.Text_I0_330_0_4278}>lbc</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_331}>
        <View style={styles.View_0_332}>
          <View style={styles.View_I0_332_0_3908}>
            <View style={styles.View_I0_332_0_3911} />
            <View style={styles.View_I0_332_0_3913}>
              <View style={styles.View_I0_332_0_3915} />
            </View>
            <View style={styles.View_I0_332_0_3917}>
              <View style={styles.View_I0_332_0_3917_0_3906}>
                <Text style={styles.Text_I0_332_0_3917_0_3906}>162</Text>
              </View>
            </View>
            <View style={styles.View_I0_332_3_3107}>
              <Text style={styles.Text_I0_332_3_3107}>Height - cm</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_333}>
          <View style={styles.View_I0_333_0_4266}>
            <View style={styles.View_I0_333_0_4267}>
              <View style={styles.View_I0_333_0_4270} />
              <View style={styles.View_I0_333_0_4272}>
                <Text style={styles.Text_I0_333_0_4272}>cm</Text>
              </View>
            </View>
            <View style={styles.View_I0_333_0_4273}>
              <View style={styles.View_I0_333_0_4276} />
              <View style={styles.View_I0_333_0_4278}>
                <Text style={styles.Text_I0_333_0_4278}>in</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3096}>
        <Text style={styles.Text_3_3096}>What’s my size</Text>
      </View>
      <View style={styles.View_0_335}>
        <View style={styles.View_3_3098}>
          <Text style={styles.Text_3_3098}>Edit</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
        }}
        style={styles.ImageBackground_0_337}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_315: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_315_0_3847: {
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
  View_I0_315_0_3850: {
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
  View_I0_315_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_315_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_316: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("67.21311475409836%")
  },
  View_3_3086: {
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999998%"),
    top: hp("19.80874316939891%")
  },
  Text_3_3086: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3089: {
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("4.78142076502732%")
  },
  Text_3_3089: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3084: {
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.800000000000004%"),
    top: hp("19.80874316939891%")
  },
  Text_3_3084: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3091: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("19.80874316939891%")
  },
  Text_3_3091: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3093: {
    width: wp("72.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_3093: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3094: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("10.51912568306011%")
  },
  ImageBackground_0_323: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_324: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333333%")
  },
  ImageBackground_0_325: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.26666666666667%")
  },
  ImageBackground_0_326: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.4%")
  },
  ImageBackground_0_327: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%")
  },
  View_0_328: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("43.5792349726776%")
  },
  View_0_329: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464482%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_329_0_3908: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_329_0_3911: {
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_329_0_3913: {
    width: wp("38.199397786458334%"),
    minWidth: wp("38.199397786458334%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.102604166666666%"),
    top: hp("1.5027322404371546%")
  },
  View_I0_329_0_3915: {
    width: wp("38.199397786458334%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 232, 240, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_329_0_3917: {
    width: wp("12.381868489583333%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.80182291666666%"),
    top: hp("3.1420765027322446%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_329_0_3917_0_3906: {
    flexGrow: 1,
    width: wp("12.381868489583333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_I0_329_0_3917_0_3906: {
    color: "rgba(255, 158, 192, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_329_3_3107: {
    width: wp("33.98428955078125%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.484114583333334%")
  },
  Text_I0_329_3_3107: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_330: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_330_0_4266: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_330_0_4267: {
    width: wp("13.866666666666665%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_330_0_4270: {
    width: wp("13.866666666666665%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_330_0_4272: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333323%"),
    top: hp("0.6830601092896131%")
  },
  Text_I0_330_0_4272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_330_0_4273: {
    width: wp("13.866666666666665%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_330_0_4276: {
    width: wp("13.866666666666665%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_330_0_4278: {
    width: wp("6.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0.6830601092896131%")
  },
  Text_I0_330_0_4278: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_331: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("21.44808743169399%")
  },
  View_0_332: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.2841530054644785%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_332_0_3908: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_332_0_3911: {
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_332_0_3913: {
    width: wp("38.199397786458334%"),
    minWidth: wp("38.199397786458334%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.102604166666666%"),
    top: hp("1.5027322404371617%")
  },
  View_I0_332_0_3915: {
    width: wp("38.199397786458334%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 232, 240, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_332_0_3917: {
    width: wp("12.381868489583333%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.80182291666666%"),
    top: hp("3.1420765027322446%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_332_0_3917_0_3906: {
    flexGrow: 1,
    width: wp("12.381868489583333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584597%")
  },
  Text_I0_332_0_3917_0_3906: {
    color: "rgba(255, 158, 192, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_332_3_3107: {
    width: wp("33.98428955078125%"),
    top: hp("3.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.484114583333334%")
  },
  Text_I0_332_3_3107: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_333: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_333_0_4266: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_333_0_4267: {
    width: wp("13.866666666666665%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_333_0_4270: {
    width: wp("13.866666666666665%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_333_0_4272: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333323%"),
    top: hp("0.6830601092896167%")
  },
  Text_I0_333_0_4272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_333_0_4273: {
    width: wp("13.866666666666665%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_333_0_4276: {
    width: wp("13.866666666666665%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_333_0_4278: {
    width: wp("6.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0.6830601092896167%")
  },
  Text_I0_333_0_4278: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3096: {
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("12.978142076502733%")
  },
  Text_3_3096: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_335: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("7.103825136612022%")
  },
  View_3_3098: {
    width: wp("9.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_3098: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_337: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.5136612021857925%"),
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
