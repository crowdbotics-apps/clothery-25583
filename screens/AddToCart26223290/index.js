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
      <View style={styles.View_0_877}>
        <View style={styles.View_I0_877_0_3847}>
          <View style={styles.View_I0_877_0_3850} />
          <View style={styles.View_I0_877_0_3852}>
            <Text style={styles.Text_I0_877_0_3852}>ADD</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_878}>
        <View style={styles.View_I0_878_0_3885}>
          <View style={styles.View_I0_878_0_3886}>
            <View style={styles.View_I0_878_0_3888} />
            <View style={styles.View_I0_878_0_3887} />
            <View style={styles.View_I0_878_0_3889}>
              <View style={styles.View_I0_878_0_3889_0_4300} />
            </View>
          </View>
          <View style={styles.View_I0_878_3_1451}>
            <Text style={styles.Text_I0_878_3_1451}>Orange</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eea0/8b25/4f83e5614809b817072fc07a38124367"
            }}
            style={styles.ImageBackground_I0_878_0_3892}
          />
        </View>
      </View>
      <View style={styles.View_3_3040}>
        <Text style={styles.Text_3_3040}>$120</Text>
      </View>
      <View style={styles.View_3_3034}>
        <Text style={styles.Text_3_3034}>Belt suit blazer</Text>
      </View>
      <View style={styles.View_0_881}>
        <View style={styles.View_0_882} />
        <View style={styles.View_0_883}>
          <View style={styles.View_0_885} />
          <View style={styles.View_0_884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e56/97ef/b538b051e35706e99c21994299a676c6"
            }}
            style={styles.ImageBackground_0_886}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5dc/f9f9/ed630a2b385f4a1c2b955399f482de2a"
            }}
            style={styles.ImageBackground_0_887}
          />
        </View>
        <View style={styles.View_0_888} />
      </View>
      <View style={styles.View_0_889}>
        <View style={styles.View_I0_889_0_3862}>
          <View style={styles.View_I0_889_0_3865} />
          <View style={styles.View_I0_889_3_1696}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cf3/3d70/25c2f9b3bfd46f267da1aa5c3798cbb3"
              }}
              style={styles.ImageBackground_I0_889_3_1697}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_890}>
        <View style={styles.View_0_891}>
          <View style={styles.View_0_892} />
          <View style={styles.View_0_894} />
          <View style={styles.View_0_893} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed0a/04ae/782f8fb48647e48bf3b6512992d7497c"
            }}
            style={styles.ImageBackground_0_895}
          />
        </View>
        <View style={styles.View_0_896}>
          <View style={styles.View_I0_896_0_4246}>
            <View style={styles.View_I0_896_0_4247}>
              <View style={styles.View_I0_896_0_4247_0_4483} />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a2c/aeec/b3d211884cf869a547e1e819d061303d"
            }}
            style={styles.ImageBackground_I0_896_3_1642}
          />
        </View>
        <View style={styles.View_3_3055} />
        <View style={styles.View_3_3056}>
          <Text style={styles.Text_3_3056}>Adding to your cart</Text>
        </View>
        <View style={styles.View_0_899}>
          <Text style={styles.Text_0_899}>Belt suit blazer</Text>
        </View>
      </View>
      <View style={styles.View_0_901}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
          }}
          style={styles.ImageBackground_0_902}
        />
        <View style={styles.View_0_903}>
          <View style={styles.View_I0_903_0_3841}>
            <View style={styles.View_I0_903_0_3841_0_4565}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                }}
                style={styles.ImageBackground_I0_903_0_3841_0_4569}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                }}
                style={styles.ImageBackground_I0_903_0_3841_0_4570}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                }}
                style={styles.ImageBackground_I0_903_0_3841_0_4571}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3b8/5046/6b78a3549302a7fdf6b777ce2e39e0f3"
          }}
          style={styles.ImageBackground_0_904}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_877: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_877_0_3847: {
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
  View_I0_877_0_3850: {
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
  View_I0_877_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_877_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_878: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_878_0_3885: {
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
  View_I0_878_0_3886: {
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
  View_I0_878_0_3888: {
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
  View_I0_878_0_3887: {
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
  View_I0_878_0_3889: {
    width: wp("38.666666666666664%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 158, 192, 1)"
  },
  View_I0_878_0_3889_0_4300: {
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
  View_I0_878_3_1451: {
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426243%")
  },
  Text_I0_878_3_1451: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_878_0_3892: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%")
  },
  View_3_3040: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("86.88524590163934%")
  },
  Text_3_3040: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3034: {
    width: wp("37.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("82.78688524590164%")
  },
  Text_3_3034: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_881: {
    width: wp("268%"),
    minWidth: wp("268%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-84%"),
    top: hp("14.344262295081966%")
  },
  View_0_882: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("54.78142076502732%"),
    minHeight: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("180.8%"),
    top: hp("3.142076502732243%"),
    backgroundColor: "rgba(233, 233, 231, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_883: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.4%"),
    top: hp("0%")
  },
  View_0_885: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_884: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_886: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_887: {
    width: wp("138.058837890625%"),
    minWidth: wp("138.058837890625%"),
    height: hp("98.90710382513662%"),
    minHeight: hp("98.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.40026041666667%"),
    top: hp("-4.508196721311474%")
  },
  View_0_888: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("54.78142076502732%"),
    minHeight: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.142076502732243%"),
    backgroundColor: "rgba(233, 233, 231, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_889: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("71.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_889_0_3862: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_889_0_3865: {
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 206, 47, 1)",
    borderColor: "rgba(209, 209, 209, 1)",
    borderWidth: 1
  },
  View_I0_889_3_1696: {
    width: wp("9.066666666666666%"),
    height: hp("4.781420765027322%"),
    top: hp("2.0377737576844197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_889_3_1697: {
    width: wp("6.611110941569011%"),
    height: hp("3.0225409836065573%"),
    top: hp("0.833880315061478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2278645833333428%")
  },
  View_0_890: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.344262295081966%")
  },
  View_0_891: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_892: {
    width: wp("87.2%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_894: {
    width: wp("11.466666666666667%"),
    height: hp("11.081098337642482%"),
    top: hp("2.049180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_893: {
    width: wp("11.466666666666667%"),
    height: hp("11.081098337642482%"),
    top: hp("2.049180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_895: {
    width: wp("11.466666666666667%"),
    height: hp("11.081098337642482%"),
    top: hp("2.049180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_896: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("4.0983606557377055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_896_0_4246: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_896_0_4247: {
    width: wp("9.866666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_896_0_4247_0_4483: {
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
  ImageBackground_I0_896_3_1642: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("2.1857923497267784%")
  },
  View_3_3055: {
    width: wp("50.13333333333333%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333327%"),
    top: hp("8.333333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_3056: {
    width: wp("35.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333327%"),
    top: hp("8.469945355191259%")
  },
  Text_3_3056: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_899: {
    width: wp("32.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333327%"),
    top: hp("4.644808743169397%")
  },
  Text_0_899: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_901: {
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
  ImageBackground_0_902: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_903: {
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
  View_I0_903_0_3841: {
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
  View_I0_903_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9598958333333343%"),
    top: hp("0.4439890710382519%")
  },
  ImageBackground_I0_903_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_903_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.47814207650273133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_903_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.13333333333334%")
  },
  ImageBackground_0_904: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    top: hp("0.13661202185792387%")
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
