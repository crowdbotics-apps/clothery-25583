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
      <View style={styles.View_0_590}>
        <View style={styles.View_0_591}>
          <View style={styles.View_I0_591_0_3847}>
            <View style={styles.View_I0_591_0_3850} />
            <View style={styles.View_I0_591_0_3852}>
              <Text style={styles.Text_I0_591_0_3852}>APPLY</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_592}>
          <View style={styles.View_0_593}>
            <View style={styles.View_0_594}>
              <View style={styles.View_0_596} />
            </View>
            <View style={styles.View_3_2066}>
              <Text style={styles.Text_3_2066}>Clear All</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_599}>
        <View style={styles.View_0_600}>
          <View style={styles.View_0_601} />
          <View style={styles.View_0_602}>
            <View style={styles.View_0_603}>
              <View style={styles.View_I0_603_0_3876}>
                <View style={styles.View_I0_603_0_3878} />
              </View>
              <View style={styles.View_I0_603_0_3881}>
                <Text style={styles.Text_I0_603_0_3881}>XL</Text>
              </View>
            </View>
            <View style={styles.View_0_604}>
              <View style={styles.View_I0_604_0_3876}>
                <View style={styles.View_I0_604_0_3878} />
              </View>
              <View style={styles.View_I0_604_0_3881}>
                <Text style={styles.Text_I0_604_0_3881}>L</Text>
              </View>
            </View>
            <View style={styles.View_0_605}>
              <View style={styles.View_I0_605_0_3876}>
                <View style={styles.View_I0_605_0_3878} />
              </View>
              <View style={styles.View_I0_605_0_3881}>
                <Text style={styles.Text_I0_605_0_3881}>M</Text>
              </View>
            </View>
            <View style={styles.View_0_606}>
              <View style={styles.View_I0_606_0_3876}>
                <View style={styles.View_I0_606_0_3878} />
              </View>
              <View style={styles.View_I0_606_0_3881}>
                <Text style={styles.Text_I0_606_0_3881}>S</Text>
              </View>
            </View>
            <View style={styles.View_0_607}>
              <View style={styles.View_I0_607_0_3876}>
                <View style={styles.View_I0_607_0_3878} />
              </View>
              <View style={styles.View_I0_607_0_3881}>
                <Text style={styles.Text_I0_607_0_3881}>XS</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_3402}>
            <Text style={styles.Text_3_3402}>Size</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52db/d84a/6069b84f7f11ef90349cef25632eb527"
            }}
            style={styles.ImageBackground_0_609}
          />
        </View>
      </View>
      <View style={styles.View_0_610}>
        <View style={styles.View_0_611} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7508/fc29/f7421ef1a57370d591d8773623667228"
          }}
          style={styles.ImageBackground_0_612}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8a/bce5/c8428aeab6c04e58a38f8cf8c4976964"
          }}
          style={styles.ImageBackground_0_613}
        />
        <View style={styles.View_3_3399}>
          <Text style={styles.Text_3_3399}>Colour</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8601/bf49/12a818c248460b59484602e4ca8707f1"
          }}
          style={styles.ImageBackground_0_615}
        />
      </View>
      <View style={styles.View_0_618}>
        <View style={styles.View_0_619}>
          <View style={styles.View_0_620} />
          <View style={styles.View_3_3313}>
            <Text style={styles.Text_3_3313}>Category</Text>
          </View>
          <View style={styles.View_3_3310}>
            <Text style={styles.Text_3_3310}>Clear</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52db/d84a/6069b84f7f11ef90349cef25632eb527"
            }}
            style={styles.ImageBackground_0_623}
          />
        </View>
        <View style={styles.View_0_624}>
          <View style={styles.View_I0_624_0_4497}>
            <View style={styles.View_I0_624_0_4498} />
            <View style={styles.View_I0_624_0_4499}>
              <View style={styles.View_I0_624_0_4499_0_3960}>
                <Text style={styles.Text_I0_624_0_4499_0_3960}>
                  Living + Gifts
                </Text>
              </View>
            </View>
            <View style={styles.View_I0_624_0_4500} />
            <View style={styles.View_I0_624_0_4501}>
              <View style={styles.View_I0_624_0_4501_0_4495}>
                <Text style={styles.Text_I0_624_0_4501_0_4495}>(234)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_625}>
          <View style={styles.View_I0_625_0_4497}>
            <View style={styles.View_I0_625_0_4498} />
            <View style={styles.View_I0_625_0_4499}>
              <View style={styles.View_I0_625_0_4499_0_3960}>
                <Text style={styles.Text_I0_625_0_4499_0_3960}>
                  Knitwear &amp; Sweats
                </Text>
              </View>
            </View>
            <View style={styles.View_I0_625_0_4500} />
            <View style={styles.View_I0_625_0_4501}>
              <View style={styles.View_I0_625_0_4501_0_4495}>
                <Text style={styles.Text_I0_625_0_4501_0_4495}>(346)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_626}>
          <View style={styles.View_I0_626_0_4497}>
            <View style={styles.View_I0_626_0_4498} />
            <View style={styles.View_I0_626_0_4499}>
              <View style={styles.View_I0_626_0_4499_0_3960}>
                <Text style={styles.Text_I0_626_0_4499_0_3960}>Jewelerry</Text>
              </View>
            </View>
            <View style={styles.View_I0_626_0_4500} />
            <View style={styles.View_I0_626_0_4501}>
              <View style={styles.View_I0_626_0_4501_0_4495}>
                <Text style={styles.Text_I0_626_0_4501_0_4495}>(563)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_627}>
          <View style={styles.View_I0_627_0_4497}>
            <View style={styles.View_I0_627_0_4498} />
            <View style={styles.View_I0_627_0_4499}>
              <View style={styles.View_I0_627_0_4499_0_3960}>
                <Text style={styles.Text_I0_627_0_4499_0_3960}>
                  Jeans &amp; Trousers
                </Text>
              </View>
            </View>
            <View style={styles.View_I0_627_0_4500} />
            <View style={styles.View_I0_627_0_4501}>
              <View style={styles.View_I0_627_0_4501_0_4495}>
                <Text style={styles.Text_I0_627_0_4501_0_4495}>(4568)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_628}>
          <View style={styles.View_I0_628_0_4497}>
            <View style={styles.View_I0_628_0_4498} />
            <View style={styles.View_I0_628_0_4499}>
              <View style={styles.View_I0_628_0_4499_0_3960}>
                <Text style={styles.Text_I0_628_0_4499_0_3960}>Footwear</Text>
              </View>
            </View>
            <View style={styles.View_I0_628_0_4500} />
            <View style={styles.View_I0_628_0_4501}>
              <View style={styles.View_I0_628_0_4501_0_4495}>
                <Text style={styles.Text_I0_628_0_4501_0_4495}>(4568)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_629}>
          <View style={styles.View_I0_629_0_4497}>
            <View style={styles.View_I0_629_0_4498} />
            <View style={styles.View_I0_629_0_4499}>
              <View style={styles.View_I0_629_0_4499_0_3960}>
                <Text style={styles.Text_I0_629_0_4499_0_3960}>
                  Face + Body
                </Text>
              </View>
            </View>
            <View style={styles.View_I0_629_0_4500} />
            <View style={styles.View_I0_629_0_4501}>
              <View style={styles.View_I0_629_0_4501_0_4495}>
                <Text style={styles.Text_I0_629_0_4501_0_4495}>(284)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_630}>
          <View style={styles.View_I0_630_0_4497}>
            <View style={styles.View_I0_630_0_4498} />
            <View style={styles.View_I0_630_0_4499}>
              <View style={styles.View_I0_630_0_4499_0_3960}>
                <Text style={styles.Text_I0_630_0_4499_0_3960}>Dresses</Text>
              </View>
            </View>
            <View style={styles.View_I0_630_0_4500} />
            <View style={styles.View_I0_630_0_4501}>
              <View style={styles.View_I0_630_0_4501_0_4495}>
                <Text style={styles.Text_I0_630_0_4501_0_4495}>(12425)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_631}>
          <View style={styles.View_I0_631_0_4497}>
            <View style={styles.View_I0_631_0_4498} />
            <View style={styles.View_I0_631_0_4499}>
              <View style={styles.View_I0_631_0_4499_0_3960}>
                <Text style={styles.Text_I0_631_0_4499_0_3960}>
                  Accessories
                </Text>
              </View>
            </View>
            <View style={styles.View_I0_631_0_4500} />
            <View style={styles.View_I0_631_0_4501}>
              <View style={styles.View_I0_631_0_4501_0_4495}>
                <Text style={styles.Text_I0_631_0_4501_0_4495}>(1343)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_632}>
          <View style={styles.View_0_633} />
          <View style={styles.View_3_3308}>
            <Text style={styles.Text_3_3308}>See all categories</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_635}>
        <View style={styles.View_0_636} />
        <View style={styles.View_0_637}>
          <View style={styles.View_0_638}>
            <View style={styles.View_0_639} />
            <View style={styles.View_0_640} />
            <View style={styles.View_0_641} />
            <View style={styles.View_0_642} />
            <View style={styles.View_0_643} />
            <View style={styles.View_0_644} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5a/d625/ebaf8541ac7d75040e43dbd14ce54bdc"
            }}
            style={styles.ImageBackground_0_645}
          />
        </View>
        <View style={styles.View_3_3305}>
          <Text style={styles.Text_3_3305}>$200 - $1400</Text>
        </View>
        <View style={styles.View_3_3303}>
          <Text style={styles.Text_3_3303}>Price range</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52db/d84a/6069b84f7f11ef90349cef25632eb527"
          }}
          style={styles.ImageBackground_0_652}
        />
      </View>
      <View style={styles.View_3_3292}>
        <View style={styles.View_3_3300}>
          <Text style={styles.Text_3_3300}>Clear</Text>
        </View>
        <View style={styles.View_3_3295}>
          <Text style={styles.Text_3_3295}>Filter</Text>
        </View>
        <View style={styles.View_3_3296}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
            }}
            style={styles.ImageBackground_3_3297}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_590: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("189.75409836065575%")
  },
  View_0_591: {
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
  View_I0_591_0_3847: {
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
  View_I0_591_0_3850: {
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
  View_I0_591_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("2.868852459016381%")
  },
  Text_I0_591_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_592: {
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
  View_0_593: {
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
  View_0_594: {
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
  View_0_596: {
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
  View_3_2066: {
    width: wp("17.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("2.322404371584696%")
  },
  Text_3_2066: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_599: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("162.02185792349727%")
  },
  View_0_600: {
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
  View_0_601: {
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
  View_0_602: {
    width: wp("78.14900716145833%"),
    minWidth: wp("78.14900716145833%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("9.699453551912569%")
  },
  View_0_603: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.91979166666665%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_603_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_603_0_3878: {
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
  View_I0_603_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_603_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_604: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.43984375000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_604_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_604_0_3878: {
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
  View_I0_604_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_604_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_605: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.959895833333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_605_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_605_0_3878: {
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
  View_I0_605_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_605_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_606: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.479947916666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_606_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_606_0_3878: {
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
  View_I0_606_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_606_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_607: {
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_607_0_3876: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_607_0_3878: {
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
  View_I0_607_0_3881: {
    flexGrow: 1,
    width: wp("12.229268391927084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_607_0_3881: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3402: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("2.5956284153005527%")
  },
  Text_3_3402: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_609: {
    width: wp("3.480164591471354%"),
    height: hp("0.1366120218579235%"),
    top: hp("4.508196721311492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%")
  },
  View_0_610: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("149.72677595628417%")
  },
  View_0_611: {
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
  ImageBackground_0_612: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("3.4153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%")
  },
  ImageBackground_0_613: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("2.868852459016381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%")
  },
  View_3_3399: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("2.5956284153005242%")
  },
  Text_3_3399: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_615: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%")
  },
  View_0_618: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("102.45901639344261%"),
    minHeight: hp("102.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("43.98907103825137%")
  },
  View_0_619: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("102.45901639344261%"),
    minHeight: hp("102.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_620: {
    width: wp("87.2%"),
    height: hp("102.45901639344261%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3313: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("2.5956284153005456%")
  },
  Text_3_3313: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3310: {
    width: wp("28.26666666666667%"),
    top: hp("2.6095697788592886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333334%")
  },
  Text_3_3310: {
    color: "rgba(150, 94, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_623: {
    width: wp("3.480164591471354%"),
    height: hp("0.13734452385720008%"),
    top: hp("4.508196721311471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%")
  },
  View_0_624: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("81.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_624_0_4497: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_624_0_4498: {
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_I0_624_0_4499: {
    width: wp("42.13333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_624_0_4499_0_3960: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_624_0_4499_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_624_0_4500: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("2.8688524590163667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_624_0_4501: {
    width: wp("13.333333333333334%"),
    height: hp("3.825136612021858%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_624_0_4501_0_4495: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  Text_I0_624_0_4501_0_4495: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_625: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("71.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_625_0_4497: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_625_0_4498: {
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_I0_625_0_4499: {
    width: wp("42.13333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_625_0_4499_0_3960: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_625_0_4499_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_625_0_4500: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_625_0_4501: {
    width: wp("13.333333333333334%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_625_0_4501_0_4495: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I0_625_0_4501_0_4495: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_626: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("60.92896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_626_0_4497: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_626_0_4498: {
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_I0_626_0_4499: {
    width: wp("42.13333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_626_0_4499_0_3960: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_626_0_4499_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_626_0_4500: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("2.868852459016381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_626_0_4501: {
    width: wp("13.333333333333334%"),
    height: hp("3.825136612021858%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_626_0_4501_0_4495: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  Text_I0_626_0_4501_0_4495: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_627: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("50.5464480874317%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_627_0_4497: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_627_0_4498: {
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_I0_627_0_4499: {
    width: wp("42.13333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_627_0_4499_0_3960: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_627_0_4499_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_627_0_4500: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_627_0_4501: {
    width: wp("13.333333333333334%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_627_0_4501_0_4495: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I0_627_0_4501_0_4495: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_628: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("40.16393442622952%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_628_0_4497: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_628_0_4498: {
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_I0_628_0_4499: {
    width: wp("42.13333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_628_0_4499_0_3960: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_628_0_4499_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_628_0_4500: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("2.868852459016381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_628_0_4501: {
    width: wp("13.333333333333334%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_628_0_4501_0_4495: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I0_628_0_4501_0_4495: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_629: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("29.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_629_0_4497: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_629_0_4498: {
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_I0_629_0_4499: {
    width: wp("42.13333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_629_0_4499_0_3960: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_629_0_4499_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_629_0_4500: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_629_0_4501: {
    width: wp("13.333333333333334%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_629_0_4501_0_4495: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I0_629_0_4501_0_4495: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_630: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("19.398907103825138%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_630_0_4497: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_630_0_4498: {
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_I0_630_0_4499: {
    width: wp("42.13333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_630_0_4499_0_3960: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_630_0_4499_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_630_0_4500: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_630_0_4501: {
    width: wp("13.333333333333334%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_630_0_4501_0_4495: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I0_630_0_4501_0_4495: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_631: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("9.016393442622956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_631_0_4497: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_631_0_4498: {
    width: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_I0_631_0_4499: {
    width: wp("42.13333333333333%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_631_0_4499_0_3960: {
    flexGrow: 1,
    width: wp("42.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_631_0_4499_0_3960: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_631_0_4500: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("2.868852459016388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_631_0_4501: {
    width: wp("13.333333333333334%"),
    height: hp("3.825136612021858%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_631_0_4501_0_4495: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_I0_631_0_4501_0_4495: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_632: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("92.07650273224043%")
  },
  View_0_633: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 55, 99, 1)",
    borderColor: "rgba(150, 94, 255, 1)",
    borderWidth: 1
  },
  View_3_3308: {
    width: wp("38.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.999999999999996%"),
    top: hp("2.1857923497267677%")
  },
  Text_3_3308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_635: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("13.661202185792352%")
  },
  View_0_636: {
    width: wp("87.2%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_637: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("13.387978142076502%")
  },
  View_0_638: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%"),
    top: hp("0%")
  },
  View_0_639: {
    width: wp("5.6000000000000005%"),
    height: hp("5.05464480874317%"),
    top: hp("2.459016393442621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(236, 225, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_640: {
    width: wp("5.6000000000000005%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    backgroundColor: "rgba(236, 225, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_641: {
    width: wp("5.6000000000000005%"),
    height: hp("3.825136612021858%"),
    top: hp("3.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.66666666666666%"),
    backgroundColor: "rgba(236, 225, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_642: {
    width: wp("5.6000000000000005%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26666666666667%"),
    backgroundColor: "rgba(236, 225, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_643: {
    width: wp("5.6000000000000005%"),
    height: hp("2.5956284153005464%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666664%"),
    backgroundColor: "rgba(236, 225, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_644: {
    width: wp("5.6000000000000005%"),
    height: hp("1.639344262295082%"),
    top: hp("5.874316939890704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466666666666658%"),
    backgroundColor: "rgba(236, 225, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_0_645: {
    width: wp("78.66666666666666%"),
    height: hp("3.278688524590164%"),
    top: hp("5.874316939890704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_3305: {
    width: wp("28.26666666666667%"),
    top: hp("2.595628415300542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333334%")
  },
  Text_3_3305: {
    color: "rgba(150, 94, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3303: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("2.595628415300542%")
  },
  Text_3_3303: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_652: {
    width: wp("3.480164591471354%"),
    height: hp("0.1366120218579235%"),
    top: hp("4.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%")
  },
  View_3_3292: {
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
  View_3_3300: {
    width: wp("11.733333333333333%"),
    top: hp("-0.5464480874316946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%")
  },
  Text_3_3300: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3295: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("-0.27322404371584685%")
  },
  Text_3_3295: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3296: {
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
  ImageBackground_3_3297: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 1510 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
