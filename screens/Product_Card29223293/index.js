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
      <View style={styles.View_0_949}>
        <View style={styles.View_0_950}>
          <View style={styles.View_0_952} />
          <View style={styles.View_0_951} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf59/6820/1fc534cf47388fbdf07b0cc6e22a748d"
            }}
            style={styles.ImageBackground_0_953}
          />
        </View>
        <View style={styles.View_0_954}>
          <View style={styles.View_0_956} />
          <View style={styles.View_0_955} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66b3/c3a1/e1377079882397e123b478a8962d4321"
            }}
            style={styles.ImageBackground_0_957}
          />
        </View>
        <View style={styles.View_0_958}>
          <View style={styles.View_0_960} />
          <View style={styles.View_0_959} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c53/a9dc/a220475c2994598d093f36fcdcfd96b2"
            }}
            style={styles.ImageBackground_0_961}
          />
        </View>
        <View style={styles.View_0_962}>
          <View style={styles.View_I0_962_0_3858}>
            <Text style={styles.Text_I0_962_0_3858}>You may also like</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_963}>
        <View style={styles.View_0_964}>
          <View style={styles.View_0_966} />
          <View style={styles.View_0_965} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1005/80c5/5db945eeeacb07a09610bfaa12bc9715"
            }}
            style={styles.ImageBackground_0_967}
          />
        </View>
        <View style={styles.View_0_968}>
          <View style={styles.View_0_970} />
          <View style={styles.View_0_969} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8285/d544/c0c251c855dbfbc564db7c2ecefb0093"
            }}
            style={styles.ImageBackground_0_971}
          />
        </View>
        <View style={styles.View_0_972}>
          <View style={styles.View_0_974} />
          <View style={styles.View_0_973} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d9/4acc/087b75e4b6d53d4c73e28879b92885e9"
            }}
            style={styles.ImageBackground_0_975}
          />
        </View>
        <View style={styles.View_0_976}>
          <View style={styles.View_I0_976_0_3858}>
            <Text style={styles.Text_I0_976_0_3858}>Complete your look</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3105}>
        <Text style={styles.Text_3_3105}>
          Unstructured design. Long design. Serge fabric. Lapel-collar. Long
          buttoned sleeve. Dart detail. Adjustable belt.
        </Text>
      </View>
      <View style={styles.View_0_978}>
        <View style={styles.View_I0_978_0_3847}>
          <View style={styles.View_I0_978_0_3850} />
          <View style={styles.View_I0_978_0_3852}>
            <Text style={styles.Text_I0_978_0_3852}>ADD</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_979}>
        <View style={styles.View_I0_979_0_3885}>
          <View style={styles.View_I0_979_0_3886}>
            <View style={styles.View_I0_979_0_3888} />
            <View style={styles.View_I0_979_0_3887} />
            <View style={styles.View_I0_979_0_3889}>
              <View style={styles.View_I0_979_0_3889_0_4300} />
            </View>
          </View>
          <View style={styles.View_I0_979_3_1451}>
            <Text style={styles.Text_I0_979_3_1451}>Orange</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eea0/8b25/4f83e5614809b817072fc07a38124367"
            }}
            style={styles.ImageBackground_I0_979_0_3892}
          />
        </View>
      </View>
      <View style={styles.View_3_3102}>
        <Text style={styles.Text_3_3102}>$120</Text>
      </View>
      <View style={styles.View_3_3103}>
        <Text style={styles.Text_3_3103}>Belt suit blazer</Text>
      </View>
      <View style={styles.View_0_982}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
          }}
          style={styles.ImageBackground_0_983}
        />
        <View style={styles.View_0_984}>
          <View style={styles.View_I0_984_0_3841}>
            <View style={styles.View_I0_984_0_3841_0_4565}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                }}
                style={styles.ImageBackground_I0_984_0_3841_0_4569}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                }}
                style={styles.ImageBackground_I0_984_0_3841_0_4570}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                }}
                style={styles.ImageBackground_I0_984_0_3841_0_4571}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_949: {
    width: wp("117.86666666666667%"),
    minWidth: wp("117.86666666666667%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("97.40437158469946%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_950: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("7.103825136612031%")
  },
  View_0_952: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_951: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_953: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_954: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612031%")
  },
  View_0_956: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_955: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_957: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_958: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.00000000000001%"),
    top: hp("7.103825136612031%")
  },
  View_0_960: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_959: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_961: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_962: {
    width: wp("72.26666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_962_0_3858: {
    flexGrow: 1,
    width: wp("72.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  Text_I0_962_0_3858: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_963: {
    width: wp("117.86666666666667%"),
    minWidth: wp("117.86666666666667%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("57.92349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_964: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("7.103825136612016%")
  },
  View_0_966: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_965: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_967: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_968: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.00000000000001%"),
    top: hp("7.103825136612016%")
  },
  View_0_970: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_969: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_971: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_972: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612016%")
  },
  View_0_974: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_973: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_975: {
    width: wp("37.86666666666667%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_976: {
    width: wp("72.26666666666667%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_976_0_3858: {
    flexGrow: 1,
    width: wp("72.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557377783%")
  },
  Text_I0_976_0_3858: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3105: {
    width: wp("88.8%"),
    top: hp("41.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%")
  },
  Text_3_3105: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_978: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("27.322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_978_0_3847: {
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
  View_I0_978_0_3850: {
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
  View_I0_978_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("2.8688524590163915%")
  },
  Text_I0_978_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_979: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("27.322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_979_0_3885: {
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
  View_I0_979_0_3886: {
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
  View_I0_979_0_3888: {
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
  View_I0_979_0_3887: {
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
  View_I0_979_0_3889: {
    width: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 158, 192, 1)"
  },
  View_I0_979_0_3889_0_4300: {
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
  View_I0_979_3_1451: {
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426172%")
  },
  Text_I0_979_3_1451: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_979_0_3892: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%")
  },
  View_3_3102: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("18.30601092896175%")
  },
  Text_3_3102: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3103: {
    width: wp("37.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.207650273224044%")
  },
  Text_3_3103: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_982: {
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
  ImageBackground_0_983: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_984: {
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
  View_I0_984_0_3841: {
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
  View_I0_984_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9600260416666799%"),
    top: hp("0.4439890710382519%")
  },
  ImageBackground_I0_984_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_984_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.47814207650273133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_984_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1333333333333258%")
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
