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
      <View style={styles.View_0_657}>
        <View style={styles.View_0_658} />
        <View style={styles.View_0_660}>
          <Text style={styles.Text_0_660}>I have an account. Log In </Text>
        </View>
      </View>
      <View style={styles.View_0_661}>
        <View style={styles.View_I0_661_0_3847}>
          <View style={styles.View_I0_661_0_3850} />
          <View style={styles.View_I0_661_0_3852}>
            <Text style={styles.Text_I0_661_0_3852}>NEXT</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3380}>
        <View style={styles.View_3_3341}>
          <View style={styles.View_3_3342}>
            <View style={styles.View_I3_3342_0_4368} />
          </View>
          <View style={styles.View_3_3343}>
            <Text style={styles.Text_3_3343}>Repeat password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc78/b180/ce981f04c7a35ad6b548d72c934c76b4"
            }}
            style={styles.ImageBackground_3_3344}
          />
        </View>
        <View style={styles.View_3_3353}>
          <View style={styles.View_3_3354}>
            <View style={styles.View_I3_3354_0_4368} />
          </View>
          <View style={styles.View_3_3355}>
            <Text style={styles.Text_3_3355}>Password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc78/b180/ce981f04c7a35ad6b548d72c934c76b4"
            }}
            style={styles.ImageBackground_3_3356}
          />
        </View>
        <View style={styles.View_3_3365}>
          <View style={styles.View_3_3366}>
            <View style={styles.View_I3_3366_0_4368} />
          </View>
          <View style={styles.View_3_3367}>
            <View style={styles.View_I3_3367_0_3883}>
              <Text style={styles.Text_I3_3367_0_3883}>Email</Text>
            </View>
          </View>
          <View style={styles.View_3_3368}>
            <Text style={styles.Text_3_3368}>barbaris-1993@gmail.com</Text>
          </View>
        </View>
        <View style={styles.View_3_3369}>
          <View style={styles.View_I3_3369_0_3963}>
            <View style={styles.View_I3_3369_0_3963_0_4368} />
          </View>
          <View style={styles.View_I3_3369_0_3964}>
            <View style={styles.View_I3_3369_0_3964_0_3883}>
              <Text style={styles.Text_I3_3369_0_3964_0_3883}>Name</Text>
            </View>
          </View>
          <View style={styles.View_I3_3369_0_3967}>
            <Text style={styles.Text_I3_3369_0_3967}>Barbara Rose</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_666}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef03/17a3/51a2ec4f97edf5f216464d65db1134b2"
          }}
          style={styles.ImageBackground_0_667}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20d/d0cf/627cc03c5a243d05378d8328c6d353f7"
          }}
          style={styles.ImageBackground_0_668}
        />
        <View style={styles.View_0_670}>
          <View style={styles.View_I0_670_0_4349}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb51/ba58/4a522f3078be9be07ccf83996f7cf890"
              }}
              style={styles.ImageBackground_I0_670_0_4350}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_671}>
        <View style={styles.View_I0_671_0_4221}>
          <View style={styles.View_I0_671_0_4222}>
            <View style={styles.View_I0_671_0_4223}>
              <Text style={styles.Text_I0_671_0_4223}>Sign Up</Text>
            </View>
          </View>
          <View style={styles.View_I0_671_0_4224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
              }}
              style={styles.ImageBackground_I0_671_0_4225}
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
  View_0_657: {
    width: wp("56.53333333333334%"),
    minWidth: wp("56.53333333333334%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("115.43715846994536%")
  },
  View_0_658: {
    width: wp("55.46666666666666%"),
    height: hp("1.092896174863388%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_660: {
    width: wp("56.53333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_660: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_661: {
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
  View_I0_661_0_3847: {
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
  View_I0_661_0_3850: {
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
  View_I0_661_0_3852: {
    width: wp("68.55029296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.576888020833332%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_661_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3380: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.57377049180328%")
  },
  View_3_3341: {
    width: wp("87.2%"),
    height: hp("12.841530054644808%"),
    top: hp("45.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_3342: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3342_0_4368: {
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
  View_3_3343: {
    width: wp("37.333333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_3343: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_3344: {
    width: wp("32.40362752278646%"),
    height: hp("0.546448087431694%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.39817708333333%")
  },
  View_3_3353: {
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
  View_3_3354: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3354_0_4368: {
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
  View_3_3355: {
    width: wp("21.865861002604166%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_3355: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_3356: {
    width: wp("32.40362752278646%"),
    height: hp("0.546448087431694%"),
    top: hp("8.743169398907128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.39817708333333%")
  },
  View_3_3365: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_3366: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3366_0_4368: {
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
  View_3_3367: {
    width: wp("14.48942667643229%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3367_0_3883: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3_3367_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3368: {
    width: wp("69.02236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220572916666667%"),
    top: hp("6.830601092896174%")
  },
  Text_3_3368: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3369: {
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
  View_I3_3369_0_3963: {
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
  View_I3_3369_0_3963_0_4368: {
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
  View_I3_3369_0_3964: {
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
  View_I3_3369_0_3964_0_3883: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I3_3369_0_3964_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3_3369_0_3967: {
    flexGrow: 1,
    width: wp("69.02236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220572916666667%"),
    top: hp("6.830601092896174%")
  },
  Text_I3_3369_0_3967: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_666: {
    width: wp("40.41850179036459%"),
    minWidth: wp("40.41850179036459%"),
    height: hp("21.27513989724748%"),
    minHeight: hp("21.27513989724748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.443880208333336%"),
    top: hp("16.939890710382514%")
  },
  ImageBackground_0_667: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_668: {
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
  View_0_670: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.489453125%"),
    top: hp("15.16393442622951%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_670_0_4349: {
    flexGrow: 1,
    width: wp("3.0666666666666664%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    top: hp("0.8196721311475343%")
  },
  ImageBackground_I0_670_0_4350: {
    width: wp("3.0666666666666664%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_671: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.5136612021857925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_671_0_4221: {
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
  View_I0_671_0_4222: {
    width: wp("54.13333333333333%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("0.13661202185792298%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_671_0_4223: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_671_0_4223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_671_0_4224: {
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
  ImageBackground_I0_671_0_4225: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 923 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
