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
      <View style={styles.View_0_1615}>
        <View style={styles.View_0_1616}>
          <View style={styles.View_I0_1616_0_3847}>
            <View style={styles.View_I0_1616_0_3850} />
            <View style={styles.View_I0_1616_0_3852}>
              <Text style={styles.Text_I0_1616_0_3852}>PLACE ORDER</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1617}>
          <View style={styles.View_I0_1617_0_4355}>
            <View style={styles.View_I0_1617_0_4356}>
              <View style={styles.View_I0_1617_0_4358} />
              <View style={styles.View_I0_1617_0_4357} />
              <View style={styles.View_I0_1617_0_4359}>
                <View style={styles.View_I0_1617_0_4359_0_4300} />
              </View>
            </View>
            <View style={styles.View_I0_1617_0_4360}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e1a/5d6f/4f0eb9e91999006923d8518e3397ec72"
                }}
                style={styles.ImageBackground_I0_1617_0_4360_0_4189}
              />
              <View style={styles.View_I0_1617_0_4360_0_4192}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b55/7ac3/da342fa1534efd697722cbc1267b72b2"
                  }}
                  style={styles.ImageBackground_I0_1617_0_4360_0_4193}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfd0/7e56/1507a410b78bd4859f663c5c32bb4f9e"
                  }}
                  style={styles.ImageBackground_I0_1617_0_4360_0_4196}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e003/c3c9/4d7d1d16be9bed5f3555e161fbe3675d"
                  }}
                  style={styles.ImageBackground_I0_1617_0_4360_0_4197}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d87d/2abd/81ce8a78c0b56b7bea4a33c5207a3a23"
                  }}
                  style={styles.ImageBackground_I0_1617_0_4360_0_4200}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e2f/4f2a/6390bd323bf85f9c9bbca332a65fa085"
                  }}
                  style={styles.ImageBackground_I0_1617_0_4360_0_4203}
                />
              </View>
            </View>
            <View style={styles.View_I0_1617_0_4361}>
              <View style={styles.View_I0_1617_0_4361_0_3927}>
                <Text style={styles.Text_I0_1617_0_4361_0_3927}>Coupon</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1618}>
        <View style={styles.View_3_3234}>
          <Text style={styles.Text_3_3234}>130</Text>
        </View>
        <View style={styles.View_3_3176}>
          <Text style={styles.Text_3_3176}>$</Text>
        </View>
        <View style={styles.View_3_3174}>
          <Text style={styles.Text_3_3174}>Total</Text>
        </View>
      </View>
      <View style={styles.View_0_1622}>
        <View style={styles.View_3_3218} />
        <View style={styles.View_3_2358}>
          <View style={styles.View_I3_2358_0_4166}>
            <View style={styles.View_I3_2358_0_4167} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9433/b6ca/131da34d58131bebde54238d5d630928"
              }}
              style={styles.ImageBackground_I3_2358_0_4168}
            />
            <View style={styles.View_I3_2358_3_3154}>
              <View style={styles.View_I3_2358_3_3155}>
                <Text style={styles.Text_I3_2358_3_3155}>Address</Text>
              </View>
            </View>
            <View style={styles.View_I3_2358_0_4170}>
              <View style={styles.View_I3_2358_0_4170_0_4099}>
                <Text style={styles.Text_I3_2358_0_4170_0_4099}>
                  NY, United States 300 Post Street 122422
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1624}>
          <View style={styles.View_I0_1624_0_4172}>
            <View style={styles.View_I0_1624_0_4173}>
              <View style={styles.View_I0_1624_0_4174} />
              <View style={styles.View_I0_1624_0_4175}>
                <View style={styles.View_I0_1624_0_4175_0_4316}>
                  <View style={styles.View_I0_1624_0_4175_0_4317}>
                    <View style={styles.View_I0_1624_0_4175_0_4318}>
                      <View style={styles.View_I0_1624_0_4175_0_4318_0_4483} />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbef/0436/bd2bd6c1cb5374f4dc61e04fe6c54bfe"
                      }}
                      style={styles.ImageBackground_I0_1624_0_4175_0_4319}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I0_1624_0_4176}>
                <View style={styles.View_I0_1624_0_4176_0_3927}>
                  <Text style={styles.Text_I0_1624_0_4176_0_3927}>
                    Mastercard
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I0_1624_0_4177}>
              <View style={styles.View_I0_1624_0_4178} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac73/1015/a7386f884a399885c3b5e80deaf549a1"
                }}
                style={styles.ImageBackground_I0_1624_0_4179}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/791a/d733/d4815da6b202795d56c7c12a384db242"
                }}
                style={styles.ImageBackground_I0_1624_0_4180}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5efa/ee34/ea70292192199b4a546f206c5fb1e989"
              }}
              style={styles.ImageBackground_I0_1624_0_4181}
            />
            <View style={styles.View_I0_1624_0_4186}>
              <View style={styles.View_I0_1624_0_4186_0_3923}>
                <Text style={styles.Text_I0_1624_0_4186_0_3923}>3218</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3_2370}>
          <View style={styles.View_3_2371} />
          <View style={styles.View_3_2372}>
            <View style={styles.View_3_2373} />
            <View style={styles.View_3_2374} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc88/8e0e/d61e6cf105a40bba6d523ecd7ae6b0e6"
              }}
              style={styles.ImageBackground_3_2376}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adf3/d196/002f4b281da3ec68b54f1a5b42e88eaa"
            }}
            style={styles.ImageBackground_3_2378}
          />
          <View style={styles.View_3_2395}>
            <Text style={styles.Text_3_2395}>Belt suit blazer</Text>
          </View>
          <View style={styles.View_3_2393}>
            <Text style={styles.Text_3_2393}>Color</Text>
          </View>
          <View style={styles.View_3_2397}>
            <Text style={styles.Text_3_2397}>Size: M</Text>
          </View>
          <View style={styles.View_3_2399}>
            <Text style={styles.Text_3_2399}>1x</Text>
          </View>
          <View style={styles.View_3_2401}>
            <Text style={styles.Text_3_2401}>$120</Text>
          </View>
          <View style={styles.View_3_2391}>
            <Text style={styles.Text_3_2391}>ZF876</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1627}>
        <View style={styles.View_0_1628}>
          <View style={styles.View_0_1629}>
            <View style={styles.View_I0_1629_0_4154}>
              <View style={styles.View_I0_1629_0_4155} />
            </View>
          </View>
          <View style={styles.View_0_1630}>
            <View style={styles.View_0_1631}>
              <View style={styles.View_I0_1631_0_4157}>
                <View style={styles.View_I0_1631_0_4159} />
              </View>
            </View>
            <View style={styles.View_3_3216}>
              <Text style={styles.Text_3_3216}>Order</Text>
            </View>
          </View>
          <View style={styles.View_0_1633}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c2f/364c/1594bcb0947bcead182921d4a6cce606"
              }}
              style={styles.ImageBackground_I0_1633_0_4089}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f3a/8487/16aecfc02fd18a2194111e46b44e6dcd"
              }}
              style={styles.ImageBackground_I0_1633_0_4090}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f107/3c03/1f445f71db6aa0a9cb4577c856904a84"
            }}
            style={styles.ImageBackground_0_1634}
          />
          <View style={styles.View_0_1635}>
            <View style={styles.View_I0_1635_0_4101}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e8e/0ecd/e36bedbbbdf35f4d624391ffcc21e15a"
                }}
                style={styles.ImageBackground_I0_1635_0_4104}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/3f31/51bcbb3ffcdd82b311de80c368fc906a"
                }}
                style={styles.ImageBackground_I0_1635_0_4105}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/3f31/51bcbb3ffcdd82b311de80c368fc906a"
                }}
                style={styles.ImageBackground_I0_1635_0_4106}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
        }}
        style={styles.ImageBackground_3_2337}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1615: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("105.87431693989072%")
  },
  View_0_1616: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1616_0_3847: {
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
  View_I0_1616_0_3850: {
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
  View_I0_1616_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_1616_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1617: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1617_0_4355: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1617_0_4356: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1617_0_4358: {
    width: wp("39.46666666666667%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1617_0_4357: {
    width: wp("39.46666666666667%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1617_0_4359: {
    width: wp("39.46666666666667%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 158, 192, 1)"
  },
  View_I0_1617_0_4359_0_4300: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    height: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1617_0_4360: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1617_0_4360_0_4189: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1617_0_4360_0_4192: {
    flexGrow: 1,
    width: wp("4.3%"),
    height: hp("2.2028688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8499999999999996%"),
    top: hp("0.947745901639351%")
  },
  ImageBackground_I0_1617_0_4360_0_4193: {
    width: wp("3.5000000000000004%"),
    height: hp("1.1782788188079667%"),
    top: hp("1.0245901639344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40000000000000036%")
  },
  ImageBackground_I0_1617_0_4360_0_4196: {
    width: wp("4.3%"),
    height: hp("0.6659837368407536%"),
    top: hp("0.5122950819671956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1617_0_4360_0_4197: {
    width: wp("0.3333330790201823%"),
    height: hp("1.6905736402084266%"),
    top: hp("0.5122950819671956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9999999999999982%")
  },
  ImageBackground_I0_1617_0_4360_0_4200: {
    width: wp("1.7000511169433594%"),
    height: hp("0.6659837368407536%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5999999999999979%")
  },
  ImageBackground_I0_1617_0_4360_0_4203: {
    width: wp("1.7000508626302084%"),
    height: hp("0.6659837368407536%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9999999999999982%")
  },
  View_I0_1617_0_4361: {
    width: wp("16.53333333333333%"),
    height: hp("2.73224043715847%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1617_0_4361_0_3927: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I0_1617_0_4361_0_3927: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1618: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("98.49726775956285%")
  },
  View_3_3234: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.4098360655737707%")
  },
  Text_3_3234: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3176: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666665%"),
    top: hp("0.8196721311475414%")
  },
  Text_3_3176: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3174: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_3174: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1622: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("28.142076502732237%")
  },
  View_3_3218: {
    width: wp("87.2%"),
    height: hp("61.47540983606557%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_2358: {
    width: wp("78.66666666666666%"),
    height: hp("15.710382513661203%"),
    top: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_2358_0_4166: {
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
  View_I3_2358_0_4167: {
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
  ImageBackground_I3_2358_0_4168: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("6.284153005464489%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%")
  },
  View_I3_2358_3_3154: {
    width: wp("36.266666666666666%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_2358_3_3155: {
    width: wp("36.266666666666666%"),
    top: hp("0.14341594091530396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I3_2358_3_3155: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3_2358_0_4170: {
    width: wp("56.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("7.103825136612031%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_2358_0_4170_0_4099: {
    flexGrow: 1,
    width: wp("41.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%")
  },
  Text_I3_2358_0_4170_0_4099: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1624: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("46.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1624_0_4172: {
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
  View_I0_1624_0_4173: {
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
  View_I0_1624_0_4174: {
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
  View_I0_1624_0_4175: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1624_0_4175_0_4316: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1624_0_4175_0_4317: {
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
  View_I0_1624_0_4175_0_4318: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1624_0_4175_0_4318_0_4483: {
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
  ImageBackground_I0_1624_0_4175_0_4319: {
    width: wp("3.4109181722005206%"),
    height: hp("1.1858478921358704%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  View_I0_1624_0_4176: {
    width: wp("36.266666666666666%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1624_0_4176_0_3927: {
    flexGrow: 1,
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.14341594091530396%")
  },
  Text_I0_1624_0_4176_0_3927: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1624_0_4177: {
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
  View_I0_1624_0_4178: {
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
  ImageBackground_I0_1624_0_4179: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  ImageBackground_I0_1624_0_4180: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%")
  },
  ImageBackground_I0_1624_0_4181: {
    width: wp("6.4%"),
    height: hp("0.4098360655737705%"),
    top: hp("7.786885245901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_I0_1624_0_4186: {
    width: wp("45.86666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.533333333333328%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1624_0_4186_0_3923: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%")
  },
  Text_I0_1624_0_4186_0_3923: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2370: {
    width: wp("78.66666666666666%"),
    height: hp("23.633879781420767%"),
    top: hp("2.5179169868510947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  View_3_2371: {
    width: wp("78.66666666666666%"),
    height: hp("23.633879781420767%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_2372: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("19.255211835350494%"),
    minHeight: hp("19.255211835350494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.1888607838114744%")
  },
  View_3_2373: {
    width: wp("20%"),
    height: hp("19.255211835350494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_2374: {
    width: wp("20%"),
    height: hp("19.255211835350494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_3_2376: {
    width: wp("20%"),
    height: hp("19.255211835350494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_2378: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("12.236181373804644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%")
  },
  View_3_2395: {
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.533333333333335%"),
    top: hp("2.400115800034154%")
  },
  Text_3_2395: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2393: {
    width: wp("12.266666666666666%"),
    top: hp("11.14328519894126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.533333333333335%")
  },
  Text_3_2393: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2397: {
    width: wp("18.4%"),
    top: hp("11.14328519894126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%")
  },
  Text_3_2397: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2399: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.8%"),
    top: hp("17.290826182547814%")
  },
  Text_3_2399: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2401: {
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333334%"),
    top: hp("16.6077660732582%")
  },
  Text_3_2401: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2391: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.533333333333335%"),
    top: hp("7.454760608777324%")
  },
  Text_3_2391: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1627: {
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
  View_0_1628: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1629: {
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
  View_I0_1629_0_4154: {
    flexGrow: 1,
    width: wp("86.93333333333332%"),
    height: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.13661202185792298%")
  },
  View_I0_1629_0_4155: {
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
  View_0_1630: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.66666666666667%"),
    top: hp("0.8879781420765038%")
  },
  View_0_1631: {
    width: wp("36.8%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1631_0_4157: {
    flexGrow: 1,
    width: wp("36.8%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1631_0_4159: {
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
  View_3_3216: {
    width: wp("11.200000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("2.4590163934426226%")
  },
  Text_3_3216: {
    color: "rgba(255, 45, 135, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1633: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666667%"),
    top: hp("3.142076502732241%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1633_0_4089: {
    flexGrow: 1,
    width: wp("5.466666666666667%"),
    height: hp("2.1174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%"),
    top: hp("0.580601092896174%")
  },
  ImageBackground_I0_1633_0_4090: {
    flexGrow: 1,
    width: wp("5.466666666666667%"),
    height: hp("0.20491803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%"),
    top: hp("1.3319672131147549%")
  },
  ImageBackground_0_1634: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.2103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.400000000000006%")
  },
  View_0_1635: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3.142076502732241%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1635_0_4101: {
    flexGrow: 1,
    width: wp("5.2%"),
    height: hp("2.440690212562436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%"),
    top: hp("0.4438556608606561%")
  },
  ImageBackground_I0_1635_0_4104: {
    width: wp("5.2%"),
    height: hp("2.440690212562436%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1635_0_4105: {
    width: wp("0.4%"),
    height: hp("1.9932935798103042%"),
    top: hp("0.00013341017759316287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.52734375%")
  },
  ImageBackground_I0_1635_0_4106: {
    width: wp("0.4%"),
    height: hp("1.9932935798103042%"),
    top: hp("0.4472576203893439%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2726562500000007%")
  },
  ImageBackground_3_2337: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_2: { height: 885 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
