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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24c2/f0ac/844ce68990bf5f427ac5527ea6ae40be"
        }}
        style={styles.ImageBackground_0_906}
      />
      <View style={styles.View_0_907}>
        <View style={styles.View_0_908}>
          <View style={styles.View_0_909} />
          <View style={styles.View_0_911} />
          <View style={styles.View_0_910} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c951/ff7a/5066cae3f079a200ac11c7e0625789e1"
            }}
            style={styles.ImageBackground_0_912}
          />
        </View>
        <View style={styles.View_0_913}>
          <View style={styles.View_I0_913_0_4246}>
            <View style={styles.View_I0_913_0_4247}>
              <View style={styles.View_I0_913_0_4247_0_4483} />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a2c/aeec/b3d211884cf869a547e1e819d061303d"
            }}
            style={styles.ImageBackground_I0_913_3_1642}
          />
        </View>
        <View style={styles.View_3_3388}>
          <Text style={styles.Text_3_3388}>$15.80</Text>
        </View>
        <View style={styles.View_3_3386}>
          <Text style={styles.Text_3_3386}>Fitted lace top</Text>
        </View>
      </View>
      <View style={styles.View_0_916}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5ce/60a6/5b415d30ded4841d6baaba87902d9555"
          }}
          style={styles.ImageBackground_0_919}
        />
        <View style={styles.View_0_922} />
      </View>
      <View style={styles.View_0_924}>
        <Text style={styles.Text_0_924}>Scanning</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_0_906: {
    width: wp("279.6521809895833%"),
    minWidth: wp("279.6521809895833%"),
    height: hp("183.0601092896175%"),
    minHeight: hp("183.0601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-89.6927734375%"),
    top: hp("-4.371584699453552%")
  },
  View_0_907: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("92.34972677595628%")
  },
  View_0_908: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_909: {
    width: wp("87.2%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_911: {
    width: wp("11.466666666666667%"),
    height: hp("11.081098337642482%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_910: {
    width: wp("11.466666666666667%"),
    height: hp("11.081098337642482%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_912: {
    width: wp("11.466666666666667%"),
    height: hp("11.081098337642482%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_913: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_913_0_4246: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_913_0_4247: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_913_0_4247_0_4483: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.088932704404403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 225, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_913_3_1642: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("2.1857923497267677%")
  },
  View_3_3388: {
    width: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333327%"),
    top: hp("7.923497267759558%")
  },
  Text_3_3388: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3386: {
    width: wp("43.46666666666666%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333327%")
  },
  Text_3_3386: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_916: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("44.67213114754098%"),
    minHeight: hp("44.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.262295081967213%")
  },
  ImageBackground_0_919: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("44.67213114754098%"),
    minHeight: hp("44.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_922: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.349726775956288%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 52,
    borderBottomRightRadius: 52
  },
  View_0_924: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("5.05464480874317%")
  },
  Text_0_924: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
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
