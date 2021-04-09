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
      <View style={styles.View_0_523}>
        <View style={styles.View_0_524}>
          <View style={styles.View_0_525}>
            <View style={styles.View_0_526}>
              <View style={styles.View_I0_526_0_3847}>
                <View style={styles.View_I0_526_0_3850} />
                <View style={styles.View_I0_526_0_3852}>
                  <Text style={styles.Text_I0_526_0_3852}>ADD TO CART</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_0_527}>
              <View style={styles.View_0_529} />
              <View style={styles.View_0_528} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5b7/1a36/def7d294bf6a61caa884fc954d4b3c75"
                }}
                style={styles.ImageBackground_0_530}
              />
            </View>
            <View style={styles.View_0_531}>
              <View style={styles.View_I0_531_0_3883}>
                <Text style={styles.Text_I0_531_0_3883}>Crop top</Text>
              </View>
            </View>
            <View style={styles.View_0_532}>
              <View style={styles.View_I0_532_0_4110}>
                <Text style={styles.Text_I0_532_0_4110}>$25.90</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_533}>
          <View style={styles.View_0_534}>
            <View style={styles.View_0_535}>
              <View style={styles.View_I0_535_0_3847}>
                <View style={styles.View_I0_535_0_3850} />
                <View style={styles.View_I0_535_0_3852}>
                  <Text style={styles.Text_I0_535_0_3852}>ADD TO CART</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_0_536}>
              <View style={styles.View_0_538} />
              <View style={styles.View_0_537} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e338/d866/49f60b7cfaa4f519aff53bdd806265ac"
                }}
                style={styles.ImageBackground_0_539}
              />
            </View>
            <View style={styles.View_0_540}>
              <View style={styles.View_I0_540_0_3883}>
                <Text style={styles.Text_I0_540_0_3883}>Printed dress</Text>
              </View>
            </View>
            <View style={styles.View_0_541}>
              <View style={styles.View_I0_541_0_4110}>
                <Text style={styles.Text_I0_541_0_4110}>$59</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_542}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d2b/9aa6/f182e29b5cf9be4ae58225cdd483284f"
            }}
            style={styles.ImageBackground_0_543}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad7c/ddf6/ae7e52fe0824591525df0cf06e5fc689"
          }}
          style={styles.ImageBackground_0_544}
        />
        <View style={styles.View_0_545}>
          <View style={styles.View_0_546}>
            <View style={styles.View_0_547}>
              <View style={styles.View_0_549} />
              <View style={styles.View_0_548} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3607/feec/3b17c7c18a8ca60523d32d8231095934"
                }}
                style={styles.ImageBackground_0_550}
              />
            </View>
            <View style={styles.View_0_551}>
              <View style={styles.View_I0_551_0_3883}>
                <Text style={styles.Text_I0_551_0_3883}>Neon tank</Text>
              </View>
            </View>
            <View style={styles.View_0_552}>
              <View style={styles.View_I0_552_0_4110}>
                <Text style={styles.Text_I0_552_0_4110}>$15.80</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_553}>
          <View style={styles.View_0_554}>
            <View style={styles.View_I0_554_0_3883}>
              <Text style={styles.Text_I0_554_0_3883}>Edit</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_555}>
        <View style={styles.View_I0_555_0_4221}>
          <View style={styles.View_I0_555_0_4222}>
            <View style={styles.View_I0_555_0_4223}>
              <Text style={styles.Text_I0_555_0_4223}>Saved Items</Text>
            </View>
          </View>
          <View style={styles.View_I0_555_0_4224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
              }}
              style={styles.ImageBackground_I0_555_0_4225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_556} />
      <View style={styles.View_0_557}>
        <View style={styles.View_0_558} />
        <View style={styles.View_0_559}>
          <View style={styles.View_I0_559_0_3847}>
            <View style={styles.View_I0_559_0_3850} />
            <View style={styles.View_I0_559_0_3852}>
              <Text style={styles.Text_I0_559_0_3852}>SHARE</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_560}>
          <View style={styles.View_0_561}>
            <View style={styles.View_I0_561_0_4526}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1d5/4ec0/cce77090fd22ef51f9c4fae7aa3e8e67"
                }}
                style={styles.ImageBackground_I0_561_0_4527}
              />
              <View style={styles.View_I0_561_0_4528}>
                <Text style={styles.Text_I0_561_0_4528}>Robert</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_0_562}>
            <View style={styles.View_I0_562_0_4526}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f2a/c5a9/2f79cffc1c9a7d92530e4737ac137b35"
                }}
                style={styles.ImageBackground_I0_562_0_4527}
              />
              <View style={styles.View_I0_562_0_4528}>
                <Text style={styles.Text_I0_562_0_4528}>Alex</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_0_563}>
            <View style={styles.View_0_564}>
              <View style={styles.View_I0_564_0_4526}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56af/f245/394c765346d8619be7cfa588f4c7f050"
                  }}
                  style={styles.ImageBackground_I0_564_0_4527}
                />
                <View style={styles.View_I0_564_0_4528}>
                  <Text style={styles.Text_I0_564_0_4528}>Bobby</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_0_565}>
              <View style={styles.View_I0_565_0_4530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f2d/13b7/d145c5c21a417f2a73698af997338fd2"
                  }}
                  style={styles.ImageBackground_I0_565_0_4531}
                />
                <View style={styles.View_I0_565_0_4534}>
                  <Text style={styles.Text_I0_565_0_4534}>2</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_566}>
            <View style={styles.View_I0_566_0_4526}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df5/8b99/f8154c862995038ea986e863e26303aa"
                }}
                style={styles.ImageBackground_I0_566_0_4527}
              />
              <View style={styles.View_I0_566_0_4528}>
                <Text style={styles.Text_I0_566_0_4528}>Mary</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_0_567}>
            <View style={styles.View_0_568}>
              <View style={styles.View_I0_568_0_4526}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e24/1e86/2a2b04e34c0b8f6b9ec753152bbd0f17"
                  }}
                  style={styles.ImageBackground_I0_568_0_4527}
                />
                <View style={styles.View_I0_568_0_4528}>
                  <Text style={styles.Text_I0_568_0_4528}>Jane</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_0_569}>
              <View style={styles.View_I0_569_0_4530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f2d/13b7/d145c5c21a417f2a73698af997338fd2"
                  }}
                  style={styles.ImageBackground_I0_569_0_4531}
                />
                <View style={styles.View_I0_569_0_4534}>
                  <Text style={styles.Text_I0_569_0_4534}>1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3_3477}>
          <Text style={styles.Text_3_3477}>Share</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
          }}
          style={styles.ImageBackground_0_571}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_523: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("115.30054644808743%"),
    minHeight: hp("115.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("7.240437158469945%")
  },
  View_0_524: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("51.36612021857923%"),
    minHeight: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%"),
    top: hp("16.393442622950822%")
  },
  View_0_525: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("51.36612021857923%"),
    minHeight: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_526: {
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    top: hp("44.67213114754097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_526_0_3847: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_526_0_3850: {
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 45, 135, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_526_0_3852: {
    width: wp("32.49325764973958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.539518229166674%"),
    top: hp("2.0491803278688536%")
  },
  Text_I0_526_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_527: {
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
  View_0_529: {
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
  View_0_528: {
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
  ImageBackground_0_530: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_531: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_531_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_531_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_532: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_532_0_4110: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  Text_I0_532_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_533: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("51.36612021857923%"),
    minHeight: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.393442622950822%")
  },
  View_0_534: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("51.36612021857923%"),
    minHeight: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_535: {
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    top: hp("44.67213114754097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_535_0_3847: {
    flexGrow: 1,
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_535_0_3850: {
    width: wp("41.333333333333336%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 45, 135, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_535_0_3852: {
    width: wp("32.49325764973958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.539518229166667%"),
    top: hp("2.0491803278688536%")
  },
  Text_I0_535_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_536: {
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
  View_0_538: {
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
  View_0_537: {
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
  ImageBackground_0_539: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_540: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_540_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_540_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_541: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_541_0_4110: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  Text_I0_541_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_542: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191259%")
  },
  ImageBackground_0_543: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_544: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("8.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%")
  },
  View_0_545: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.22404371584699%")
  },
  View_0_546: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_547: {
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
  View_0_549: {
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
  View_0_548: {
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
  ImageBackground_0_550: {
    width: wp("41.86666666666667%"),
    height: hp("33.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_551: {
    width: wp("43.46666666666666%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.245901639344254%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_551_0_3883: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_551_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_552: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("38.93442622950822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_552_0_4110: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158282%")
  },
  Text_I0_552_0_4110: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_553: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.2%"),
    top: hp("0%")
  },
  View_0_554: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_554_0_3883: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_554_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_555: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_555_0_4221: {
    flexGrow: 1,
    width: wp("72.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("-0.4098360655737716%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_555_0_4222: {
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
  View_I0_555_0_4223: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_555_0_4223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_555_0_4224: {
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
  ImageBackground_I0_555_0_4225: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_556: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(201, 201, 201, 1)",
    opacity: 0.31785401701927185,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_557: {
    width: wp("112.79999999999998%"),
    minWidth: wp("112.79999999999998%"),
    height: hp("50.95628415300546%"),
    minHeight: hp("50.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.97267759562842%")
  },
  View_0_558: {
    width: wp("100%"),
    height: hp("50.95628415300546%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 47,
    borderTopRightRadius: 47,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_559: {
    width: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("35.928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_559_0_3847: {
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
  View_I0_559_0_3850: {
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
  View_I0_559_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_559_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_560: {
    width: wp("106.4%"),
    minWidth: wp("106.4%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("15.710382513661195%")
  },
  View_0_561: {
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666665%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_561_0_4526: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_561_0_4527: {
    width: wp("18.933333333333334%"),
    height: hp("9.699453551912567%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_561_0_4528: {
    width: wp("15.2%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%")
  },
  Text_I0_561_0_4528: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_562: {
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_562_0_4526: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_562_0_4527: {
    width: wp("18.933333333333334%"),
    height: hp("9.699453551912567%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_562_0_4528: {
    width: wp("15.2%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%")
  },
  Text_I0_562_0_4528: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_563: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("0%")
  },
  View_0_564: {
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_564_0_4526: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_564_0_4527: {
    width: wp("18.933333333333334%"),
    height: hp("9.699453551912567%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_564_0_4528: {
    width: wp("15.2%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%")
  },
  Text_I0_564_0_4528: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_565: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_565_0_4530: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_565_0_4531: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_565_0_4534: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.6830601092896273%")
  },
  Text_I0_565_0_4534: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_566: {
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_566_0_4526: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_566_0_4527: {
    width: wp("18.933333333333334%"),
    height: hp("9.699453551912567%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_566_0_4528: {
    width: wp("15.2%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666636%")
  },
  Text_I0_566_0_4528: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_567: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_568: {
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_568_0_4526: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    height: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_568_0_4527: {
    width: wp("18.933333333333334%"),
    height: hp("9.699453551912567%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_568_0_4528: {
    width: wp("15.2%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%")
  },
  Text_I0_568_0_4528: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_569: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_569_0_4530: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_569_0_4531: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_569_0_4534: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.6830601092896273%")
  },
  Text_I0_569_0_4534: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3477: {
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("7.923497267759565%")
  },
  Text_3_3477: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_571: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%")
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
