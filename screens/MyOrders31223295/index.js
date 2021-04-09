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
      <View style={styles.View_0_1014}>
        <View style={styles.View_3_2603}>
          <View style={styles.View_3_2604} />
          <View style={styles.View_3_2605} />
          <View style={styles.View_3_2606}>
            <View style={styles.View_I3_2606_0_4284} />
          </View>
        </View>
        <View style={styles.View_3_2608}>
          <View style={styles.View_3_2609}>
            <View style={styles.View_3_2610} />
            <View style={styles.View_3_2611}>
              <View style={styles.View_3_2612} />
              <View style={styles.View_3_2613} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b275/eaff/a30812ff08b702acc30d3deb4ee065b4"
                }}
                style={styles.ImageBackground_3_2614}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc88/8e0e/d61e6cf105a40bba6d523ecd7ae6b0e6"
                }}
                style={styles.ImageBackground_3_2615}
              />
            </View>
            <View style={styles.View_3_2616}>
              <View style={styles.View_3_2617}>
                <Text style={styles.Text_3_2617}>Color</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adf3/d196/002f4b281da3ec68b54f1a5b42e88eaa"
              }}
              style={styles.ImageBackground_3_2618}
            />
            <View style={styles.View_3_2619}>
              <View style={styles.View_3_2620}>
                <Text style={styles.Text_3_2620}>One Size</Text>
              </View>
            </View>
            <View style={styles.View_3_2621}>
              <View style={styles.View_3_2622}>
                <Text style={styles.Text_3_2622}>1x</Text>
              </View>
            </View>
            <View style={styles.View_3_2623}>
              <View style={styles.View_3_2624}>
                <Text style={styles.Text_3_2624}>$120</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_2625}>
            <Text style={styles.Text_3_2625}>Belt suit blazer</Text>
          </View>
          <View style={styles.View_3_2626}>
            <Text style={styles.Text_3_2626}>ZF876</Text>
          </View>
        </View>
        <View style={styles.View_3_2627}>
          <View style={styles.View_3_2628}>
            <View style={styles.View_3_2629} />
            <View style={styles.View_3_2636}>
              <Text style={styles.Text_3_2636}>Progress</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3_2639}>
          <Text style={styles.Text_3_2639}>More info +</Text>
        </View>
        <View style={styles.View_3_2633}>
          <Text style={styles.Text_3_2633}>Aug 29, 2019 </Text>
        </View>
        <View style={styles.View_3_2602}>
          <Text style={styles.Text_3_2602}>Order #456756</Text>
        </View>
      </View>
      <View style={styles.View_0_1022}>
        <View style={styles.View_0_1023}>
          <View style={styles.View_I0_1023_0_3941} />
          <View style={styles.View_I0_1023_0_3943}>
            <Text style={styles.Text_I0_1023_0_3943}>All</Text>
          </View>
        </View>
        <View style={styles.View_0_1024}>
          <View style={styles.View_I0_1024_0_3948} />
          <View style={styles.View_I0_1024_0_3952}>
            <Text style={styles.Text_I0_1024_0_3952}>Progress</Text>
          </View>
        </View>
        <View style={styles.View_0_1025}>
          <View style={styles.View_I0_1025_0_3948} />
          <View style={styles.View_I0_1025_0_3952}>
            <Text style={styles.Text_I0_1025_0_3952}>Delivered</Text>
          </View>
        </View>
        <View style={styles.View_0_1026}>
          <View style={styles.View_I0_1026_0_3948} />
          <View style={styles.View_I0_1026_0_3952}>
            <Text style={styles.Text_I0_1026_0_3952}>Canceled</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3236}>
        <Text style={styles.Text_3_3236}>My orders</Text>
      </View>
      <View style={styles.View_0_1028}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
          }}
          style={styles.ImageBackground_0_1029}
        />
        <View style={styles.View_0_1030}>
          <View style={styles.View_I0_1030_0_3841}>
            <View style={styles.View_I0_1030_0_3841_0_4565}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                }}
                style={styles.ImageBackground_I0_1030_0_3841_0_4569}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                }}
                style={styles.ImageBackground_I0_1030_0_3841_0_4570}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                }}
                style={styles.ImageBackground_I0_1030_0_3841_0_4571}
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
  View_0_1014: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("42.759562841530055%"),
    minHeight: hp("42.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("32.51366120218579%")
  },
  View_3_2603: {
    width: wp("87.2%"),
    height: hp("42.759562841530055%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_2604: {
    width: wp("87.2%"),
    height: hp("42.759562841530055%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_2605: {
    width: wp("87.2%"),
    height: hp("42.759562841530055%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_2606: {
    width: wp("87.2%"),
    height: hp("42.759562841530055%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)"
  },
  View_I3_2606_0_4284: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("42.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_2608: {
    width: wp("78.66666666666666%"),
    height: hp("23.770491803278688%"),
    top: hp("10.245901639344268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_2609: {
    width: wp("78.66666666666666%"),
    height: hp("23.770491803278688%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_2610: {
    width: wp("78.66666666666666%"),
    height: hp("23.633879781420767%"),
    top: hp("0.05890059340846676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_2611: {
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
  View_3_2612: {
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
  View_3_2613: {
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
  ImageBackground_3_2614: {
    width: wp("20%"),
    height: hp("19.255211835350494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_2615: {
    width: wp("51.26167805989583%"),
    height: hp("36.74863387978142%"),
    top: hp("-0.47173838797814227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.529166666666669%")
  },
  View_3_2616: {
    width: wp("12.266666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("11.06557377049181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_2617: {
    width: wp("12.266666666666666%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_2617: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_2618: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%")
  },
  View_3_2619: {
    width: wp("18.4%"),
    height: hp("2.73224043715847%"),
    top: hp("11.06557377049181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_2620: {
    width: wp("18.4%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_2620: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2621: {
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.8%"),
    top: hp("17.349726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_2622: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_3_2622: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2623: {
    width: wp("9.866666666666667%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333334%"),
    top: hp("16.393442622950822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_2624: {
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  Text_3_2624: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2625: {
    width: wp("32%"),
    top: hp("4.371584699453557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.533333333333335%")
  },
  Text_3_2625: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2626: {
    width: wp("11.466666666666667%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.533333333333335%")
  },
  Text_3_2626: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2627: {
    width: wp("27.200000000000003%"),
    height: hp("4.371584699453552%"),
    top: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%")
  },
  View_3_2628: {
    width: wp("27.200000000000003%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_2629: {
    width: wp("27.200000000000003%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(127, 214, 221, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_2636: {
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599999999999998%"),
    top: hp("0.2732240437158424%")
  },
  Text_3_2636: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2639: {
    width: wp("22.400000000000002%"),
    top: hp("36.59834731471996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.6%")
  },
  Text_3_2639: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2633: {
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.73333333333333%"),
    top: hp("4.371584699453557%")
  },
  Text_3_2633: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2602: {
    width: wp("75.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("3.825136612021865%")
  },
  Text_3_2602: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1022: {
    width: wp("107.2%"),
    minWidth: wp("107.2%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("23.08743169398907%")
  },
  View_0_1023: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1023_0_3941: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1023_0_3943: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999998%"),
    top: hp("1.3661202185792334%")
  },
  Text_I0_1023_0_3943: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1024: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1024_0_3948: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1024_0_3952: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666664%"),
    top: hp("1.3661202185792334%")
  },
  Text_I0_1024_0_3952: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1025: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1025_0_3948: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1025_0_3952: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("1.3661202185792334%")
  },
  Text_I0_1025_0_3952: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1026: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1026_0_3948: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_1026_0_3952: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("1.3661202185792334%")
  },
  Text_I0_1026_0_3952: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3236: {
    width: wp("37.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("15.300546448087433%")
  },
  Text_3_3236: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1028: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.650273224043716%")
  },
  ImageBackground_0_1029: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1030: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1030_0_3841: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666515%"),
    top: hp("0.13661202185792298%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1030_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9598958333333343%"),
    top: hp("0.44398907103825014%")
  },
  ImageBackground_I0_1030_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1030_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.4781420765027331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1030_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.13333333333334%")
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
