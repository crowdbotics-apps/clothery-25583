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
      <View style={styles.View_0_673}>
        <View style={styles.View_I0_673_0_3963}>
          <View style={styles.View_I0_673_0_3963_0_4368} />
        </View>
        <View style={styles.View_I0_673_0_3964}>
          <View style={styles.View_I0_673_0_3964_0_3883}>
            <Text style={styles.Text_I0_673_0_3964_0_3883}>Email</Text>
          </View>
        </View>
        <View style={styles.View_I0_673_0_3967}>
          <Text style={styles.Text_I0_673_0_3967}>barbaris-1993@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_3_3340}>
        <Text style={styles.Text_3_3340}>
          I have read and accept the privacy policy
        </Text>
      </View>
      <View style={styles.View_0_675} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e385/5bf2/247e1b5d88c89836caa7d675a7573248"
        }}
        style={styles.ImageBackground_0_676}
      />
      <View style={styles.View_0_745}>
        <View style={styles.View_I0_745_0_4221}>
          <View style={styles.View_I0_745_0_4222}>
            <View style={styles.View_I0_745_0_4223}>
              <Text style={styles.Text_I0_745_0_4223}>Newsletter</Text>
            </View>
          </View>
          <View style={styles.View_I0_745_0_4224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
              }}
              style={styles.ImageBackground_I0_745_0_4225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_746}>
        <View style={styles.View_I0_746_0_3847}>
          <View style={styles.View_I0_746_0_3850} />
          <View style={styles.View_I0_746_0_3852}>
            <Text style={styles.Text_I0_746_0_3852}>SUBSCRIBE</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_673: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("67.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_673_0_3963: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.054644808743177%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_673_0_3963_0_4368: {
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
  View_I0_673_0_3964: {
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
  View_I0_673_0_3964_0_3883: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_673_0_3964_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_673_0_3967: {
    flexGrow: 1,
    width: wp("69.02236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220572916666667%"),
    top: hp("6.830601092896174%")
  },
  Text_I0_673_0_3967: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3340: {
    width: wp("74.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666667%"),
    top: hp("84.8360655737705%")
  },
  Text_3_3340: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_675: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("84.8360655737705%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(13, 54, 98, 1)",
    borderWidth: 1
  },
  ImageBackground_0_676: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
    height: hp("35.51912568306011%"),
    minHeight: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("19.94535519125683%")
  },
  View_0_745: {
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
  View_I0_745_0_4221: {
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
  View_I0_745_0_4222: {
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
  View_I0_745_0_4223: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_745_0_4223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_745_0_4224: {
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
  ImageBackground_I0_745_0_4225: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_746: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_746_0_3847: {
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
  View_I0_746_0_3850: {
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
  View_I0_746_0_3852: {
    width: wp("68.55029296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.576888020833332%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_746_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
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
