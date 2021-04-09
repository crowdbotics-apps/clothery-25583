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
      <View style={styles.View_0_852}>
        <View style={styles.View_3_128}>
          <Text style={styles.Text_3_128}>
            Be inspired and discover something new to renew your closet
          </Text>
        </View>
        <View style={styles.View_0_853}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f30/1db4/802a5303e37a2055ac80fec140d07446"
            }}
            style={styles.ImageBackground_0_855}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a483/7914/cde285f82afcafcb80fcfe4c05e4053d"
            }}
            style={styles.ImageBackground_0_854}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bdf/cedb/d947a05ba7038ed7120d2786bb0e644e"
            }}
            style={styles.ImageBackground_0_856}
          />
        </View>
        <View style={styles.View_0_857}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5262/a032/a28df093c5d146c035f88b6eb559860e"
            }}
            style={styles.ImageBackground_I0_857_0_4335}
          />
        </View>
      </View>
      <View style={styles.View_3_119}>
        <Text style={styles.Text_3_119}>Hello!</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_852: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("42.89617486338798%"),
    minHeight: hp("42.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("29.6448087431694%")
  },
  View_3_128: {
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.69945355191256%")
  },
  Text_3_128: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_853: {
    width: wp("49.063785807291666%"),
    minWidth: wp("49.063785807291666%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.752408854166664%"),
    top: hp("0%")
  },
  ImageBackground_0_855: {
    width: wp("49.063785807291666%"),
    minWidth: wp("49.063785807291666%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_854: {
    width: wp("49.063785807291666%"),
    minWidth: wp("49.063785807291666%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_856: {
    width: wp("49.063785807291666%"),
    minWidth: wp("49.063785807291666%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_857: {
    width: wp("13.137297566731771%"),
    minWidth: wp("13.137297566731771%"),
    height: hp("6.6648749054455365%"),
    minHeight: hp("6.6648749054455365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.794596354166664%"),
    top: hp("18.744930413251367%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_857_0_4335: {
    flexGrow: 1,
    width: wp("12.869189453125%"),
    height: hp("6.6648749054455365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24973958333333002%"),
    top: hp("0%")
  },
  View_3_119: {
    width: wp("21.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%"),
    top: hp("18.579234972677597%")
  },
  Text_3_119: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
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
