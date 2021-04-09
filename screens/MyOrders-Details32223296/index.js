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
      <View style={styles.View_0_1032}>
        <View style={styles.View_3_3467} />
        <View style={styles.View_0_1034}>
          <View style={styles.View_0_1035}>
            <View style={styles.View_0_1036}>
              <View style={styles.View_I0_1036_0_4244} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0421/5bc0/8ca688ecb905e3d964ada1649a6df2cc"
              }}
              style={styles.ImageBackground_0_1037}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/889c/b18b/8ae0c0f5e3d11eb530d5fea78d5abaec"
            }}
            style={styles.ImageBackground_0_1038}
          />
          <View style={styles.View_0_1039}>
            <View style={styles.View_0_1040}>
              <View style={styles.View_I0_1040_0_4244} />
            </View>
            <View style={styles.View_0_1041}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdf1/d061/c761ee0216eb1e16a63afc1da88ee5b8"
                }}
                style={styles.ImageBackground_I0_1041_0_4539}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1139/c4f2/407966388dec8232b0f0789b32890760"
                }}
                style={styles.ImageBackground_I0_1041_0_4542}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/085f/3cd7/d88300d57173c7e06df8f70969dcc2d3"
                }}
                style={styles.ImageBackground_I0_1041_0_4545}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/085f/3cd7/d88300d57173c7e06df8f70969dcc2d3"
                }}
                style={styles.ImageBackground_I0_1041_0_4548}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/889c/b18b/8ae0c0f5e3d11eb530d5fea78d5abaec"
            }}
            style={styles.ImageBackground_0_1042}
          />
          <View style={styles.View_0_1043}>
            <View style={styles.View_0_1044}>
              <View style={styles.View_I0_1044_0_4322} />
            </View>
            <View style={styles.View_0_1045}>
              <View style={styles.View_I0_1045_0_4376}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a839/a632/fd89750cc4f16ffea424d03f0f4ecf92"
                  }}
                  style={styles.ImageBackground_I0_1045_0_4379}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d1/496b/3435fdaea712a652864efd769fb7bd68"
                  }}
                  style={styles.ImageBackground_I0_1045_0_4380}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/973a/a965/e680c945c7a1062c772abeb01b28ed82"
                  }}
                  style={styles.ImageBackground_I0_1045_0_4381}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9111/b709/febd93724a867ca660a02e4bbda9f33f"
                  }}
                  style={styles.ImageBackground_I0_1045_0_4382}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9111/b709/febd93724a867ca660a02e4bbda9f33f"
                  }}
                  style={styles.ImageBackground_I0_1045_0_4383}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ce1/381f/ca995b440c66d486e8623a48cd6a3206"
            }}
            style={styles.ImageBackground_0_1046}
          />
          <View style={styles.View_0_1047}>
            <View style={styles.View_0_1048}>
              <View style={styles.View_I0_1048_0_4322} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89bf/5d2c/b0ab8791df7b9abda52e81c5d2456695"
              }}
              style={styles.ImageBackground_0_1049}
            />
          </View>
          <View style={styles.View_0_1050}>
            <View style={styles.View_I0_1050_0_4386}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7f1/e171/d7bc78db8dde9b3661bcd3e9ecc5b72f"
                }}
                style={styles.ImageBackground_I0_1050_0_4387}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a40/4bff/9aee1f8fdb3c1876086849aacd691e60"
                }}
                style={styles.ImageBackground_I0_1050_0_4391}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1051}>
          <View style={styles.View_0_1052}>
            <View style={styles.View_3_3438}>
              <Text style={styles.Text_3_3438}>130</Text>
            </View>
            <View style={styles.View_3_3440}>
              <Text style={styles.Text_3_3440}>$</Text>
            </View>
            <View style={styles.View_3_3436}>
              <Text style={styles.Text_3_3436}>Total</Text>
            </View>
          </View>
          <View style={styles.View_0_1056}>
            <View style={styles.View_0_1057}>
              <View style={styles.View_3_2792}>
                <Text style={styles.Text_3_2792}>Shipping</Text>
              </View>
              <View style={styles.View_3_2789}>
                <Text style={styles.Text_3_2789}>$10</Text>
              </View>
            </View>
            <View style={styles.View_0_1060}>
              <View style={styles.View_3_2787}>
                <Text style={styles.Text_3_2787}>Subtotal</Text>
              </View>
            </View>
            <View style={styles.View_3_3442}>
              <Text style={styles.Text_3_3442}>Aug 29, 2019 </Text>
            </View>
            <View style={styles.View_3_3444}>
              <Text style={styles.Text_3_3444}>Order #456756</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b644/eb98/d8e2716992c7a398610455d3402fc4bc"
            }}
            style={styles.ImageBackground_0_1065}
          />
        </View>
      </View>
      <View style={styles.View_3_3403}>
        <View style={styles.View_3_3404}>
          <View style={styles.View_I3_3404_0_4227}>
            <View style={styles.View_I3_3404_0_4228} />
            <View style={styles.View_I3_3404_0_4230}>
              <View style={styles.View_I3_3404_0_4232} />
              <View style={styles.View_I3_3404_0_4231} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc88/8e0e/d61e6cf105a40bba6d523ecd7ae6b0e6"
                }}
                style={styles.ImageBackground_I3_3404_0_4233}
              />
            </View>
            <View style={styles.View_I3_3404_3_2135}>
              <View style={styles.View_I3_3404_3_2135_0_3927}>
                <Text style={styles.Text_I3_3404_3_2135_0_3927}>Color</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adf3/d196/002f4b281da3ec68b54f1a5b42e88eaa"
              }}
              style={styles.ImageBackground_I3_3404_3_2136}
            />
            <View style={styles.View_I3_3404_3_2137}>
              <View style={styles.View_I3_3404_3_2137_0_3927}>
                <Text style={styles.Text_I3_3404_3_2137_0_3927}>One Size</Text>
              </View>
            </View>
            <View style={styles.View_I3_3404_3_2138}>
              <View style={styles.View_I3_3404_3_2138_0_4110}>
                <Text style={styles.Text_I3_3404_3_2138_0_4110}>
                  Belt suit blazer
                </Text>
              </View>
            </View>
            <View style={styles.View_I3_3404_3_2139}>
              <View style={styles.View_I3_3404_3_2139_0_3923}>
                <Text style={styles.Text_I3_3404_3_2139_0_3923}>1x</Text>
              </View>
            </View>
            <View style={styles.View_I3_3404_3_2140}>
              <View style={styles.View_I3_3404_3_2140_0_4110}>
                <Text style={styles.Text_I3_3404_3_2140_0_4110}>$120</Text>
              </View>
            </View>
            <View style={styles.View_I3_3404_3_2141}>
              <View style={styles.View_I3_3404_3_2141_0_4099}>
                <Text style={styles.Text_I3_3404_3_2141_0_4099}>ZF876</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3433}>
        <Text style={styles.Text_3_3433}>1 Product</Text>
      </View>
      <View style={styles.View_3_2600}>
        <Text style={styles.Text_3_2600}>Order Items</Text>
      </View>
      <View style={styles.View_0_1069}>
        <View style={styles.View_I0_1069_0_3902}>
          <Text style={styles.Text_I0_1069_0_3902}>Track order</Text>
        </View>
      </View>
      <View style={styles.View_0_1070}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9433/b6ca/131da34d58131bebde54238d5d630928"
          }}
          style={styles.ImageBackground_0_1071}
        />
        <View style={styles.View_0_1072}>
          <View style={styles.View_I0_1072_0_4221}>
            <View style={styles.View_I0_1072_0_4222}>
              <View style={styles.View_I0_1072_0_4223}>
                <Text style={styles.Text_I0_1072_0_4223}>Order details</Text>
              </View>
            </View>
            <View style={styles.View_I0_1072_0_4224}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
                }}
                style={styles.ImageBackground_I0_1072_0_4225}
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
  View_0_1032: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("48.08743169398907%"),
    minHeight: hp("48.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("57.786885245901644%")
  },
  View_3_3467: {
    width: wp("87.2%"),
    height: hp("48.08743169398907%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1034: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("36.74863387978142%")
  },
  View_0_1035: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.13333333333333%"),
    top: hp("0.9562841530054556%")
  },
  View_0_1036: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1036_0_4244: {
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
  ImageBackground_0_1037: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%")
  },
  ImageBackground_0_1038: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.33333333333333%")
  },
  View_0_1039: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8%"),
    top: hp("0.9562841530054556%")
  },
  View_0_1040: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1040_0_4244: {
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
  View_0_1041: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1041_0_4539: {
    flexGrow: 1,
    width: wp("3.85%"),
    height: hp("1.7332650273224042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05833333333333712%"),
    top: hp("0.26895491803279015%")
  },
  ImageBackground_I0_1041_0_4542: {
    flexGrow: 1,
    width: wp("1.9833333333333334%"),
    height: hp("1.1355874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5583333333333442%"),
    top: hp("0.8666325136612016%")
  },
  ImageBackground_I0_1041_0_4545: {
    flexGrow: 1,
    width: wp("1.5166666666666666%"),
    height: hp("0.7769808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5250000000000128%"),
    top: hp("1.8229166666666714%")
  },
  ImageBackground_I0_1041_0_4548: {
    flexGrow: 1,
    width: wp("1.5166666666666666%"),
    height: hp("0.7769808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5583333333333442%"),
    top: hp("1.8229166666666714%")
  },
  ImageBackground_0_1042: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_0_1043: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("0.9562841530054556%")
  },
  View_0_1044: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1044_0_4322: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1045: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1045_0_4376: {
    flexGrow: 1,
    width: wp("3.5333333333333337%"),
    height: hp("2.3565573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4778645833333286%"),
    top: hp("0.4610655737704832%")
  },
  ImageBackground_I0_1045_0_4379: {
    width: wp("3.5333333333333337%"),
    height: hp("2.3565573770491803%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1045_0_4380: {
    width: wp("1.4000000000000001%"),
    height: hp("0.7172131147540983%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%")
  },
  ImageBackground_I0_1045_0_4381: {
    width: wp("0.8666666666666666%"),
    height: hp("0.17076502732240437%"),
    top: hp("0.7513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%")
  },
  ImageBackground_I0_1045_0_4382: {
    width: wp("1.9333333333333333%"),
    height: hp("0.17076502732240437%"),
    top: hp("1.161202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%")
  },
  ImageBackground_I0_1045_0_4383: {
    width: wp("1.9333333333333333%"),
    height: hp("0.17076502732240437%"),
    top: hp("1.707650273224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%")
  },
  ImageBackground_0_1046: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%")
  },
  View_0_1047: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.9562841530054556%")
  },
  View_0_1048: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1048_0_4322: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_1049: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%")
  },
  View_0_1050: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1050_0_4386: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I0_1050_0_4387: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1050_0_4391: {
    width: wp("1.866666666666667%"),
    height: hp("0.6830601092896175%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666636%")
  },
  View_0_1051: {
    width: wp("74.93333333333332%"),
    minWidth: wp("74.93333333333332%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.737704918032783%")
  },
  View_0_1052: {
    width: wp("74.93333333333332%"),
    minWidth: wp("74.93333333333332%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.814207650273225%")
  },
  View_3_3438: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("0.4098360655737707%")
  },
  Text_3_3438: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3440: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333334%"),
    top: hp("0.8196721311475414%")
  },
  Text_3_3440: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3436: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_3436: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1056: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1057: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502728%")
  },
  View_3_2792: {
    width: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_2792: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2789: {
    width: wp("7.466666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    top: hp("0.8196721311475414%")
  },
  Text_3_2789: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1060: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.060109289617493%")
  },
  View_3_2787: {
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_2787: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3442: {
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("0.6830601092896202%")
  },
  Text_3_3442: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3444: {
    width: wp("42.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_3444: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1065: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.877049180327866%")
  },
  View_3_3403: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("30.87431693989071%")
  },
  View_3_3404: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3404_0_4227: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3_3404_0_4228: {
    width: wp("87.2%"),
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
  View_I3_3404_0_4230: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("19.255211835350494%"),
    minHeight: hp("19.255211835350494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.2476946721311464%")
  },
  View_I3_3404_0_4232: {
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
  View_I3_3404_0_4231: {
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
  ImageBackground_I3_3404_0_4233: {
    width: wp("20%"),
    height: hp("19.255211835350494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3_3404_3_2135: {
    width: wp("12.266666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3404_3_2135_0_3927: {
    flexGrow: 1,
    width: wp("12.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I3_3404_3_2135_0_3927: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I3_3404_3_2136: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%")
  },
  View_I3_3404_3_2137: {
    width: wp("18.4%"),
    height: hp("2.73224043715847%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3404_3_2137_0_3927: {
    flexGrow: 1,
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I3_3404_3_2137_0_3927: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3_3404_3_2138: {
    width: wp("36.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3404_3_2138_0_4110: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_I3_3404_3_2138_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3_3404_3_2139: {
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("17.349726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3404_3_2139_0_3923: {
    flexGrow: 1,
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%")
  },
  Text_I3_3404_3_2139_0_3923: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3_3404_3_2140: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("16.393442622950822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3404_3_2140_0_4110: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_I3_3404_3_2140_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I3_3404_3_2141: {
    width: wp("32%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_3404_3_2141_0_4099: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I3_3404_3_2141_0_4099: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3433: {
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("24.726775956284154%")
  },
  Text_3_3433: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2600: {
    width: wp("75.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("24.043715846994534%")
  },
  Text_3_2600: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1069: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.39344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1069_0_3902: {
    flexGrow: 1,
    width: wp("42.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1.0928961748633856%")
  },
  Text_I0_1069_0_3902: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1070: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.786885245901639%")
  },
  ImageBackground_0_1071: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%")
  },
  View_0_1072: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1072_0_4221: {
    flexGrow: 1,
    width: wp("72.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("-0.40983606557376984%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_1072_0_4222: {
    width: wp("54.13333333333333%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("0.13661202185792387%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_1072_0_4223: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_1072_0_4223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1072_0_4224: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1072_0_4225: {
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
