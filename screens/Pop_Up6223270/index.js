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
      <View style={styles.View_0_231}>
        <View style={styles.View_0_232}>
          <View style={styles.View_0_233}>
            <View style={styles.View_I0_233_0_4060}>
              <View style={styles.View_I0_233_0_4061}>
                <View style={styles.View_I0_233_0_4063} />
                <View style={styles.View_I0_233_0_4062} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5b7/1a36/def7d294bf6a61caa884fc954d4b3c75"
                  }}
                  style={styles.ImageBackground_I0_233_0_4064}
                />
              </View>
              <View style={styles.View_I0_233_0_4065}>
                <View style={styles.View_I0_233_0_4065_0_3883}>
                  <Text style={styles.Text_I0_233_0_4065_0_3883}>
                    Soft leather bag
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_233_0_4066}>
                <View style={styles.View_I0_233_0_4066_0_4110}>
                  <Text style={styles.Text_I0_233_0_4066_0_4110}>$120</Text>
                </View>
              </View>
              <View style={styles.View_I0_233_0_4067}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/326b/6dd8/84fa6a8a9dce779fb8b6c42c99b611d7"
                  }}
                  style={styles.ImageBackground_I0_233_0_4067_0_4056}
                />
                <View style={styles.View_I0_233_0_4067_0_4058}>
                  <View style={styles.View_I0_233_0_4067_0_4058_0_4325}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a007/99cb/4a0d0cbe6b38d12d3903403cc2c8daca"
                      }}
                      style={styles.ImageBackground_I0_233_0_4067_0_4058_0_4329}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_234}>
            <View style={styles.View_I0_234_0_4060}>
              <View style={styles.View_I0_234_0_4061}>
                <View style={styles.View_I0_234_0_4063} />
                <View style={styles.View_I0_234_0_4062} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afd/d4f7/2d182d30f40efa5c9552072e5c58ef2d"
                  }}
                  style={styles.ImageBackground_I0_234_0_4064}
                />
              </View>
              <View style={styles.View_I0_234_0_4065}>
                <View style={styles.View_I0_234_0_4065_0_3883}>
                  <Text style={styles.Text_I0_234_0_4065_0_3883}>
                    Christmas top
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_234_0_4066}>
                <View style={styles.View_I0_234_0_4066_0_4110}>
                  <Text style={styles.Text_I0_234_0_4066_0_4110}>$29.99</Text>
                </View>
              </View>
              <View style={styles.View_I0_234_0_4067}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/326b/6dd8/84fa6a8a9dce779fb8b6c42c99b611d7"
                  }}
                  style={styles.ImageBackground_I0_234_0_4067_0_4056}
                />
                <View style={styles.View_I0_234_0_4067_0_4058}>
                  <View style={styles.View_I0_234_0_4067_0_4058_0_4325}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a007/99cb/4a0d0cbe6b38d12d3903403cc2c8daca"
                      }}
                      style={styles.ImageBackground_I0_234_0_4067_0_4058_0_4329}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_235}>
            <View style={styles.View_I0_235_0_4060}>
              <View style={styles.View_I0_235_0_4061}>
                <View style={styles.View_I0_235_0_4063} />
                <View style={styles.View_I0_235_0_4062} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3607/feec/3b17c7c18a8ca60523d32d8231095934"
                  }}
                  style={styles.ImageBackground_I0_235_0_4064}
                />
              </View>
              <View style={styles.View_I0_235_0_4065}>
                <View style={styles.View_I0_235_0_4065_0_3883}>
                  <Text style={styles.Text_I0_235_0_4065_0_3883}>
                    Neon tank
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_235_0_4066}>
                <View style={styles.View_I0_235_0_4066_0_4110}>
                  <Text style={styles.Text_I0_235_0_4066_0_4110}>$15.80</Text>
                </View>
              </View>
              <View style={styles.View_I0_235_0_4067}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/326b/6dd8/84fa6a8a9dce779fb8b6c42c99b611d7"
                  }}
                  style={styles.ImageBackground_I0_235_0_4067_0_4056}
                />
                <View style={styles.View_I0_235_0_4067_0_4058}>
                  <View style={styles.View_I0_235_0_4067_0_4058_0_4325}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a007/99cb/4a0d0cbe6b38d12d3903403cc2c8daca"
                      }}
                      style={styles.ImageBackground_I0_235_0_4067_0_4058_0_4329}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_236}>
            <View style={styles.View_I0_236_0_4060}>
              <View style={styles.View_I0_236_0_4061}>
                <View style={styles.View_I0_236_0_4063} />
                <View style={styles.View_I0_236_0_4062} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e338/d866/49f60b7cfaa4f519aff53bdd806265ac"
                  }}
                  style={styles.ImageBackground_I0_236_0_4064}
                />
              </View>
              <View style={styles.View_I0_236_0_4065}>
                <View style={styles.View_I0_236_0_4065_0_3883}>
                  <Text style={styles.Text_I0_236_0_4065_0_3883}>
                    Soft leather bag
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_236_0_4066}>
                <View style={styles.View_I0_236_0_4066_0_4110}>
                  <Text style={styles.Text_I0_236_0_4066_0_4110}>$120</Text>
                </View>
              </View>
              <View style={styles.View_I0_236_0_4067}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/326b/6dd8/84fa6a8a9dce779fb8b6c42c99b611d7"
                  }}
                  style={styles.ImageBackground_I0_236_0_4067_0_4056}
                />
                <View style={styles.View_I0_236_0_4067_0_4058}>
                  <View style={styles.View_I0_236_0_4067_0_4058_0_4325}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a007/99cb/4a0d0cbe6b38d12d3903403cc2c8daca"
                      }}
                      style={styles.ImageBackground_I0_236_0_4067_0_4058_0_4329}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_237}>
          <View style={styles.View_I0_237_0_4069}>
            <View style={styles.View_I0_237_0_4070}>
              <View style={styles.View_I0_237_0_4071} />
              <View style={styles.View_I0_237_0_4072}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c82/b91b/f3e1bfb8f797069c0b2f162d3bcb3f1a"
                  }}
                  style={styles.ImageBackground_I0_237_0_4073}
                />
                <View style={styles.View_I0_237_0_4074}>
                  <View style={styles.View_I0_237_0_4074_0_4099}>
                    <Text style={styles.Text_I0_237_0_4074_0_4099}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I0_237_3_805}>
                <Text style={styles.Text_I0_237_3_805}>Filter</Text>
              </View>
            </View>
            <View style={styles.View_I0_237_0_4076}>
              <View style={styles.View_I0_237_0_4077} />
              <View style={styles.View_I0_237_3_705}>
                <Text style={styles.Text_I0_237_3_705}>Sort</Text>
              </View>
              <View style={styles.View_I0_237_0_4079}>
                <View style={styles.View_I0_237_0_4079_0_4045}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0800/3a02/62f59623b74818376910de2e20b9eb75"
                    }}
                    style={styles.ImageBackground_I0_237_0_4079_0_4050}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_238}>
          <View style={styles.View_0_239}>
            <Text style={styles.Text_0_239}>Holiday Sneak Peek</Text>
          </View>
        </View>
        <View style={styles.View_0_240}>
          <View style={styles.View_I0_240_0_4127}>
            <View style={styles.View_I0_240_0_4128} />
            <View style={styles.View_I0_240_0_4129}>
              <View style={styles.View_I0_240_0_4129_0_4001}>
                <View style={styles.View_I0_240_0_4129_0_4002}>
                  <View style={styles.View_I0_240_0_4129_0_4003}>
                    <View style={styles.View_I0_240_0_4129_0_4003_0_3841}>
                      <View
                        style={styles.View_I0_240_0_4129_0_4003_0_3841_0_4565}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                          }}
                          style={
                            styles.ImageBackground_I0_240_0_4129_0_4003_0_3841_0_4569
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                          }}
                          style={
                            styles.ImageBackground_I0_240_0_4129_0_4003_0_3841_0_4570
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                          }}
                          style={
                            styles.ImageBackground_I0_240_0_4129_0_4003_0_3841_0_4571
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I0_240_0_4129_0_4004}>
                  <View style={styles.View_I0_240_0_4129_0_4004_0_3985}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e25/ef3d/0eb8e8eeaec052344eb92bf65ca94bfb"
                      }}
                      style={styles.ImageBackground_I0_240_0_4129_0_4004_0_3989}
                    />
                  </View>
                </View>
                <View style={styles.View_I0_240_0_4129_0_4006}>
                  <Text style={styles.Text_I0_240_0_4129_0_4006}>women</Text>
                </View>
                <View style={styles.View_I0_240_0_4129_0_4007}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef7/3399/c0fcc609838a0dc5e454e88655977438"
                    }}
                    style={styles.ImageBackground_I0_240_0_4129_0_4007_0_3997}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a4/46a1/39cb71d6d7cee15787de55b18e12df8a"
                    }}
                    style={styles.ImageBackground_I0_240_0_4129_0_4007_0_3998}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/714b/aae8/2eda9863012ce8ab33a1316bedcdacfb"
            }}
            style={styles.ImageBackground_I0_240_0_4130}
          />
        </View>
      </View>
      <View style={styles.View_0_241} />
      <View style={styles.View_0_242}>
        <View style={styles.View_0_243} />
        <View style={styles.View_0_244}>
          <View style={styles.View_0_246} />
          <View style={styles.View_0_245} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6956/4a1e/022af108d1052997b225426c4cd4217b"
            }}
            style={styles.ImageBackground_0_247}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
            }}
            style={styles.ImageBackground_0_248}
          />
        </View>
        <View style={styles.View_3_2068}>
          <Text style={styles.Text_3_2068}>
            The Perfect Gift Inspiration for the holidays.
          </Text>
        </View>
        <View style={styles.View_0_250}>
          <View style={styles.View_I0_250_0_3847}>
            <View style={styles.View_I0_250_0_3850} />
            <View style={styles.View_I0_250_0_3852}>
              <Text style={styles.Text_I0_250_0_3852}>SHOP NOW</Text>
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
  View_0_231: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("132.78688524590163%"),
    minHeight: hp("132.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_232: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("86.88524590163934%"),
    minHeight: hp("86.88524590163934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("45.90163934426229%")
  },
  View_0_233: {
    width: wp("41.86666666666667%"),
    height: hp("41.80327868852459%"),
    top: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_233_0_4060: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_233_0_4061: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_233_0_4063: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_233_0_4062: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_233_0_4064: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_233_0_4065: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_233_0_4065_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_233_0_4065_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_233_0_4066: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("38.934426229508205%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_233_0_4066_0_4110: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158282%")
  },
  Text_I0_233_0_4066_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_233_0_4067: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_233_0_4067_0_4056: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_233_0_4067_0_4058: {
    flexGrow: 1,
    width: wp("5.221052042643229%"),
    height: hp("2.6747195447077514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5227864583333215%"),
    top: hp("0.8915802168716027%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_233_0_4067_0_4058_0_4325: {
    flexGrow: 1,
    width: wp("3.8070170084635415%"),
    height: hp("1.7405343186008473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.70703125%"),
    top: hp("0.4736728355532591%")
  },
  ImageBackground_I0_233_0_4067_0_4058_0_4329: {
    width: wp("3.8070170084635415%"),
    height: hp("1.740534448884224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_234: {
    width: wp("41.86666666666667%"),
    height: hp("41.80327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_234_0_4060: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_234_0_4061: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_234_0_4063: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_234_0_4062: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_234_0_4064: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_234_0_4065: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_234_0_4065_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_234_0_4065_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_234_0_4066: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("38.934426229508205%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_234_0_4066_0_4110: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_I0_234_0_4066_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_234_0_4067: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_234_0_4067_0_4056: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_234_0_4067_0_4058: {
    flexGrow: 1,
    width: wp("5.221052042643229%"),
    height: hp("2.6747195447077514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5227864583333321%"),
    top: hp("0.8915802168715885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_234_0_4067_0_4058_0_4325: {
    flexGrow: 1,
    width: wp("3.8070170084635415%"),
    height: hp("1.7405343186008473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.70703125%"),
    top: hp("0.47367283555327333%")
  },
  ImageBackground_I0_234_0_4067_0_4058_0_4329: {
    width: wp("3.8070170084635415%"),
    height: hp("1.740534448884224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_235: {
    width: wp("41.86666666666667%"),
    height: hp("41.80327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_235_0_4060: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_235_0_4061: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_235_0_4063: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_235_0_4062: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_235_0_4064: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_235_0_4065: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_235_0_4065_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_235_0_4065_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_235_0_4066: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("38.934426229508205%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_235_0_4066_0_4110: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_I0_235_0_4066_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_235_0_4067: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_235_0_4067_0_4056: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_235_0_4067_0_4058: {
    flexGrow: 1,
    width: wp("5.221052042643229%"),
    height: hp("2.6747195447077514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5227864583333215%"),
    top: hp("0.8915802168715885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_235_0_4067_0_4058_0_4325: {
    flexGrow: 1,
    width: wp("3.8070170084635415%"),
    height: hp("1.7405343186008473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.70703125%"),
    top: hp("0.47367283555327333%")
  },
  ImageBackground_I0_235_0_4067_0_4058_0_4329: {
    width: wp("3.8070170084635415%"),
    height: hp("1.740534448884224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_236: {
    width: wp("41.86666666666667%"),
    height: hp("41.80327868852459%"),
    top: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_236_0_4060: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_236_0_4061: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_236_0_4063: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_236_0_4062: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_236_0_4064: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_236_0_4065: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_236_0_4065_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_236_0_4065_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_236_0_4066: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("38.934426229508205%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_236_0_4066_0_4110: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158282%")
  },
  Text_I0_236_0_4066_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_236_0_4067: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_236_0_4067_0_4056: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_236_0_4067_0_4058: {
    flexGrow: 1,
    width: wp("5.221052042643229%"),
    height: hp("2.6747195447077514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5227864583333321%"),
    top: hp("0.8915802168716027%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_236_0_4067_0_4058_0_4325: {
    flexGrow: 1,
    width: wp("3.8070170084635415%"),
    height: hp("1.7405343186008473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.70703125%"),
    top: hp("0.4736728355532591%")
  },
  ImageBackground_I0_236_0_4067_0_4058_0_4329: {
    width: wp("3.8070170084635415%"),
    height: hp("1.740534448884224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_237: {
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    top: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_237_0_4069: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_237_0_4070: {
    width: wp("41.86666666666667%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_237_0_4071: {
    width: wp("41.86666666666667%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(13, 54, 98, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_237_0_4072: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666657%"),
    top: hp("1.9125683060109324%")
  },
  ImageBackground_I0_237_0_4073: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_237_0_4074: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_237_0_4074_0_4099: {
    flexGrow: 1,
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%")
  },
  Text_I0_237_0_4074_0_4099: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_237_3_805: {
    width: wp("11.553281656901042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000004%"),
    top: hp("1.9898127988387984%")
  },
  Text_I0_237_3_805: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_237_0_4076: {
    width: wp("41.86666666666667%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_237_0_4077: {
    width: wp("41.86666666666667%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_237_3_705: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("1.9125683060109324%")
  },
  Text_I0_237_3_705: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_237_0_4079: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_237_0_4079_0_4045: {
    flexGrow: 1,
    width: wp("4.352971903483073%"),
    height: hp("1.2978142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.133333333333331%"),
    top: hp("1.058743169398909%")
  },
  ImageBackground_I0_237_0_4079_0_4050: {
    width: wp("4.352971903483073%"),
    height: hp("1.2978142076502732%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_238: {
    width: wp("67.73333333333333%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("18.989071038251364%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_239: {
    width: wp("67.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_239: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_240: {
    width: wp("100%"),
    height: hp("14.071038251366119%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_240_0_4127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_240_0_4128: {
    width: wp("100%"),
    height: hp("14.071038251366119%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_I0_240_0_4129: {
    width: wp("87.2%"),
    height: hp("5.327868852459016%"),
    top: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_240_0_4129_0_4001: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8000000000000007%"),
    top: hp("0.6830601092896185%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_240_0_4129_0_4002: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%"),
    top: hp("0.13661202185792298%")
  },
  View_I0_240_0_4129_0_4003: {
    width: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_240_0_4129_0_4003_0_3841: {
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
  View_I0_240_0_4129_0_4003_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9600260416666657%"),
    top: hp("0.443989071038251%")
  },
  ImageBackground_I0_240_0_4129_0_4003_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_240_0_4129_0_4003_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.4781420765027331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_240_0_4129_0_4003_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.13333333333334%")
  },
  View_I0_240_0_4129_0_4004: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_240_0_4129_0_4004_0_3985: {
    flexGrow: 1,
    width: wp("4.6%"),
    height: hp("1.1782788188079667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7666666666666666%"),
    top: hp("1.1128409964139347%")
  },
  ImageBackground_I0_240_0_4129_0_4004_0_3989: {
    width: wp("4.6%"),
    height: hp("1.1782788188079667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_240_0_4129_0_4006: {
    width: wp("30.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%")
  },
  Text_I0_240_0_4129_0_4006: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_240_0_4129_0_4007: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.40983606557376984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666665%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_240_0_4129_0_4007_0_3997: {
    flexGrow: 1,
    width: wp("4.472222391764323%"),
    height: hp("2.29109753676451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.575000000000017%"),
    top: hp("0.29456967213114815%")
  },
  ImageBackground_I0_240_0_4129_0_4007_0_3998: {
    flexGrow: 1,
    width: wp("1.4949996948242188%"),
    height: hp("0.7658812517676848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.063281250000017%"),
    top: hp("2.081599001024591%")
  },
  ImageBackground_I0_240_0_4130: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("8.19672131147541%")
  },
  View_0_241: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_242: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_243: {
    width: wp("87.2%"),
    height: hp("61.47540983606557%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_244: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("43.0327868852459%"),
    minHeight: hp("43.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  View_0_246: {
    width: wp("87.2%"),
    height: hp("43.0327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_245: {
    width: wp("87.2%"),
    height: hp("43.0327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_247: {
    width: wp("87.2%"),
    height: hp("43.0327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_248: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%")
  },
  View_3_2068: {
    width: wp("89.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.72677595628414%")
  },
  Text_3_2068: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_250: {
    width: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("38.797814207650276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.599999999999994%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_250_0_3847: {
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
  View_I0_250_0_3850: {
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
  View_I0_250_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.868852459016388%")
  },
  Text_I0_250_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
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
