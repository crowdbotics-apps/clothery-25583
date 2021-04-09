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
      <View style={styles.View_0_1590}>
        <View style={styles.View_I0_1590_0_3847}>
          <View style={styles.View_I0_1590_0_3850} />
          <View style={styles.View_I0_1590_0_3852}>
            <Text style={styles.Text_I0_1590_0_3852}>PAY NOW</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1591}>
        <View style={styles.View_3_3230}>
          <Text style={styles.Text_3_3230}>130</Text>
        </View>
        <View style={styles.View_3_3232}>
          <Text style={styles.Text_3_3232}>$</Text>
        </View>
        <View style={styles.View_3_3228}>
          <Text style={styles.Text_3_3228}>Total</Text>
        </View>
      </View>
      <View style={styles.View_0_1595}>
        <View style={styles.View_3_2341}>
          <View style={styles.View_3_2342} />
        </View>
        <View style={styles.View_0_1597}>
          <View style={styles.View_I0_1597_0_4172}>
            <View style={styles.View_I0_1597_0_4173}>
              <View style={styles.View_I0_1597_0_4174} />
              <View style={styles.View_I0_1597_0_4175}>
                <View style={styles.View_I0_1597_0_4175_0_4316}>
                  <View style={styles.View_I0_1597_0_4175_0_4317}>
                    <View style={styles.View_I0_1597_0_4175_0_4318}>
                      <View style={styles.View_I0_1597_0_4175_0_4318_0_4483} />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbef/0436/bd2bd6c1cb5374f4dc61e04fe6c54bfe"
                      }}
                      style={styles.ImageBackground_I0_1597_0_4175_0_4319}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I0_1597_0_4176}>
                <View style={styles.View_I0_1597_0_4176_0_3927}>
                  <Text style={styles.Text_I0_1597_0_4176_0_3927}>
                    Mastercard
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I0_1597_0_4177}>
              <View style={styles.View_I0_1597_0_4178} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac73/1015/a7386f884a399885c3b5e80deaf549a1"
                }}
                style={styles.ImageBackground_I0_1597_0_4179}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/791a/d733/d4815da6b202795d56c7c12a384db242"
                }}
                style={styles.ImageBackground_I0_1597_0_4180}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5efa/ee34/ea70292192199b4a546f206c5fb1e989"
              }}
              style={styles.ImageBackground_I0_1597_0_4181}
            />
            <View style={styles.View_I0_1597_0_4186}>
              <View style={styles.View_I0_1597_0_4186_0_3923}>
                <Text style={styles.Text_I0_1597_0_4186_0_3923}>3218</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1598}>
          <View style={styles.View_0_1599}>
            <View style={styles.View_0_1600} />
            <View style={styles.View_0_1601}>
              <View style={styles.View_I0_1601_3_1612}>
                <View style={styles.View_I0_1601_0_4163}>
                  <View style={styles.View_I0_1601_0_4163_0_4483} />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef0e/c793/bcfe26e348c0f653790f2a1911977c58"
                  }}
                  style={styles.ImageBackground_I0_1601_3_1615}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f081/c38f/f1b74c0176ca7e32a21d1a25eca60f35"
                  }}
                  style={styles.ImageBackground_I0_1601_3_1616}
                />
              </View>
            </View>
            <View style={styles.View_3_3151}>
              <Text style={styles.Text_3_3151}>Add new card</Text>
            </View>
            <View style={styles.View_3_3149}>
              <Text style={styles.Text_3_3149}>Mastercard / Visa / Paypal</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3223}>
        <Text style={styles.Text_3_3223}>Payment info</Text>
      </View>
      <View style={styles.View_0_1605}>
        <View style={styles.View_0_1606}>
          <View style={styles.View_I0_1606_0_4154}>
            <View style={styles.View_I0_1606_0_4155} />
          </View>
        </View>
        <View style={styles.View_0_1607}>
          <View style={styles.View_0_1608}>
            <View style={styles.View_I0_1608_0_4157}>
              <View style={styles.View_I0_1608_0_4159} />
            </View>
          </View>
          <View style={styles.View_0_1609}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9584/8cb1/52814b2042b8c8112377f4577034cb22"
              }}
              style={styles.ImageBackground_I0_1609_0_4089}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/065f/bd69/2b03ffee0b4a8b49aa6328c829359627"
              }}
              style={styles.ImageBackground_I0_1609_0_4090}
            />
          </View>
          <View style={styles.View_3_3212}>
            <Text style={styles.Text_3_3212}>Payment</Text>
          </View>
        </View>
        <View style={styles.View_0_1611}>
          <View style={styles.View_I0_1611_0_4101}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e8e/0ecd/e36bedbbbdf35f4d624391ffcc21e15a"
              }}
              style={styles.ImageBackground_I0_1611_0_4104}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/3f31/51bcbb3ffcdd82b311de80c368fc906a"
              }}
              style={styles.ImageBackground_I0_1611_0_4105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/3f31/51bcbb3ffcdd82b311de80c368fc906a"
              }}
              style={styles.ImageBackground_I0_1611_0_4106}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4bd/94ce/f3801e5c07e5ce1d23af615700378566"
          }}
          style={styles.ImageBackground_0_1612}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
        }}
        style={styles.ImageBackground_0_1613}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1590: {
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
  View_I0_1590_0_3847: {
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
  View_I0_1590_0_3850: {
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
  View_I0_1590_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_1590_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1591: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("88.52459016393442%")
  },
  View_3_3230: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.40983606557378494%")
  },
  Text_3_3230: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3232: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666665%"),
    top: hp("0.8196721311475414%")
  },
  Text_3_3232: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3228: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_3228: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1595: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("36.0655737704918%")
  },
  View_3_2341: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_2342: {
    width: wp("87.2%"),
    height: hp("32.51366120218579%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1597: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333325%"),
    top: hp("17.349726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1597_0_4172: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_1597_0_4173: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1597_0_4174: {
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
  View_I0_1597_0_4175: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("2.868852459016388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.199999999999996%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1597_0_4175_0_4316: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1597_0_4175_0_4317: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1597_0_4175_0_4318: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1597_0_4175_0_4318_0_4483: {
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
  ImageBackground_I0_1597_0_4175_0_4319: {
    width: wp("3.4109181722005206%"),
    height: hp("1.1858478921358704%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  View_I0_1597_0_4176: {
    width: wp("36.266666666666666%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1597_0_4176_0_3927: {
    flexGrow: 1,
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.14341594091530396%")
  },
  Text_I0_1597_0_4176_0_3927: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1597_0_4177: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("6.967213114754102%")
  },
  View_I0_1597_0_4178: {
    width: wp("7.733333333333333%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(43, 43, 43, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1597_0_4179: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  ImageBackground_I0_1597_0_4180: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%")
  },
  ImageBackground_I0_1597_0_4181: {
    width: wp("6.4%"),
    height: hp("0.4098360655737705%"),
    top: hp("7.786885245901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%")
  },
  View_I0_1597_0_4186: {
    width: wp("45.86666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333334%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1597_0_4186_0_3923: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%")
  },
  Text_I0_1597_0_4186_0_3923: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1598: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.2231471994535568%")
  },
  View_0_1599: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1600: {
    width: wp("78.66666666666666%"),
    height: hp("13.199990694640112%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1601: {
    width: wp("9.866666666666667%"),
    height: hp("7.240437158469945%"),
    top: hp("2.917880699282783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599999999999998%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1601_3_1612: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1601_0_4163: {
    width: wp("9.866666666666667%"),
    height: hp("7.240437158469945%"),
    top: hp("-2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.8666666666666671%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1601_0_4163_0_4483: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.2252581028339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 225, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1601_3_1615: {
    width: wp("0.4%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%")
  },
  ImageBackground_I0_1601_3_1616: {
    width: wp("3.0666666666666664%"),
    height: hp("0.20491803278688525%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_3_3151: {
    width: wp("36.266666666666666%"),
    top: hp("2.838301528346989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.799999999999997%")
  },
  Text_3_3151: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3149: {
    width: wp("46.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("7.339694330601091%")
  },
  Text_3_3149: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3223: {
    width: wp("75.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("29.918032786885245%")
  },
  Text_3_3223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1605: {
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
  View_0_1606: {
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
  View_I0_1606_0_4154: {
    flexGrow: 1,
    width: wp("86.93333333333332%"),
    height: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.13661202185792298%")
  },
  View_I0_1606_0_4155: {
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
  View_0_1607: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.933333333333334%"),
    top: hp("0.8879781420765038%")
  },
  View_0_1608: {
    width: wp("36.8%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1608_0_4157: {
    flexGrow: 1,
    width: wp("36.8%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1608_0_4159: {
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
  View_0_1609: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.322404371584698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1609_0_4089: {
    flexGrow: 1,
    width: wp("5.466666666666667%"),
    height: hp("2.1174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%"),
    top: hp("0.580601092896174%")
  },
  ImageBackground_I0_1609_0_4090: {
    flexGrow: 1,
    width: wp("5.466666666666667%"),
    height: hp("0.20491803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%"),
    top: hp("1.3319672131147549%")
  },
  View_3_3212: {
    width: wp("21.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666666%"),
    top: hp("2.4590163934426226%")
  },
  Text_3_3212: {
    color: "rgba(255, 45, 135, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1611: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.333333333333332%"),
    top: hp("3.2103825136612016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1611_0_4101: {
    flexGrow: 1,
    width: wp("5.2%"),
    height: hp("2.440690212562436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%"),
    top: hp("0.4438556608606561%")
  },
  ImageBackground_I0_1611_0_4104: {
    width: wp("5.2%"),
    height: hp("2.440690212562436%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1611_0_4105: {
    width: wp("0.4%"),
    height: hp("1.9932935798103042%"),
    top: hp("0.00013341017759671558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.52734375%")
  },
  ImageBackground_I0_1611_0_4106: {
    width: wp("0.4%"),
    height: hp("1.9932935798103042%"),
    top: hp("0.4472576203893439%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2726562500000007%")
  },
  ImageBackground_0_1612: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.2103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.93333333333334%")
  },
  ImageBackground_0_1613: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
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
