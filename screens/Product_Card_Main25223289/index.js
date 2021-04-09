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
      <View style={styles.View_0_860}>
        <View style={styles.View_I0_860_0_3847}>
          <View style={styles.View_I0_860_0_3850} />
          <View style={styles.View_I0_860_0_3852}>
            <Text style={styles.Text_I0_860_0_3852}>ADD</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_861}>
        <View style={styles.View_I0_861_0_3885}>
          <View style={styles.View_I0_861_0_3886}>
            <View style={styles.View_I0_861_0_3888} />
            <View style={styles.View_I0_861_0_3887} />
            <View style={styles.View_I0_861_0_3889}>
              <View style={styles.View_I0_861_0_3889_0_4300} />
            </View>
          </View>
          <View style={styles.View_I0_861_3_1451}>
            <Text style={styles.Text_I0_861_3_1451}>Orange</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eea0/8b25/4f83e5614809b817072fc07a38124367"
            }}
            style={styles.ImageBackground_I0_861_0_3892}
          />
        </View>
      </View>
      <View style={styles.View_0_864}>
        <View style={styles.View_0_865} />
        <View style={styles.View_0_866}>
          <View style={styles.View_0_868} />
          <View style={styles.View_0_867} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e56/97ef/b538b051e35706e99c21994299a676c6"
            }}
            style={styles.ImageBackground_0_869}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5dc/f9f9/ed630a2b385f4a1c2b955399f482de2a"
            }}
            style={styles.ImageBackground_0_870}
          />
        </View>
        <View style={styles.View_0_871} />
      </View>
      <View style={styles.View_0_872}>
        <View style={styles.View_I0_872_0_3862}>
          <View style={styles.View_I0_872_0_3865} />
          <View style={styles.View_I0_872_3_1696}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cf3/3d70/25c2f9b3bfd46f267da1aa5c3798cbb3"
              }}
              style={styles.ImageBackground_I0_872_3_1697}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_873}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
          }}
          style={styles.ImageBackground_0_874}
        />
        <View style={styles.View_0_875}>
          <View style={styles.View_I0_875_0_3841}>
            <View style={styles.View_I0_875_0_3841_0_4565}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                }}
                style={styles.ImageBackground_I0_875_0_3841_0_4569}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                }}
                style={styles.ImageBackground_I0_875_0_3841_0_4570}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                }}
                style={styles.ImageBackground_I0_875_0_3841_0_4571}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3057}>
        <Text style={styles.Text_3_3057}>$120</Text>
      </View>
      <View style={styles.View_3_3058}>
        <Text style={styles.Text_3_3058}>Belt suit blazer</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_860: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("95.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_860_0_3847: {
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
  View_I0_860_0_3850: {
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
  View_I0_860_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_860_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_861: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("95.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_861_0_3885: {
    flexGrow: 1,
    width: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_861_0_3886: {
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
  View_I0_861_0_3888: {
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
  View_I0_861_0_3887: {
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
  View_I0_861_0_3889: {
    width: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 158, 192, 1)"
  },
  View_I0_861_0_3889_0_4300: {
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
  View_I0_861_3_1451: {
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426243%")
  },
  Text_I0_861_3_1451: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_861_0_3892: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%")
  },
  View_0_864: {
    width: wp("268%"),
    minWidth: wp("268%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-84%"),
    top: hp("13.797814207650273%")
  },
  View_0_865: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("54.78142076502732%"),
    minHeight: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("180.8%"),
    top: hp("3.142076502732241%"),
    backgroundColor: "rgba(233, 233, 231, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_866: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.4%"),
    top: hp("0%")
  },
  View_0_868: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_867: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_869: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_870: {
    width: wp("138.058837890625%"),
    minWidth: wp("138.058837890625%"),
    height: hp("98.90710382513662%"),
    minHeight: hp("98.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.400390625%"),
    top: hp("-4.508196721311474%")
  },
  View_0_871: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("54.78142076502732%"),
    minHeight: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.142076502732241%"),
    backgroundColor: "rgba(233, 233, 231, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_872: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("70.49180327868852%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_872_0_3862: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_872_0_3865: {
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 206, 47, 1)",
    borderColor: "rgba(209, 209, 209, 1)",
    borderWidth: 1
  },
  View_I0_872_3_1696: {
    width: wp("9.066666666666666%"),
    height: hp("4.781420765027322%"),
    top: hp("2.037773757684434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_872_3_1697: {
    width: wp("6.611110941569011%"),
    height: hp("3.0225409836065573%"),
    top: hp("0.8338803150614638%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2277343749999972%")
  },
  View_0_873: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_0_874: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_875: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_875_0_3841: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("0.13661202185792387%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_875_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9600260416666799%"),
    top: hp("0.4439890710382519%")
  },
  ImageBackground_I0_875_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_875_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.47814207650273133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_875_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1333333333333258%")
  },
  View_3_3057: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("86.88524590163934%")
  },
  Text_3_3057: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3058: {
    width: wp("37.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("82.78688524590164%")
  },
  Text_3_3058: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 15,
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
