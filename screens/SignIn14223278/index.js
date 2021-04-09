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
      <View style={styles.View_0_432} />
      <View style={styles.View_0_434}>
        <Text style={styles.Text_0_434}>I don’t have an account. Sign Up </Text>
      </View>
      <View style={styles.View_0_435}>
        <View style={styles.View_I0_435_0_3847}>
          <View style={styles.View_I0_435_0_3850} />
          <View style={styles.View_I0_435_0_3852}>
            <Text style={styles.Text_I0_435_0_3852}>NEXT</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_59}>
        <View style={styles.View_0_437} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cccc/fbbf/dd46f46db4be98b38cb7fe8bdbb88bfa"
          }}
          style={styles.ImageBackground_0_441}
        />
        <View style={styles.View_0_440}>
          <Text style={styles.Text_0_440}>Forgot</Text>
        </View>
        <View style={styles.View_3_36}>
          <Text style={styles.Text_3_36}>Password</Text>
        </View>
      </View>
      <View style={styles.View_3_58}>
        <View style={styles.View_3_54} />
        <View style={styles.View_3_44}>
          <Text style={styles.Text_3_44}>barbaris-1993@gmail.com</Text>
        </View>
        <View style={styles.View_3_51}>
          <Text style={styles.Text_3_51}>Email</Text>
        </View>
      </View>
      <View style={styles.View_0_452}>
        <View style={styles.View_0_453}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f9/2ef6/60431c21fbb807490a16f29e749d3a41"
            }}
            style={styles.ImageBackground_0_455}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd63/31d7/7cb1eae1cefb114877ad4edbe5e73bc4"
            }}
            style={styles.ImageBackground_0_454}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ac/05d1/f3ccadc7b585804223d9e81eb21905e9"
            }}
            style={styles.ImageBackground_0_456}
          />
        </View>
      </View>
      <View style={styles.View_3_28}>
        <View style={styles.View_3_29}>
          <Text style={styles.Text_3_29}>Log In</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
          }}
          style={styles.ImageBackground_3_30}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_432: {
    width: wp("69.06666666666666%"),
    height: hp("1.092896174863388%"),
    top: hp("88.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_434: {
    width: wp("70.39999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("86.6120218579235%")
  },
  Text_0_434: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_435: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("74.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_435_0_3847: {
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
  View_I0_435_0_3850: {
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
  View_I0_435_0_3852: {
    width: wp("68.55029296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.576888020833332%"),
    top: hp("2.868852459016381%")
  },
  Text_I0_435_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_59: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("56.69398907103825%")
  },
  View_0_437: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_441: {
    width: wp("32.53333333333333%"),
    height: hp("0.546448087431694%"),
    top: hp("8.743169398907106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666667%")
  },
  View_0_440: {
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    top: hp("0.2732240437158495%")
  },
  Text_0_440: {
    color: "rgba(150, 94, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_36: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_36: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_58: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.57377049180328%")
  },
  View_3_54: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_44: {
    width: wp("69.02236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220572916666667%"),
    top: hp("6.830601092896174%")
  },
  Text_3_44: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_51: {
    width: wp("13.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_51: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_452: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("16.939890710382514%")
  },
  View_0_453: {
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
  ImageBackground_0_455: {
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
  ImageBackground_0_454: {
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
  ImageBackground_0_456: {
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
  View_3_28: {
    width: wp("72.8%"),
    minWidth: wp("72.8%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("7.103825136612022%")
  },
  View_3_29: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("0.13661202185792298%")
  },
  Text_3_29: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_30: {
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
