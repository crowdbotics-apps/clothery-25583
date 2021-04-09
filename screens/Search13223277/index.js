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
      <View style={styles.View_0_408}>
        <View style={styles.View_0_409}>
          <View style={styles.View_0_411} />
          <View style={styles.View_3_3389}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1311/9c9a/f84ad809889449d77d8d4ea4d9742d68"
              }}
              style={styles.ImageBackground_3_3390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f7e/5077/21b2a6d93008f919b92cb145ada24aa5"
              }}
              style={styles.ImageBackground_3_3393}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f374/71b7/29610e1ff1441c801c51a7ffc58f431b"
              }}
              style={styles.ImageBackground_3_3396}
            />
          </View>
        </View>
        <View style={styles.View_0_414}>
          <View style={styles.View_0_415}>
            <View style={styles.View_0_417} />
          </View>
          <View style={styles.View_0_419}>
            <View style={styles.View_I0_419_0_4419}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f369/507b/09851c2cf82ca4afb9c40eb2b00a5ef4"
                }}
                style={styles.ImageBackground_I0_419_0_4422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce7a/f7e7/23d31f58cc7c628fe9abc6122b619ac5"
                }}
                style={styles.ImageBackground_I0_419_0_4425}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_420}>
        <View style={styles.View_0_421}>
          <View style={styles.View_I0_421_0_4060}>
            <View style={styles.View_I0_421_0_4061}>
              <View style={styles.View_I0_421_0_4063} />
              <View style={styles.View_I0_421_0_4062} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1930/f5da/69c2bcc6acfc43e6a0673e93f782ad0c"
                }}
                style={styles.ImageBackground_I0_421_0_4064}
              />
            </View>
            <View style={styles.View_I0_421_0_4065}>
              <View style={styles.View_I0_421_0_4065_0_3883}>
                <Text style={styles.Text_I0_421_0_4065_0_3883}>Crop top</Text>
              </View>
            </View>
            <View style={styles.View_I0_421_0_4066}>
              <View style={styles.View_I0_421_0_4066_0_4110}>
                <Text style={styles.Text_I0_421_0_4066_0_4110}>$25.90</Text>
              </View>
            </View>
            <View style={styles.View_I0_421_0_4067}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/326b/6dd8/84fa6a8a9dce779fb8b6c42c99b611d7"
                }}
                style={styles.ImageBackground_I0_421_0_4067_0_4056}
              />
              <View style={styles.View_I0_421_0_4067_0_4058}>
                <View style={styles.View_I0_421_0_4067_0_4058_0_4325}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a007/99cb/4a0d0cbe6b38d12d3903403cc2c8daca"
                    }}
                    style={styles.ImageBackground_I0_421_0_4067_0_4058_0_4329}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_422}>
          <View style={styles.View_I0_422_0_4060}>
            <View style={styles.View_I0_422_0_4061}>
              <View style={styles.View_I0_422_0_4063} />
              <View style={styles.View_I0_422_0_4062} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9f5/d180/f5a8aff31a94668c4b3dbac9981b218c"
                }}
                style={styles.ImageBackground_I0_422_0_4064}
              />
            </View>
            <View style={styles.View_I0_422_0_4065}>
              <View style={styles.View_I0_422_0_4065_0_3883}>
                <Text style={styles.Text_I0_422_0_4065_0_3883}>
                  Pink puffer coat
                </Text>
              </View>
            </View>
            <View style={styles.View_I0_422_0_4066}>
              <View style={styles.View_I0_422_0_4066_0_4110}>
                <Text style={styles.Text_I0_422_0_4066_0_4110}>$175</Text>
              </View>
            </View>
            <View style={styles.View_I0_422_0_4067}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/326b/6dd8/84fa6a8a9dce779fb8b6c42c99b611d7"
                }}
                style={styles.ImageBackground_I0_422_0_4067_0_4056}
              />
              <View style={styles.View_I0_422_0_4067_0_4058}>
                <View style={styles.View_I0_422_0_4067_0_4058_0_4325}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a007/99cb/4a0d0cbe6b38d12d3903403cc2c8daca"
                    }}
                    style={styles.ImageBackground_I0_422_0_4067_0_4058_0_4329}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3_3332}>
          <Text style={styles.Text_3_3332}>Recent searches</Text>
        </View>
      </View>
      <View style={styles.View_0_424}>
        <View style={styles.View_I0_424_0_4412}>
          <View style={styles.View_I0_424_0_4415} />
          <View style={styles.View_I0_424_0_4417}>
            <Text style={styles.Text_I0_424_0_4417}>dress</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_425}>
        <View style={styles.View_I0_425_0_4412}>
          <View style={styles.View_I0_425_0_4415} />
          <View style={styles.View_I0_425_0_4417}>
            <Text style={styles.Text_I0_425_0_4417}>coat</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_426}>
        <View style={styles.View_I0_426_0_4412}>
          <View style={styles.View_I0_426_0_4415} />
          <View style={styles.View_I0_426_0_4417}>
            <Text style={styles.Text_I0_426_0_4417}>boot</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3330}>
        <Text style={styles.Text_3_3330}>Dress</Text>
      </View>
      <View style={styles.View_3_3327}>
        <Text style={styles.Text_3_3327}>What are you looking for?</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
        }}
        style={styles.ImageBackground_0_429}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_408: {
    width: wp("69.86666666666666%"),
    minWidth: wp("69.86666666666666%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("97.6775956284153%")
  },
  View_0_409: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.199999999999996%"),
    top: hp("0%")
  },
  View_0_411: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 45, 135, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3389: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666673%"),
    top: hp("2.5956284153005384%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_3390: {
    width: wp("6.333333333333334%"),
    height: hp("2.5614754098360657%"),
    top: hp("0.4269125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03333333333333144%")
  },
  ImageBackground_3_3393: {
    width: wp("1.2666666666666666%"),
    height: hp("0.6489071038251366%"),
    top: hp("0.9733606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0999999999999943%")
  },
  ImageBackground_3_3396: {
    width: wp("4.733333333333333%"),
    height: hp("1.7418032786885245%"),
    top: hp("1.2465846994535497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6333333333333258%")
  },
  View_0_414: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_415: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_417: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 45, 135, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_419: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666667%"),
    top: hp("2.5956284153005384%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_419_0_4419: {
    flexGrow: 1,
    width: wp("6.333333333333334%"),
    height: hp("2.698087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.033333333333327886%"),
    top: hp("0.2903005464480941%")
  },
  ImageBackground_I0_419_0_4422: {
    width: wp("6.333333333333334%"),
    height: hp("2.698087431693989%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_419_0_4425: {
    width: wp("2.6%"),
    height: hp("1.331967213114754%"),
    top: hp("0.8196721311475557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%")
  },
  View_0_420: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.30054644808743%")
  },
  View_0_421: {
    width: wp("41.86666666666667%"),
    height: hp("41.80327868852459%"),
    top: hp("7.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_421_0_4060: {
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
  View_I0_421_0_4061: {
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
  View_I0_421_0_4063: {
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
  View_I0_421_0_4062: {
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
  ImageBackground_I0_421_0_4064: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_421_0_4065: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_421_0_4065_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_421_0_4065_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_421_0_4066: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_421_0_4066_0_4110: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_I0_421_0_4066_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_421_0_4067: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("26.63934426229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_421_0_4067_0_4056: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_421_0_4067_0_4058: {
    flexGrow: 1,
    width: wp("5.221052042643229%"),
    height: hp("2.6747195447077514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5227864583333215%"),
    top: hp("0.8915802168715743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_421_0_4067_0_4058_0_4325: {
    flexGrow: 1,
    width: wp("3.8070170084635415%"),
    height: hp("1.7405343186008473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.70703125%"),
    top: hp("0.47367283555328754%")
  },
  ImageBackground_I0_421_0_4067_0_4058_0_4329: {
    width: wp("3.8070170084635415%"),
    height: hp("1.740534448884224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_422: {
    width: wp("41.86666666666667%"),
    height: hp("41.80327868852459%"),
    top: hp("7.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_422_0_4060: {
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
  View_I0_422_0_4061: {
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
  View_I0_422_0_4063: {
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
  View_I0_422_0_4062: {
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
  ImageBackground_I0_422_0_4064: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_422_0_4065: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_422_0_4065_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_422_0_4065_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_422_0_4066: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_422_0_4066_0_4110: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_I0_422_0_4066_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_422_0_4067: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("26.63934426229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_422_0_4067_0_4056: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_422_0_4067_0_4058: {
    flexGrow: 1,
    width: wp("5.221052042643229%"),
    height: hp("2.6747195447077514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5227864583333321%"),
    top: hp("0.8915802168715743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_422_0_4067_0_4058_0_4325: {
    flexGrow: 1,
    width: wp("3.8070170084635415%"),
    height: hp("1.7405343186008473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.70703125%"),
    top: hp("0.47367283555328754%")
  },
  ImageBackground_I0_422_0_4067_0_4058_0_4329: {
    width: wp("3.8070170084635415%"),
    height: hp("1.740534448884224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_3332: {
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_3332: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_424: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("28.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_424_0_4412: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_424_0_4415: {
    width: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_424_0_4417: {
    width: wp("13.3856201171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.973828124999997%"),
    top: hp("1.092896174863391%")
  },
  Text_I0_424_0_4417: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_425: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("28.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_425_0_4412: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_425_0_4415: {
    width: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_425_0_4417: {
    width: wp("13.3856201171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9738281249999936%"),
    top: hp("1.092896174863391%")
  },
  Text_I0_425_0_4417: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_426: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("28.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_426_0_4412: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_426_0_4415: {
    width: wp("21.333333333333336%"),
    height: hp("5.05464480874317%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_426_0_4417: {
    width: wp("13.3856201171875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.973828124999999%"),
    top: hp("1.092896174863391%")
  },
  Text_I0_426_0_4417: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3330: {
    width: wp("27.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("18.169398907103826%")
  },
  Text_3_3330: {
    color: "rgba(255, 158, 192, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3327: {
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("12.978142076502733%")
  },
  Text_3_3327: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_429: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("5.191256830601093%"),
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
