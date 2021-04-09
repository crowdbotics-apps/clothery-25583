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
      <View style={styles.View_0_162}>
        <View style={styles.View_0_163} />
        <View style={styles.View_0_164}>
          <View style={styles.View_I0_164_0_4037}>
            <View style={styles.View_I0_164_0_4038} />
            <View style={styles.View_I0_164_0_4039}>
              <View style={styles.View_I0_164_0_4041} />
              <View style={styles.View_I0_164_0_4040} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb90/b3c6/fc9e4c651c057d90f93e444ea4d43713"
                }}
                style={styles.ImageBackground_I0_164_0_4042}
              />
            </View>
            <View style={styles.View_I0_164_0_4043}>
              <View style={styles.View_I0_164_0_4043_0_4113}>
                <Text style={styles.Text_I0_164_0_4043_0_4113}>Gifts</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_165}>
          <View style={styles.View_I0_165_0_4037}>
            <View style={styles.View_I0_165_0_4038} />
            <View style={styles.View_I0_165_0_4039}>
              <View style={styles.View_I0_165_0_4041} />
              <View style={styles.View_I0_165_0_4040} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9806/b716/6a99c47592da9d859a7bf43118ff0482"
                }}
                style={styles.ImageBackground_I0_165_0_4042}
              />
            </View>
            <View style={styles.View_I0_165_0_4043}>
              <View style={styles.View_I0_165_0_4043_0_4113}>
                <Text style={styles.Text_I0_165_0_4043_0_4113}>Shoes</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_166}>
          <View style={styles.View_I0_166_0_4037}>
            <View style={styles.View_I0_166_0_4038} />
            <View style={styles.View_I0_166_0_4039}>
              <View style={styles.View_I0_166_0_4041} />
              <View style={styles.View_I0_166_0_4040} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ae7/edfb/d8402c1a437ec72b037031833ca0567e"
                }}
                style={styles.ImageBackground_I0_166_0_4042}
              />
            </View>
            <View style={styles.View_I0_166_0_4043}>
              <View style={styles.View_I0_166_0_4043_0_4113}>
                <Text style={styles.Text_I0_166_0_4043_0_4113}>Outlet</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_167}>
          <View style={styles.View_I0_167_0_4037}>
            <View style={styles.View_I0_167_0_4038} />
            <View style={styles.View_I0_167_0_4039}>
              <View style={styles.View_I0_167_0_4041} />
              <View style={styles.View_I0_167_0_4040} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7656/2d59/72f01a243b0ad87850188d2b6ab6ed3b"
                }}
                style={styles.ImageBackground_I0_167_0_4042}
              />
            </View>
            <View style={styles.View_I0_167_0_4043}>
              <View style={styles.View_I0_167_0_4043_0_4113}>
                <Text style={styles.Text_I0_167_0_4043_0_4113}>
                  Accessories
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_168}>
          <View style={styles.View_I0_168_0_4037}>
            <View style={styles.View_I0_168_0_4038} />
            <View style={styles.View_I0_168_0_4039}>
              <View style={styles.View_I0_168_0_4041} />
              <View style={styles.View_I0_168_0_4040} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/accc/cada/dec94e1dea8c79b0baad953a8886b6fb"
                }}
                style={styles.ImageBackground_I0_168_0_4042}
              />
            </View>
            <View style={styles.View_I0_168_0_4043}>
              <View style={styles.View_I0_168_0_4043_0_4113}>
                <Text style={styles.Text_I0_168_0_4043_0_4113}>Activewear</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_169}>
          <View style={styles.View_I0_169_0_4037}>
            <View style={styles.View_I0_169_0_4038} />
            <View style={styles.View_I0_169_0_4039}>
              <View style={styles.View_I0_169_0_4041} />
              <View style={styles.View_I0_169_0_4040} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9be6/4fb3/a18335667d63463b3665e2689d0fcf90"
                }}
                style={styles.ImageBackground_I0_169_0_4042}
              />
            </View>
            <View style={styles.View_I0_169_0_4043}>
              <View style={styles.View_I0_169_0_4043_0_4113}>
                <Text style={styles.Text_I0_169_0_4043_0_4113}>
                  Face + Body
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_170}>
          <View style={styles.View_I0_170_0_4037}>
            <View style={styles.View_I0_170_0_4038} />
            <View style={styles.View_I0_170_0_4039}>
              <View style={styles.View_I0_170_0_4041} />
              <View style={styles.View_I0_170_0_4040} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fde/c130/5a23a72cee5db5a84c015ae7fbcb5616"
                }}
                style={styles.ImageBackground_I0_170_0_4042}
              />
            </View>
            <View style={styles.View_I0_170_0_4043}>
              <View style={styles.View_I0_170_0_4043_0_4113}>
                <Text style={styles.Text_I0_170_0_4043_0_4113}>Clothing</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3_3289}>
          <Text style={styles.Text_3_3289}>New Products</Text>
        </View>
      </View>
      <View style={styles.View_0_172}>
        <View style={styles.View_0_173} />
        <View style={styles.View_0_174}>
          <View style={styles.View_I0_174_0_3847}>
            <View style={styles.View_I0_174_0_3850} />
            <View style={styles.View_I0_174_0_3852}>
              <Text style={styles.Text_I0_174_0_3852}>VIEW ALL</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_175}>
          <View style={styles.View_0_177} />
          <View style={styles.View_0_176} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13a2/840e/a70679c4d830dcfa38d18dc4277f148c"
            }}
            style={styles.ImageBackground_0_178}
          />
        </View>
        <View style={styles.View_0_181}>
          <View style={styles.View_0_182} />
          <View style={styles.View_3_3282} />
          <View style={styles.View_3_3287}>
            <Text style={styles.Text_3_3287}>in the last 24 hours</Text>
          </View>
          <View style={styles.View_3_3285}>
            <Text style={styles.Text_3_3285}>New Items</Text>
          </View>
          <View style={styles.View_3_3283}>
            <Text style={styles.Text_3_3283}>578</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_184}>
        <View style={styles.View_I0_184_0_4221}>
          <View style={styles.View_I0_184_0_4222}>
            <View style={styles.View_I0_184_0_4223}>
              <Text style={styles.Text_I0_184_0_4223}>New In</Text>
            </View>
          </View>
          <View style={styles.View_I0_184_0_4224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
              }}
              style={styles.ImageBackground_I0_184_0_4225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_162: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("87.56830601092896%"),
    minHeight: hp("87.56830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("53.68852459016394%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_163: {
    width: wp("87.2%"),
    height: hp("81.55737704918032%"),
    top: hp("6.01092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_164: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("64.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_164_0_4037: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_164_0_4038: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_164_0_4039: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.3661202185792405%")
  },
  View_I0_164_0_4041: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_164_0_4040: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_164_0_4042: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_164_0_4043: {
    width: wp("32.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_164_0_4043_0_4113: {
    flexGrow: 1,
    width: wp("30.863767496744792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I0_164_0_4043_0_4113: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_165: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("19.535519125683066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_165_0_4037: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_165_0_4038: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_165_0_4039: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.3661202185792263%")
  },
  View_I0_165_0_4041: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_165_0_4040: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_165_0_4042: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_165_0_4043: {
    width: wp("32.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_165_0_4043_0_4113: {
    flexGrow: 1,
    width: wp("30.863767496744792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I0_165_0_4043_0_4113: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_166: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("76.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_166_0_4037: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_166_0_4038: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_166_0_4039: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.3661202185792263%")
  },
  View_I0_166_0_4041: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_166_0_4040: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_166_0_4042: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_166_0_4043: {
    width: wp("32.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_166_0_4043_0_4113: {
    flexGrow: 1,
    width: wp("30.863767496744792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.4098360655737565%")
  },
  Text_I0_166_0_4043_0_4113: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_167: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("30.874316939890704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_167_0_4037: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_167_0_4038: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_167_0_4039: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.3661202185792405%")
  },
  View_I0_167_0_4041: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_167_0_4040: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_167_0_4042: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_167_0_4043: {
    width: wp("32.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_167_0_4043_0_4113: {
    flexGrow: 1,
    width: wp("30.863767496744792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I0_167_0_4043_0_4113: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_168: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("42.213114754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_168_0_4037: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_168_0_4038: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_168_0_4039: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.3661202185792405%")
  },
  View_I0_168_0_4041: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_168_0_4040: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_168_0_4042: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_168_0_4043: {
    width: wp("32.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_168_0_4043_0_4113: {
    flexGrow: 1,
    width: wp("30.863767496744792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I0_168_0_4043_0_4113: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_169: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("53.551912568305994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_169_0_4037: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_169_0_4038: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_169_0_4039: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.3661202185792547%")
  },
  View_I0_169_0_4041: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_169_0_4040: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_169_0_4042: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_169_0_4043: {
    width: wp("32.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("3.0054644808743376%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_169_0_4043_0_4113: {
    flexGrow: 1,
    width: wp("30.863767496744792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I0_169_0_4043_0_4113: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_170: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("8.196721311475407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_170_0_4037: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_170_0_4038: {
    width: wp("78.66666666666666%"),
    height: hp("9.153005464480875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_170_0_4039: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.3661202185792334%")
  },
  View_I0_170_0_4041: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_170_0_4040: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_170_0_4042: {
    width: wp("12.533333333333333%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_170_0_4043: {
    width: wp("32.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_170_0_4043_0_4113: {
    flexGrow: 1,
    width: wp("30.863767496744792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.4098360655737707%")
  },
  Text_I0_170_0_4043_0_4113: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3289: {
    width: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("-0.1366120218579212%")
  },
  Text_3_3289: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_172: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("33.33333333333333%"),
    minHeight: hp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("14.89071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_173: {
    width: wp("87.2%"),
    height: hp("33.33333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_174: {
    width: wp("76.26666666666667%"),
    height: hp("8.469945355191257%"),
    top: hp("22.677595628415297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_174_0_3847: {
    flexGrow: 1,
    width: wp("76.26666666666667%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_174_0_3850: {
    width: wp("76.26666666666667%"),
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
  View_I0_174_0_3852: {
    width: wp("59.95529785156249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.376171874999997%"),
    top: hp("2.868852459016402%")
  },
  Text_I0_174_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_175: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.73333333333334%"),
    top: hp("2.185792349726775%")
  },
  View_0_177: {
    width: wp("18.933333333333334%"),
    height: hp("16.120218579234972%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_176: {
    width: wp("18.933333333333334%"),
    height: hp("16.120218579234972%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_178: {
    width: wp("18.933333333333334%"),
    height: hp("16.120218579234972%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_181: {
    width: wp("41.333333333333336%"),
    height: hp("16.666666666666664%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_0_182: {
    width: wp("22.400000000000002%"),
    height: hp("5.8743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3282: {
    width: wp("9.866666666666667%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("0.27322404371584597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_3287: {
    width: wp("41.333333333333336%"),
    top: hp("12.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_3_3287: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3285: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765028%")
  },
  Text_3_3285: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3283: {
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("1.5027322404371581%")
  },
  Text_3_3283: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_184: {
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
  View_I0_184_0_4221: {
    flexGrow: 1,
    width: wp("72.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("-0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_184_0_4222: {
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
  View_I0_184_0_4223: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_184_0_4223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_184_0_4224: {
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
  ImageBackground_I0_184_0_4225: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 1057 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
