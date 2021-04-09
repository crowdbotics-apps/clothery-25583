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
      <View style={styles.View_0_459}>
        <View style={styles.View_I0_459_0_3847}>
          <View style={styles.View_I0_459_0_3850} />
          <View style={styles.View_I0_459_0_3852}>
            <Text style={styles.Text_I0_459_0_3852}>SAVE</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3478}>
        <View style={styles.View_3_3238}>
          <View style={styles.View_3_3239}>
            <View style={styles.View_I3_3239_0_4368} />
          </View>
          <View style={styles.View_3_3253}>
            <Text style={styles.Text_3_3253}>Repeat password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc78/b180/ce981f04c7a35ad6b548d72c934c76b4"
            }}
            style={styles.ImageBackground_3_3241}
          />
        </View>
        <View style={styles.View_3_3254}>
          <View style={styles.View_3_3256}>
            <View style={styles.View_I3_3256_0_4368} />
          </View>
          <View style={styles.View_3_3270}>
            <Text style={styles.Text_3_3270}>Password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc78/b180/ce981f04c7a35ad6b548d72c934c76b4"
            }}
            style={styles.ImageBackground_3_3258}
          />
        </View>
        <View style={styles.View_3_3271}>
          <View style={styles.View_3_3273}>
            <View style={styles.View_I3_3273_0_4368} />
          </View>
          <View style={styles.View_3_3274}>
            <View style={styles.View_I3_3274_0_3883}>
              <Text style={styles.Text_I3_3274_0_3883}>Email</Text>
            </View>
          </View>
          <View style={styles.View_3_3275}>
            <Text style={styles.Text_3_3275}>barbaris-1993@gmail.com</Text>
          </View>
        </View>
        <View style={styles.View_0_463}>
          <View style={styles.View_I0_463_0_3963}>
            <View style={styles.View_I0_463_0_3963_0_4368} />
          </View>
          <View style={styles.View_I0_463_0_3964}>
            <View style={styles.View_I0_463_0_3964_0_3883}>
              <Text style={styles.Text_I0_463_0_3964_0_3883}>Name</Text>
            </View>
          </View>
          <View style={styles.View_I0_463_0_3967}>
            <Text style={styles.Text_I0_463_0_3967}>Barbara Rose</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_464}>
        <View style={styles.View_I0_464_0_4592}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef03/17a3/51a2ec4f97edf5f216464d65db1134b2"
            }}
            style={styles.ImageBackground_I0_464_0_4593}
          />
          <View style={styles.View_I0_464_0_4594}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20d/d0cf/627cc03c5a243d05378d8328c6d353f7"
              }}
              style={styles.ImageBackground_I0_464_0_4595}
            />
            <View style={styles.View_I0_464_0_4596} />
          </View>
          <View style={styles.View_I0_464_0_4597}>
            <View style={styles.View_I0_464_0_4597_0_4419}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f40f/5319/135442ed4cf24df228262266b703a12d"
                }}
                style={styles.ImageBackground_I0_464_0_4597_0_4422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dec/4430/a85c8e75dafc55405f60f463a83871a3"
                }}
                style={styles.ImageBackground_I0_464_0_4597_0_4425}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_465}>
        <View style={styles.View_I0_465_0_4221}>
          <View style={styles.View_I0_465_0_4222}>
            <View style={styles.View_I0_465_0_4223}>
              <Text style={styles.Text_I0_465_0_4223}>Profile Settings</Text>
            </View>
          </View>
          <View style={styles.View_I0_465_0_4224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
              }}
              style={styles.ImageBackground_I0_465_0_4225}
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
  View_0_459: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("104.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_459_0_3847: {
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
  View_I0_459_0_3850: {
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
  View_I0_459_0_3852: {
    width: wp("68.55029296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.576888020833332%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_459_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3478: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("57.92349726775956%"),
    minHeight: hp("57.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.57377049180328%")
  },
  View_3_3238: {
    width: wp("87.2%"),
    height: hp("12.841530054644808%"),
    top: hp("45.08196721311476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_3239: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3239_0_4368: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3253: {
    width: wp("37.333333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_3253: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_3241: {
    width: wp("32.40362752278646%"),
    height: hp("0.546448087431694%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.39817708333333%")
  },
  View_3_3254: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.054644808743156%")
  },
  View_3_3256: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3256_0_4368: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3270: {
    width: wp("21.865861002604166%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_3270: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_3258: {
    width: wp("32.40362752278646%"),
    height: hp("0.546448087431694%"),
    top: hp("8.743169398907128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.39817708333333%")
  },
  View_3_3271: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.027322404371581%")
  },
  View_3_3273: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3273_0_4368: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3274: {
    width: wp("14.48942667643229%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3274_0_3883: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3_3274_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3275: {
    width: wp("69.02236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220572916666667%"),
    top: hp("6.830601092896174%")
  },
  Text_3_3275: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_463: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_463_0_3963: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.05464480874317%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_463_0_3963_0_4368: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_463_0_3964: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_463_0_3964_0_3883: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_463_0_3964_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_463_0_3967: {
    flexGrow: 1,
    width: wp("69.02236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220572916666667%"),
    top: hp("6.830601092896174%")
  },
  Text_I0_463_0_3967: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_464: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("21.311475409836063%"),
    minHeight: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_464_0_4592: {
    flexGrow: 1,
    width: wp("40.41850179036459%"),
    height: hp("21.27513989724748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04388020833333783%"),
    top: hp("0%")
  },
  ImageBackground_I0_464_0_4593: {
    width: wp("37.86666666666667%"),
    height: hp("19.398907103825135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_464_0_4594: {
    width: wp("17.724808756510416%"),
    minWidth: wp("17.724808756510416%"),
    height: hp("9.08033235476968%"),
    minHeight: hp("9.08033235476968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.693684895833325%"),
    top: hp("12.194824218750004%")
  },
  ImageBackground_I0_464_0_4595: {
    width: wp("17.724808756510416%"),
    height: hp("9.08033235476968%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_464_0_4596: {
    width: wp("4.525483194986979%"),
    minWidth: wp("4.525483194986979%"),
    height: hp("2.3183827843171%"),
    minHeight: hp("2.3183827843171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.599674479166673%"),
    top: hp("3.5858654585040917%")
  },
  View_I0_464_0_4597: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("15.300546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.75611979166666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_464_0_4597_0_4419: {
    flexGrow: 1,
    width: wp("5.805555725097656%"),
    height: hp("2.473246725530572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.030533854166669983%"),
    top: hp("0.2660865992144821%")
  },
  ImageBackground_I0_464_0_4597_0_4422: {
    width: wp("5.805555725097656%"),
    height: hp("2.473246725530572%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_464_0_4597_0_4425: {
    width: wp("2.3833333333333333%"),
    height: hp("1.2209702059219443%"),
    top: hp("0.7513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7111328125000043%")
  },
  View_0_465: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.786885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_465_0_4221: {
    flexGrow: 1,
    width: wp("72.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("-0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_465_0_4222: {
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
  View_I0_465_0_4223: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_465_0_4223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_465_0_4224: {
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
  ImageBackground_I0_465_0_4225: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 884 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
