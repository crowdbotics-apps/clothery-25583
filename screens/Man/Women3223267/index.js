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
      <View style={styles.View_0_186}>
        <View style={styles.View_0_188} />
        <View style={styles.View_0_187} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d746/59ba/b1d61ea41819df52d45286f32ba05497"
          }}
          style={styles.ImageBackground_0_189}
        />
        <View style={styles.View_3_132}>
          <Text style={styles.Text_3_132}>For Her</Text>
        </View>
      </View>
      <View style={styles.View_0_191}>
        <View style={styles.View_0_193} />
        <View style={styles.View_0_192} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/587b/caf8/496e236bd985732dfb1aab016a79e443"
          }}
          style={styles.ImageBackground_0_194}
        />
        <View style={styles.View_3_130}>
          <Text style={styles.Text_3_130}>For Him</Text>
        </View>
      </View>
      <View style={styles.View_0_196}>
        <View style={styles.View_I0_196_0_4001}>
          <View style={styles.View_I0_196_0_4002}>
            <View style={styles.View_I0_196_0_4003}>
              <View style={styles.View_I0_196_0_4003_0_3841}>
                <View style={styles.View_I0_196_0_4003_0_3841_0_4565}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                    }}
                    style={styles.ImageBackground_I0_196_0_4003_0_3841_0_4569}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                    }}
                    style={styles.ImageBackground_I0_196_0_4003_0_3841_0_4570}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                    }}
                    style={styles.ImageBackground_I0_196_0_4003_0_3841_0_4571}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_196_0_4004}>
            <View style={styles.View_I0_196_0_4004_0_3985}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e25/ef3d/0eb8e8eeaec052344eb92bf65ca94bfb"
                }}
                style={styles.ImageBackground_I0_196_0_4004_0_3989}
              />
            </View>
          </View>
          <View style={styles.View_I0_196_0_4006}>
            <Text style={styles.Text_I0_196_0_4006}>clother</Text>
          </View>
          <View style={styles.View_I0_196_0_4007}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ab5/4ea5/57d407c5a5ed4714bded18362abf37b2"
              }}
              style={styles.ImageBackground_I0_196_0_4007_0_3997}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a4/46a1/39cb71d6d7cee15787de55b18e12df8a"
              }}
              style={styles.ImageBackground_I0_196_0_4007_0_3998}
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
  View_0_186: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("44.26229508196721%"),
    minHeight: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("61.20218579234973%")
  },
  View_0_188: {
    width: wp("87.2%"),
    height: hp("44.26229508196721%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 231, 226, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_187: {
    width: wp("87.2%"),
    height: hp("44.26229508196721%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 231, 226, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_189: {
    width: wp("87.2%"),
    height: hp("44.26229508196721%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_132: {
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666666%"),
    top: hp("5.737704918032783%")
  },
  Text_3_132: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_191: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("44.26229508196721%"),
    minHeight: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.071038251366119%")
  },
  View_0_193: {
    width: wp("87.2%"),
    height: hp("44.26229508196721%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_192: {
    width: wp("87.2%"),
    height: hp("44.26229508196721%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_194: {
    width: wp("87.2%"),
    height: hp("44.26229508196721%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_130: {
    width: wp("30.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.400000000000006%"),
    top: hp("5.737704918032787%")
  },
  Text_3_130: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_196: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("6.420765027322404%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_196_0_4001: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7999999999999998%"),
    top: hp("0.6830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_196_0_4002: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%"),
    top: hp("0.13661202185792298%")
  },
  View_I0_196_0_4003: {
    width: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_196_0_4003_0_3841: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.13661202185792387%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_196_0_4003_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9600260416666657%"),
    top: hp("0.4439890710382519%")
  },
  ImageBackground_I0_196_0_4003_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_196_0_4003_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.47814207650273133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_196_0_4003_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.13333333333334%")
  },
  View_I0_196_0_4004: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_196_0_4004_0_3985: {
    flexGrow: 1,
    width: wp("4.6%"),
    height: hp("1.1782788188079667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7666666666666657%"),
    top: hp("1.1128409964139339%")
  },
  ImageBackground_I0_196_0_4004_0_3989: {
    width: wp("4.6%"),
    height: hp("1.1782788188079667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_196_0_4006: {
    width: wp("30.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I0_196_0_4006: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_196_0_4007: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_196_0_4007_0_3997: {
    flexGrow: 1,
    width: wp("4.472222391764323%"),
    height: hp("2.29109753676451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5749999999999886%"),
    top: hp("0.29456967213114815%")
  },
  ImageBackground_I0_196_0_4007_0_3998: {
    flexGrow: 1,
    width: wp("1.4949996948242188%"),
    height: hp("0.7658812517676848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.063346354166654%"),
    top: hp("2.081599001024591%")
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
