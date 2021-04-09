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
      <View style={styles.View_0_339}>
        <View style={styles.View_I0_339_0_3847}>
          <View style={styles.View_I0_339_0_3850} />
          <View style={styles.View_I0_339_0_3852}>
            <Text style={styles.Text_I0_339_0_3852}>ADD SIZE M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_340}>
        <View style={styles.View_0_341} />
        <View style={styles.View_3_3054}>
          <Text style={styles.Text_3_3054}>
            Size M was bought and not returned for size by 74% of shoppers with
            your approximate height, weight and fit preference.
          </Text>
        </View>
      </View>
      <View style={styles.View_0_343}>
        <View style={styles.View_0_344}>
          <View style={styles.View_0_345} />
          <View style={styles.View_3_3052}>
            <Text style={styles.Text_3_3052}>S</Text>
          </View>
          <View style={styles.View_3_3050}>
            <Text style={styles.Text_3_3050}>26%</Text>
          </View>
        </View>
        <View style={styles.View_0_348}>
          <View style={styles.View_0_349} />
          <View style={styles.View_3_3046}>
            <Text style={styles.Text_3_3046}>M</Text>
          </View>
          <View style={styles.View_3_3044}>
            <Text style={styles.Text_3_3044}>74%</Text>
          </View>
        </View>
        <View style={styles.View_0_352}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/848e/820e/a3815460b6b0fc6cfea5e613303fd414"
            }}
            style={styles.ImageBackground_0_353}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8633/0656/98c92c4cba3a3a3cd14ab16fd83d009a"
            }}
            style={styles.ImageBackground_0_354}
          />
          <View style={styles.View_0_355}>
            <View style={styles.View_I0_355_0_3902}>
              <Text style={styles.Text_I0_355_0_3902}>S</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95f3/e2a4/7f234eb34590071346c022d9f7f8f2ec"
            }}
            style={styles.ImageBackground_0_357}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb91/0c2d/520bf64d73f5fad4157a209d1d8d0e6a"
            }}
            style={styles.ImageBackground_0_358}
          />
          <View style={styles.View_0_359}>
            <View style={styles.View_I0_359_0_3902}>
              <Text style={styles.Text_I0_359_0_3902}>M</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_360}>
        <View style={styles.View_0_361}>
          <View style={styles.View_0_362}>
            <View style={styles.View_0_364} />
            <View style={styles.View_0_363} />
            <View style={styles.View_0_365}>
              <View style={styles.View_I0_365_0_4300} />
            </View>
          </View>
          <View style={styles.View_3_3032}>
            <Text style={styles.Text_3_3032}>Edit info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3048}>
        <Text style={styles.Text_3_3048}>What’s my size</Text>
      </View>
      <View style={styles.View_3_3042}>
        <Text style={styles.Text_3_3042}>Edit</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
        }}
        style={styles.ImageBackground_0_370}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_339: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_339_0_3847: {
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
  View_I0_339_0_3850: {
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
  View_I0_339_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_339_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_340: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("66.53005464480874%")
  },
  View_0_341: {
    width: wp("87.2%"),
    height: hp("18.169398907103826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3054: {
    width: wp("70.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("2.4590163934426243%")
  },
  Text_3_3054: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_343: {
    width: wp("74.93333333333332%"),
    minWidth: wp("74.93333333333332%"),
    height: hp("33.19672131147541%"),
    minHeight: hp("33.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("25.136612021857925%")
  },
  View_0_344: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.55191256830601%")
  },
  View_0_345: {
    width: wp("21.6%"),
    height: hp("0.819672131147541%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 206, 47, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3052: {
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_3052: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3050: {
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("0.6830601092896202%")
  },
  Text_3_3050: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_348: {
    width: wp("69.33333333333334%"),
    minWidth: wp("69.33333333333334%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.672131147540984%")
  },
  View_0_349: {
    width: wp("68.53333333333333%"),
    height: hp("0.819672131147541%"),
    top: hp("4.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 158, 192, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3046: {
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_3046: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3044: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.333333333333336%"),
    top: hp("0.5464480874316919%")
  },
  Text_3_3044: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_352: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333334%"),
    top: hp("0%")
  },
  ImageBackground_0_353: {
    width: wp("26.400000000000002%"),
    height: hp("13.524590163934427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_354: {
    width: wp("13.200000000000001%"),
    height: hp("6.762295081967213%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.200000000000003%")
  },
  View_0_355: {
    width: wp("4.8%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333323%"),
    top: hp("4.098360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_355_0_3902: {
    flexGrow: 1,
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584597%")
  },
  Text_I0_355_0_3902: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_356: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("0%")
  },
  ImageBackground_0_357: {
    width: wp("26.400000000000002%"),
    height: hp("13.524590163934427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_358: {
    width: wp("26.400000000000002%"),
    height: hp("13.524590163934427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_359: {
    width: wp("6.133333333333333%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%"),
    top: hp("4.098360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_359_0_3902: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584597%")
  },
  Text_I0_359_0_3902: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_360: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("95.90163934426229%")
  },
  View_0_361: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_362: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_364: {
    width: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(168, 181, 199, 1)",
    borderWidth: 1
  },
  View_0_363: {
    width: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(168, 181, 199, 1)",
    borderWidth: 1
  },
  View_0_365: {
    width: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 158, 192, 1)"
  },
  View_I0_365_0_4300: {
    flexGrow: 1,
    width: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3032: {
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("2.4590163934426243%")
  },
  Text_3_3032: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3048: {
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("12.978142076502733%")
  },
  Text_3_3048: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3042: {
    width: wp("9.066666666666666%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%")
  },
  Text_3_3042: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_370: {
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
