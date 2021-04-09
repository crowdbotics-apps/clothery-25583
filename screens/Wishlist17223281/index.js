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
      <View style={styles.View_0_489}>
        <View style={styles.View_0_490}>
          <View style={styles.View_0_491}>
            <View style={styles.View_0_492}>
              <View style={styles.View_I0_492_0_3847}>
                <View style={styles.View_I0_492_0_3850} />
                <View style={styles.View_I0_492_0_3852}>
                  <Text style={styles.Text_I0_492_0_3852}>ADD TO CART</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_0_493}>
              <View style={styles.View_0_495} />
              <View style={styles.View_0_494} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5b7/1a36/def7d294bf6a61caa884fc954d4b3c75"
                }}
                style={styles.ImageBackground_0_496}
              />
            </View>
            <View style={styles.View_0_497}>
              <View style={styles.View_I0_497_0_3883}>
                <Text style={styles.Text_I0_497_0_3883}>Crop top</Text>
              </View>
            </View>
            <View style={styles.View_0_498}>
              <View style={styles.View_I0_498_0_4110}>
                <Text style={styles.Text_I0_498_0_4110}>$25.90</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_499}>
          <View style={styles.View_0_500}>
            <View style={styles.View_0_501}>
              <View style={styles.View_I0_501_0_3847}>
                <View style={styles.View_I0_501_0_3850} />
                <View style={styles.View_I0_501_0_3852}>
                  <Text style={styles.Text_I0_501_0_3852}>ADD TO CART</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_0_502}>
              <View style={styles.View_0_504} />
              <View style={styles.View_0_503} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e338/d866/49f60b7cfaa4f519aff53bdd806265ac"
                }}
                style={styles.ImageBackground_0_505}
              />
            </View>
            <View style={styles.View_0_506}>
              <View style={styles.View_I0_506_0_3883}>
                <Text style={styles.Text_I0_506_0_3883}>Printed dress</Text>
              </View>
            </View>
            <View style={styles.View_0_507}>
              <View style={styles.View_I0_507_0_4110}>
                <Text style={styles.Text_I0_507_0_4110}>$59</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_508}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d2b/9aa6/f182e29b5cf9be4ae58225cdd483284f"
            }}
            style={styles.ImageBackground_0_509}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad7c/ddf6/ae7e52fe0824591525df0cf06e5fc689"
          }}
          style={styles.ImageBackground_0_510}
        />
        <View style={styles.View_0_511}>
          <View style={styles.View_0_512}>
            <View style={styles.View_0_513}>
              <View style={styles.View_0_515} />
              <View style={styles.View_0_514} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3607/feec/3b17c7c18a8ca60523d32d8231095934"
                }}
                style={styles.ImageBackground_0_516}
              />
            </View>
            <View style={styles.View_0_517}>
              <View style={styles.View_I0_517_0_3883}>
                <Text style={styles.Text_I0_517_0_3883}>Neon tank</Text>
              </View>
            </View>
            <View style={styles.View_0_518}>
              <View style={styles.View_I0_518_0_4110}>
                <Text style={styles.Text_I0_518_0_4110}>$15.80</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_519}>
          <View style={styles.View_3_3475}>
            <Text style={styles.Text_3_3475}>Edit</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_521}>
        <View style={styles.View_I0_521_0_4221}>
          <View style={styles.View_I0_521_0_4222}>
            <View style={styles.View_I0_521_0_4223}>
              <Text style={styles.Text_I0_521_0_4223}>Saved Items</Text>
            </View>
          </View>
          <View style={styles.View_I0_521_0_4224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
              }}
              style={styles.ImageBackground_I0_521_0_4225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_489: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("115.30054644808743%"),
    minHeight: hp("115.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("7.240437158469945%")
  },
  View_0_490: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("51.36612021857923%"),
    minHeight: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%"),
    top: hp("16.393442622950822%")
  },
  View_0_491: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("51.36612021857923%"),
    minHeight: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_492: {
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    top: hp("44.67213114754097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_492_0_3847: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_492_0_3850: {
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 45, 135, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_492_0_3852: {
    width: wp("32.49325764973958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.539518229166674%"),
    top: hp("2.0491803278688536%")
  },
  Text_I0_492_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_493: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_495: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_494: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_496: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_497: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_497_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_497_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_498: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_498_0_4110: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  Text_I0_498_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_499: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("51.36612021857923%"),
    minHeight: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.393442622950822%")
  },
  View_0_500: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("51.36612021857923%"),
    minHeight: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_501: {
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    top: hp("44.67213114754097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_501_0_3847: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_501_0_3850: {
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 45, 135, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_501_0_3852: {
    width: wp("32.49325764973958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.539518229166667%"),
    top: hp("2.0491803278688536%")
  },
  Text_I0_501_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_502: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_504: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_503: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_505: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_506: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_506_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_506_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_507: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_507_0_4110: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  Text_I0_507_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_508: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191259%")
  },
  ImageBackground_0_509: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_510: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("8.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%")
  },
  View_0_511: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.22404371584699%")
  },
  View_0_512: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_513: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_515: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_514: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_516: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_517: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.245901639344254%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_517_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_517_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_518: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("38.93442622950822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_518_0_4110: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158282%")
  },
  Text_I0_518_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_519: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.2%"),
    top: hp("0%")
  },
  View_3_3475: {
    width: wp("9.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_3475: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_521: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_521_0_4221: {
    flexGrow: 1,
    width: wp("72.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("-0.4098360655737716%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_521_0_4222: {
    width: wp("54.13333333333333%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("0.13661202185792387%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_521_0_4223: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_521_0_4223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_521_0_4224: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_521_0_4225: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
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
