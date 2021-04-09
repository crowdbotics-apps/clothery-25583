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
      <View style={styles.View_4_1}>
        <View style={styles.View_4_2}>
          <View style={styles.View_I4_2_0_3847}>
            <View style={styles.View_I4_2_0_3850} />
            <View style={styles.View_I4_2_0_3852}>
              <Text style={styles.Text_I4_2_0_3852}>APPLY</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_3}>
          <View style={styles.View_4_4}>
            <View style={styles.View_4_5}>
              <View style={styles.View_4_6} />
            </View>
            <View style={styles.View_4_7}>
              <Text style={styles.Text_4_7}>Clear All</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_4_8}>
        <View style={styles.View_4_9}>
          <View style={styles.View_4_10} />
          <View style={styles.View_4_11}>
            <View style={styles.View_4_12}>
              <View style={styles.View_I4_12_0_3876}>
                <View style={styles.View_I4_12_0_3878} />
              </View>
              <View style={styles.View_I4_12_0_3881}>
                <Text style={styles.Text_I4_12_0_3881}>XL</Text>
              </View>
            </View>
            <View style={styles.View_4_13}>
              <View style={styles.View_I4_13_0_3876}>
                <View style={styles.View_I4_13_0_3878} />
              </View>
              <View style={styles.View_I4_13_0_3881}>
                <Text style={styles.Text_I4_13_0_3881}>L</Text>
              </View>
            </View>
            <View style={styles.View_4_14}>
              <View style={styles.View_I4_14_0_3876}>
                <View style={styles.View_I4_14_0_3878} />
              </View>
              <View style={styles.View_I4_14_0_3881}>
                <Text style={styles.Text_I4_14_0_3881}>M</Text>
              </View>
            </View>
            <View style={styles.View_4_15}>
              <View style={styles.View_I4_15_0_3876}>
                <View style={styles.View_I4_15_0_3878} />
              </View>
              <View style={styles.View_I4_15_0_3881}>
                <Text style={styles.Text_I4_15_0_3881}>S</Text>
              </View>
            </View>
            <View style={styles.View_4_16}>
              <View style={styles.View_I4_16_0_3876}>
                <View style={styles.View_I4_16_0_3878} />
              </View>
              <View style={styles.View_I4_16_0_3881}>
                <Text style={styles.Text_I4_16_0_3881}>XS</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_4_17}>
            <Text style={styles.Text_4_17}>Size</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52db/d84a/6069b84f7f11ef90349cef25632eb527"
            }}
            style={styles.ImageBackground_4_18}
          />
        </View>
      </View>
      <View style={styles.View_4_19}>
        <View style={styles.View_4_20} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7508/fc29/f7421ef1a57370d591d8773623667228"
          }}
          style={styles.ImageBackground_4_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8a/bce5/c8428aeab6c04e58a38f8cf8c4976964"
          }}
          style={styles.ImageBackground_4_22}
        />
        <View style={styles.View_4_23}>
          <Text style={styles.Text_4_23}>Colour</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8601/bf49/12a818c248460b59484602e4ca8707f1"
          }}
          style={styles.ImageBackground_4_24}
        />
      </View>
      <View style={styles.View_4_27}>
        <View style={styles.View_4_28}>
          <View style={styles.View_4_29} />
          <View style={styles.View_4_30}>
            <Text style={styles.Text_4_30}>Category</Text>
          </View>
          <View style={styles.View_4_31}>
            <Text style={styles.Text_4_31}>Clear</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52db/d84a/6069b84f7f11ef90349cef25632eb527"
            }}
            style={styles.ImageBackground_4_32}
          />
        </View>
      </View>
      <View style={styles.View_4_44}>
        <View style={styles.View_4_45} />
        <View style={styles.View_4_59}>
          <Text style={styles.Text_4_59}>$200 - $1400</Text>
        </View>
        <View style={styles.View_4_60}>
          <Text style={styles.Text_4_60}>Price range</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52db/d84a/6069b84f7f11ef90349cef25632eb527"
          }}
          style={styles.ImageBackground_4_61}
        />
      </View>
      <View style={styles.View_4_62}>
        <View style={styles.View_4_63}>
          <Text style={styles.Text_4_63}>Clear</Text>
        </View>
        <View style={styles.View_4_64}>
          <Text style={styles.Text_4_64}>Filter</Text>
        </View>
        <View style={styles.View_4_65}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
            }}
            style={styles.ImageBackground_4_66}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_4_1: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("95.90163934426229%")
  },
  View_4_2: {
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
  View_I4_2_0_3847: {
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
  View_I4_2_0_3850: {
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
  View_I4_2_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("2.868852459016395%")
  },
  Text_I4_2_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_3: {
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
  View_4_4: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_5: {
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
  View_4_6: {
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
  View_4_7: {
    width: wp("17.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("2.3224043715847102%")
  },
  Text_4_7: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("50.54644808743169%")
  },
  View_4_9: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_10: {
    width: wp("87.2%"),
    height: hp("21.174863387978142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_4_11: {
    width: wp("78.14900716145833%"),
    minWidth: wp("78.14900716145833%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("9.699453551912562%")
  },
  View_4_12: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.91979166666665%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_12_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_12_0_3878: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I4_12_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016402%")
  },
  Text_I4_12_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_13: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.43984375000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_13_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_13_0_3878: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I4_13_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016402%")
  },
  Text_I4_13_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_14: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.959895833333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_14_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_14_0_3878: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I4_14_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016402%")
  },
  Text_I4_14_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_15: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.479947916666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_15_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_15_0_3878: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I4_15_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016402%")
  },
  Text_I4_15_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_16: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_16_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_16_0_3878: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I4_16_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016402%")
  },
  Text_I4_16_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_17: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("2.5956284153005456%")
  },
  Text_4_17: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_18: {
    width: wp("3.480164591471354%"),
    height: hp("0.1366120218579235%"),
    top: hp("4.508196721311478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%")
  },
  View_4_19: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("38.25136612021858%")
  },
  View_4_20: {
    width: wp("87.2%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_4_21: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%")
  },
  ImageBackground_4_22: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%")
  },
  View_4_23: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("2.5956284153005527%")
  },
  Text_4_23: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_24: {
    width: wp("3.746831258138021%"),
    height: hp("1.9194832265051338%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%")
  },
  View_4_27: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("25.956284153005466%")
  },
  View_4_28: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_29: {
    width: wp("87.2%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_4_30: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("2.595628415300542%")
  },
  Text_4_30: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_31: {
    width: wp("28.26666666666667%"),
    top: hp("2.6095697788592886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333334%")
  },
  Text_4_31: {
    color: "rgba(150, 94, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_32: {
    width: wp("3.480164591471354%"),
    height: hp("0.13734452385720008%"),
    top: hp("4.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%")
  },
  View_4_44: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("13.661202185792352%")
  },
  View_4_45: {
    width: wp("87.2%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_4_59: {
    width: wp("28.26666666666667%"),
    top: hp("2.595628415300542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333334%")
  },
  Text_4_59: {
    color: "rgba(150, 94, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_60: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("2.595628415300542%")
  },
  Text_4_60: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_61: {
    width: wp("3.480164591471354%"),
    height: hp("0.1366120218579235%"),
    top: hp("4.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%")
  },
  View_4_62: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.786885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_63: {
    width: wp("11.733333333333333%"),
    top: hp("-0.5464480874316946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%")
  },
  Text_4_63: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_64: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("-0.27322404371584685%")
  },
  Text_4_64: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_65: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("-0.4098360655737707%")
  },
  ImageBackground_4_66: {
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
