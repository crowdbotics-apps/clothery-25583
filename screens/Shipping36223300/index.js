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
      <View style={styles.View_0_1562}>
        <View style={styles.View_I0_1562_0_3847}>
          <View style={styles.View_I0_1562_0_3850} />
          <View style={styles.View_I0_1562_0_3852}>
            <Text style={styles.Text_I0_1562_0_3852}>DONE</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1563}>
        <View style={styles.View_3_3225}>
          <Text style={styles.Text_3_3225}>Edit</Text>
        </View>
        <View style={styles.View_0_1565}>
          <View style={styles.View_0_1567}>
            <View style={styles.View_3_2347} />
            <View style={styles.View_0_1568}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c28/ca49/71489fea319700b2b5de50adde26a8ee"
                }}
                style={styles.ImageBackground_I0_1568_0_4139}
              />
            </View>
            <View style={styles.View_3_3210}>
              <Text style={styles.Text_3_3210}>Comment</Text>
            </View>
          </View>
          <View style={styles.View_0_1570}>
            <View style={styles.View_0_1571}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9688/d5cf/410a4a5024de23c1090add71e7f70615"
                }}
                style={styles.ImageBackground_I0_1571_0_4144}
              />
            </View>
            <View style={styles.View_3_3208}>
              <Text style={styles.Text_3_3208}>Address</Text>
            </View>
          </View>
          <View style={styles.View_0_1573}>
            <View style={styles.View_I0_1573_0_4166}>
              <View style={styles.View_I0_1573_0_4167} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9433/b6ca/131da34d58131bebde54238d5d630928"
                }}
                style={styles.ImageBackground_I0_1573_0_4168}
              />
              <View style={styles.View_I0_1573_3_3154}>
                <View style={styles.View_I0_1573_3_3155}>
                  <Text style={styles.Text_I0_1573_3_3155}>Address</Text>
                </View>
              </View>
              <View style={styles.View_I0_1573_0_4170}>
                <View style={styles.View_I0_1573_0_4170_0_4099}>
                  <Text style={styles.Text_I0_1573_0_4170_0_4099}>
                    NY, United States 300 Post Street 122422
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_1574}>
            <View style={styles.View_0_1575} />
            <View style={styles.View_0_1576}>
              <View style={styles.View_I0_1576_0_4132}>
                <View style={styles.View_I0_1576_0_4133}>
                  <View style={styles.View_I0_1576_0_4133_0_4483} />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab93/4e04/f705a02db17ab0279f20ad7380766456"
                  }}
                  style={styles.ImageBackground_I0_1576_3_1600}
                />
              </View>
            </View>
            <View style={styles.View_3_3206}>
              <Text style={styles.Text_3_3206}>Shipping method</Text>
            </View>
            <View style={styles.View_3_3204}>
              <Text style={styles.Text_3_3204}>
                Standart shipping (+$10.85)
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3_3202}>
          <Text style={styles.Text_3_3202}>Details</Text>
        </View>
      </View>
      <View style={styles.View_0_1580}>
        <View style={styles.View_0_1581}>
          <View style={styles.View_I0_1581_0_4154}>
            <View style={styles.View_I0_1581_0_4155} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4bd/94ce/f3801e5c07e5ce1d23af615700378566"
          }}
          style={styles.ImageBackground_0_1582}
        />
        <View style={styles.View_0_1583}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c2f/364c/1594bcb0947bcead182921d4a6cce606"
            }}
            style={styles.ImageBackground_I0_1583_0_4089}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f3a/8487/16aecfc02fd18a2194111e46b44e6dcd"
            }}
            style={styles.ImageBackground_I0_1583_0_4090}
          />
        </View>
        <View style={styles.View_0_1584}>
          <View style={styles.View_0_1585}>
            <View style={styles.View_I0_1585_0_4157}>
              <View style={styles.View_I0_1585_0_4159} />
            </View>
          </View>
          <View style={styles.View_0_1587}>
            <View style={styles.View_I0_1587_0_4101}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eaa/77af/82ee35e223e607259bb5402e97f84335"
                }}
                style={styles.ImageBackground_I0_1587_0_4104}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e423/0382/f8413546cd15292e13cf49fef595456a"
                }}
                style={styles.ImageBackground_I0_1587_0_4105}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e423/0382/f8413546cd15292e13cf49fef595456a"
                }}
                style={styles.ImageBackground_I0_1587_0_4106}
              />
            </View>
          </View>
          <View style={styles.View_3_3214}>
            <Text style={styles.Text_3_3214}>Shipping</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
        }}
        style={styles.ImageBackground_3_2327}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1562: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1562_0_3847: {
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
  View_I0_1562_0_3850: {
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
  View_I0_1562_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_1562_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1563: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("53.68852459016394%"),
    minHeight: hp("53.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("29.508196721311474%")
  },
  View_3_3225: {
    width: wp("9.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%")
  },
  Text_3_3225: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1565: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("46.58469945355191%"),
    minHeight: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("7.103825136612027%")
  },
  View_0_1567: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("46.58469945355191%"),
    minHeight: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_2347: {
    width: wp("87.2%"),
    height: hp("46.58469945355191%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1568: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("37.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333325%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1568_0_4139: {
    flexGrow: 1,
    width: wp("5.200353495279948%"),
    height: hp("2.6641157806896776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.599609375%"),
    top: hp("0.3073770491803174%")
  },
  View_3_3210: {
    width: wp("36.266666666666666%"),
    top: hp("37.16527386441256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666667%")
  },
  Text_3_3210: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1570: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    top: hp("37.158469945355186%")
  },
  View_0_1571: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1571_0_4144: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_3208: {
    width: wp("16.53333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%")
  },
  Text_3_3208: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1573: {
    width: wp("78.66666666666666%"),
    height: hp("15.710382513661203%"),
    top: hp("17.349726775956277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1573_0_4166: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_1573_0_4167: {
    width: wp("78.66666666666666%"),
    height: hp("15.710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1573_0_4168: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("6.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%")
  },
  View_I0_1573_3_3154: {
    width: wp("36.266666666666666%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1573_3_3155: {
    width: wp("36.266666666666666%"),
    top: hp("0.14341594091530396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I0_1573_3_3155: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1573_0_4170: {
    width: wp("56.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("7.103825136612016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1573_0_4170_0_4099: {
    flexGrow: 1,
    width: wp("41.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185793542%")
  },
  Text_I0_1573_0_4170_0_4099: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1574: {
    width: wp("78.66666666666666%"),
    height: hp("12.978142076502733%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  View_0_1575: {
    width: wp("78.66666666666666%"),
    height: hp("12.978142076502733%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1576: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("2.868852459016402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1576_0_4132: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1576_0_4133: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1576_0_4133_0_4483: {
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
  ImageBackground_I0_1576_3_1600: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%")
  },
  View_3_3206: {
    width: wp("36.266666666666666%"),
    top: hp("2.8756563780737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%")
  },
  Text_3_3206: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3204: {
    width: wp("51.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("7.786885245901644%")
  },
  Text_3_3204: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3202: {
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_3_3202: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1580: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.266666666666667%"),
    top: hp("14.412568306010929%")
  },
  View_0_1581: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1581_0_4154: {
    flexGrow: 1,
    width: wp("86.93333333333332%"),
    height: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.13661202185792298%")
  },
  View_I0_1581_0_4155: {
    width: wp("86.93333333333332%"),
    height: hp("9.426229508196721%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_1582: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.2103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.2%")
  },
  View_0_1583: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.8%"),
    top: hp("3.2103825136612016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1583_0_4089: {
    flexGrow: 1,
    width: wp("5.466666666666667%"),
    height: hp("2.1174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%"),
    top: hp("0.580601092896174%")
  },
  ImageBackground_I0_1583_0_4090: {
    flexGrow: 1,
    width: wp("5.466666666666667%"),
    height: hp("0.20491803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%"),
    top: hp("1.3319672131147549%")
  },
  View_0_1584: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9999999999999991%"),
    top: hp("0.8879781420765038%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1585: {
    width: wp("36.8%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1585_0_4157: {
    flexGrow: 1,
    width: wp("36.8%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1585_0_4159: {
    width: wp("36.8%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 235, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1587: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1587_0_4101: {
    flexGrow: 1,
    width: wp("5.2%"),
    height: hp("2.440690212562436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5999999999999996%"),
    top: hp("0.4438556608606561%")
  },
  ImageBackground_I0_1587_0_4104: {
    width: wp("5.2%"),
    height: hp("2.440690212562436%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1587_0_4105: {
    width: wp("0.4%"),
    height: hp("1.9932935798103042%"),
    top: hp("0.00013341017759316287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5272135416666668%")
  },
  ImageBackground_I0_1587_0_4106: {
    width: wp("0.4%"),
    height: hp("1.9932935798103042%"),
    top: hp("0.4472576203893439%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.272786458333334%")
  },
  View_3_3214: {
    width: wp("21.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.06666666666667%"),
    top: hp("2.1857923497267766%")
  },
  Text_3_3214: {
    color: "rgba(255, 45, 135, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_2327: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
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
