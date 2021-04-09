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
      <View style={styles.View_0_926}>
        <View style={styles.View_0_927}>
          <View style={styles.View_0_928} />
          <View style={styles.View_0_929}>
            <View style={styles.View_0_930}>
              <View style={styles.View_I0_930_0_3871} />
              <View style={styles.View_I0_930_0_3874}>
                <Text style={styles.Text_I0_930_0_3874}>XS</Text>
              </View>
            </View>
            <View style={styles.View_0_931}>
              <View style={styles.View_I0_931_0_3876}>
                <View style={styles.View_I0_931_0_3878} />
              </View>
              <View style={styles.View_I0_931_0_3881}>
                <Text style={styles.Text_I0_931_0_3881}>S</Text>
              </View>
            </View>
            <View style={styles.View_0_932}>
              <View style={styles.View_I0_932_0_3876}>
                <View style={styles.View_I0_932_0_3878} />
              </View>
              <View style={styles.View_I0_932_0_3881}>
                <Text style={styles.Text_I0_932_0_3881}>M</Text>
              </View>
            </View>
            <View style={styles.View_0_933}>
              <View style={styles.View_I0_933_0_3876}>
                <View style={styles.View_I0_933_0_3878} />
              </View>
              <View style={styles.View_I0_933_0_3881}>
                <Text style={styles.Text_I0_933_0_3881}>XL</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3_3100}>
          <Text style={styles.Text_3_3100}>Find your Fit Assistant size</Text>
        </View>
        <View style={styles.View_0_935}>
          <View style={styles.View_I0_935_0_4342}>
            <View style={styles.View_I0_935_0_4343}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_935_0_4345}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9515/6618/a4fb6bc16bf583f823817f595a40301d"
                }}
                style={styles.ImageBackground_I0_935_0_4344}
              />
              <View style={styles.View_I0_935_0_4346}>
                <View style={styles.View_I0_935_0_4346_0_4310} />
              </View>
            </View>
            <View style={styles.View_I0_935_0_4347}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d10/3853/18f4993e3f111ff613f8f918d0ac201a"
                }}
                style={styles.ImageBackground_I0_935_0_4347_0_3898}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d10/3853/18f4993e3f111ff613f8f918d0ac201a"
                }}
                style={styles.ImageBackground_I0_935_0_4347_0_3897}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_936}>
        <View style={styles.View_0_937} />
        <View style={styles.View_0_938}>
          <View style={styles.View_0_940} />
          <View style={styles.View_0_939} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e56/97ef/b538b051e35706e99c21994299a676c6"
            }}
            style={styles.ImageBackground_0_941}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5dc/f9f9/ed630a2b385f4a1c2b955399f482de2a"
            }}
            style={styles.ImageBackground_0_942}
          />
        </View>
        <View style={styles.View_0_943} />
      </View>
      <View style={styles.View_0_944}>
        <View style={styles.View_I0_944_0_3862}>
          <View style={styles.View_I0_944_0_3865} />
          <View style={styles.View_I0_944_3_1696}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cf3/3d70/25c2f9b3bfd46f267da1aa5c3798cbb3"
              }}
              style={styles.ImageBackground_I0_944_3_1697}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_945}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
          }}
          style={styles.ImageBackground_0_946}
        />
        <View style={styles.View_0_947}>
          <View style={styles.View_I0_947_0_3841}>
            <View style={styles.View_I0_947_0_3841_0_4565}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                }}
                style={styles.ImageBackground_I0_947_0_3841_0_4569}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                }}
                style={styles.ImageBackground_I0_947_0_3841_0_4570}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                }}
                style={styles.ImageBackground_I0_947_0_3841_0_4571}
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
  View_0_926: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("80.87431693989072%")
  },
  View_0_927: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_928: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_929: {
    width: wp("65.66907145182292%"),
    minWidth: wp("65.66907145182292%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.165885416666667%"),
    top: hp("5.327868852459005%")
  },
  View_0_930: {
    width: wp("12.229268391927084%"),
    minWidth: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_930_0_3871: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_930_0_3874: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1903645833333343%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_930_0_3874: {
    color: "rgba(178, 188, 200, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_931: {
    width: wp("12.229268391927084%"),
    minWidth: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.813281250000003%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_931_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_931_0_3878: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_931_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_931_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_932: {
    width: wp("12.229268391927084%"),
    minWidth: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.6265625%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_932_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_932_0_3878: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_932_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_932_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_933: {
    width: wp("12.229268391927084%"),
    minWidth: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.43984375%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_933_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_933_0_3878: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_933_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_933_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3100: {
    width: wp("52%"),
    top: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%")
  },
  Text_3_3100: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_935: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999998%"),
    top: hp("17.4863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_935_0_4342: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_935_0_4343: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_935_0_4345: {
    width: wp("9.866666666666667%"),
    height: hp("5.05464480874317%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_935_0_4344: {
    width: wp("9.866666666666667%"),
    height: hp("5.05464480874317%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_935_0_4346: {
    width: wp("9.866666666666667%"),
    height: hp("5.05464480874317%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 158, 192, 1)"
  },
  View_I0_935_0_4346_0_4310: {
    flexGrow: 1,
    width: wp("25.70526529947917%"),
    height: hp("13.168680993585639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_935_0_4347: {
    width: wp("5.7122802734375%"),
    height: hp("3.059390073265534%"),
    top: hp("0.665116440402997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.077083333333338%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_935_0_4347_0_3898: {
    flexGrow: 1,
    width: wp("4.9982447306315105%"),
    height: hp("1.784644231118791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4760416666666636%"),
    top: hp("0.6373671234631217%")
  },
  ImageBackground_I0_935_0_4347_0_3897: {
    flexGrow: 1,
    width: wp("4.9982447306315105%"),
    height: hp("1.784644231118791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4760416666666636%"),
    top: hp("0.6373671234631217%")
  },
  View_0_936: {
    width: wp("268%"),
    minWidth: wp("268%"),
    height: hp("60.92896174863388%"),
    minHeight: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-84%"),
    top: hp("13.797814207650273%")
  },
  View_0_937: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("54.78142076502732%"),
    minHeight: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("180.8%"),
    top: hp("3.142076502732241%"),
    backgroundColor: "rgba(233, 233, 231, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_938: {
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
  View_0_940: {
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
  View_0_939: {
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
  ImageBackground_0_941: {
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
  ImageBackground_0_942: {
    width: wp("138.058837890625%"),
    minWidth: wp("138.058837890625%"),
    height: hp("98.90710382513662%"),
    minHeight: hp("98.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.400390625%"),
    top: hp("-4.508196721311474%")
  },
  View_0_943: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("54.78142076502732%"),
    minHeight: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.142076502732241%"),
    backgroundColor: "rgba(233, 233, 231, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_944: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("70.49180327868852%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_944_0_3862: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_944_0_3865: {
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
  View_I0_944_3_1696: {
    width: wp("9.066666666666666%"),
    height: hp("4.781420765027322%"),
    top: hp("2.037773757684434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_944_3_1697: {
    width: wp("6.611110941569011%"),
    height: hp("3.0225409836065573%"),
    top: hp("0.8338803150614638%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2278645833333428%")
  },
  View_0_945: {
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
  ImageBackground_0_946: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_947: {
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
  View_I0_947_0_3841: {
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
  View_I0_947_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9598958333333343%"),
    top: hp("0.4439890710382519%")
  },
  ImageBackground_I0_947_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_947_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.47814207650273133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_947_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054644%"),
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
