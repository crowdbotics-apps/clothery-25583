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
      <View style={styles.View_3_15}>
        <View style={styles.View_3_11}>
          <Text style={styles.Text_3_11}>Create new account</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8647/a09b/8569100f8a11c00b537884db296ea332"
          }}
          style={styles.ImageBackground_0_391}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d745/0cfa/a3c2f4c437c5f04ff619b31f4e963792"
          }}
          style={styles.ImageBackground_0_395}
        />
      </View>
      <View style={styles.View_0_398}>
        <View style={styles.View_3_14}>
          <Text style={styles.Text_3_14}>Login to @barbaris</Text>
        </View>
        <View style={styles.View_0_401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde0/dbb8/ee66304186d5216b65847e2f7f1b4412"
            }}
            style={styles.ImageBackground_0_403}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f66b/825d/7e8c48047fa530ddec40a6329e1261d7"
            }}
            style={styles.ImageBackground_0_402}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b4f/8dc1/1b872650ee5bbe6223ec70d68654d499"
            }}
            style={styles.ImageBackground_0_404}
          />
        </View>
      </View>
      <View style={styles.View_3_16}>
        <View style={styles.View_3_3}>
          <Text style={styles.Text_3_3}>Log In</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
          }}
          style={styles.ImageBackground_3_2768}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3_15: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("68.0327868852459%")
  },
  View_3_11: {
    width: wp("44.800000000000004%"),
    top: hp("28.688524590163937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.399999999999995%")
  },
  Text_3_11: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_391: {
    width: wp("49.6%"),
    height: hp("25.40983606557377%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_395: {
    width: wp("8.721359252929688%"),
    height: hp("4.4679094533451265%"),
    top: hp("10.610911885245898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.312434895833334%")
  },
  View_0_398: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("24.59016393442623%")
  },
  View_3_14: {
    width: wp("41.333333333333336%"),
    top: hp("28.688524590163937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666662%")
  },
  Text_3_14: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_401: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_403: {
    width: wp("49.6%"),
    height: hp("25.40983606557377%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_402: {
    width: wp("49.6%"),
    height: hp("25.40983606557377%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_404: {
    width: wp("49.6%"),
    height: hp("25.40983606557377%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_16: {
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
  View_3_3: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("0.13661202185792298%")
  },
  Text_3_3: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_2768: {
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
