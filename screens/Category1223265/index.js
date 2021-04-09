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
      <View style={styles.View_0_137}>
        <View style={styles.View_0_138}>
          <View style={styles.View_I0_138_0_4026}>
            <View style={styles.View_I0_138_0_4027}>
              <View style={styles.View_I0_138_0_4029} />
              <View style={styles.View_I0_138_0_4031}>
                <View style={styles.View_I0_138_0_4028} />
              </View>
              <View style={styles.View_I0_138_0_4032} />
              <View style={styles.View_I0_138_0_4030} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eda/0f5f/657eeb3161a94ee154e0e901dc291368"
                }}
                style={styles.ImageBackground_I0_138_0_4033}
              />
            </View>
            <View style={styles.View_I0_138_0_4034}>
              <View style={styles.View_I0_138_0_4035}>
                <Text style={styles.Text_I0_138_0_4035}>Outlet</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_139}>
          <View style={styles.View_I0_139_0_4026}>
            <View style={styles.View_I0_139_0_4027}>
              <View style={styles.View_I0_139_0_4029} />
              <View style={styles.View_I0_139_0_4031}>
                <View style={styles.View_I0_139_0_4028} />
              </View>
              <View style={styles.View_I0_139_0_4032} />
              <View style={styles.View_I0_139_0_4030} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3477/b9a9/75847bace432ffab9e59be6cc93cbf54"
                }}
                style={styles.ImageBackground_I0_139_0_4033}
              />
            </View>
            <View style={styles.View_I0_139_0_4034}>
              <View style={styles.View_I0_139_0_4035}>
                <Text style={styles.Text_I0_139_0_4035}>Gifts</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_140}>
          <View style={styles.View_I0_140_0_4026}>
            <View style={styles.View_I0_140_0_4027}>
              <View style={styles.View_I0_140_0_4029} />
              <View style={styles.View_I0_140_0_4031}>
                <View style={styles.View_I0_140_0_4028} />
              </View>
              <View style={styles.View_I0_140_0_4032} />
              <View style={styles.View_I0_140_0_4030} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52dd/1b73/336408348c7e54e9e71dc9c726b1c565"
                }}
                style={styles.ImageBackground_I0_140_0_4033}
              />
            </View>
            <View style={styles.View_I0_140_0_4034}>
              <View style={styles.View_I0_140_0_4035}>
                <Text style={styles.Text_I0_140_0_4035}>Face + Body</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_141}>
          <View style={styles.View_I0_141_0_4026}>
            <View style={styles.View_I0_141_0_4027}>
              <View style={styles.View_I0_141_0_4029} />
              <View style={styles.View_I0_141_0_4031}>
                <View style={styles.View_I0_141_0_4028} />
              </View>
              <View style={styles.View_I0_141_0_4032} />
              <View style={styles.View_I0_141_0_4030} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2915/971a/66e1bab827a80da1a340ca4d94234481"
                }}
                style={styles.ImageBackground_I0_141_0_4033}
              />
            </View>
            <View style={styles.View_I0_141_0_4034}>
              <View style={styles.View_I0_141_0_4035}>
                <Text style={styles.Text_I0_141_0_4035}>Activewear</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_142}>
          <View style={styles.View_I0_142_0_4026}>
            <View style={styles.View_I0_142_0_4027}>
              <View style={styles.View_I0_142_0_4029} />
              <View style={styles.View_I0_142_0_4031}>
                <View style={styles.View_I0_142_0_4028} />
              </View>
              <View style={styles.View_I0_142_0_4032} />
              <View style={styles.View_I0_142_0_4030} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6667/d28a/34516775909a44297a9cebd2c2de0086"
                }}
                style={styles.ImageBackground_I0_142_0_4033}
              />
            </View>
            <View style={styles.View_I0_142_0_4034}>
              <View style={styles.View_I0_142_0_4035}>
                <Text style={styles.Text_I0_142_0_4035}>Accessories</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_143}>
          <View style={styles.View_I0_143_0_4026}>
            <View style={styles.View_I0_143_0_4027}>
              <View style={styles.View_I0_143_0_4029} />
              <View style={styles.View_I0_143_0_4031}>
                <View style={styles.View_I0_143_0_4028} />
              </View>
              <View style={styles.View_I0_143_0_4032} />
              <View style={styles.View_I0_143_0_4030} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6be/f652/afff2938a0671770086747df166a4864"
                }}
                style={styles.ImageBackground_I0_143_0_4033}
              />
            </View>
            <View style={styles.View_I0_143_0_4034}>
              <View style={styles.View_I0_143_0_4035}>
                <Text style={styles.Text_I0_143_0_4035}>Shoes</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_144}>
          <View style={styles.View_I0_144_0_4026}>
            <View style={styles.View_I0_144_0_4027}>
              <View style={styles.View_I0_144_0_4029} />
              <View style={styles.View_I0_144_0_4031}>
                <View style={styles.View_I0_144_0_4028} />
              </View>
              <View style={styles.View_I0_144_0_4032} />
              <View style={styles.View_I0_144_0_4030} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/801b/06c0/0cc2058e3d5de0e14dbc6c41957ed88f"
                }}
                style={styles.ImageBackground_I0_144_0_4033}
              />
            </View>
            <View style={styles.View_I0_144_0_4034}>
              <View style={styles.View_I0_144_0_4035}>
                <Text style={styles.Text_I0_144_0_4035}>Clothing</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_145}>
          <View style={styles.View_0_146}>
            <View style={styles.View_0_147}>
              <View style={styles.View_0_149} />
              <View style={styles.View_0_148} />
              <View style={styles.View_0_150}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e09/b568/4c8931926e2d439cc476ddccd4892d57"
                  }}
                  style={styles.ImageBackground_I0_150_0_4122}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e09/b568/4c8931926e2d439cc476ddccd4892d57"
                  }}
                  style={styles.ImageBackground_I0_150_0_4121}
                />
              </View>
            </View>
            <View style={styles.View_3_1949}>
              <Text style={styles.Text_3_1949}>New In</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_152}>
        <View style={styles.View_0_153} />
        <View style={styles.View_3_169}>
          <Text style={styles.Text_3_169}>Home</Text>
        </View>
        <View style={styles.View_3_166}>
          <Text style={styles.Text_3_166}>Categories</Text>
        </View>
        <View style={styles.View_3_172}>
          <Text style={styles.Text_3_172}>New In</Text>
        </View>
        <View style={styles.View_0_157} />
      </View>
      <View style={styles.View_0_158}>
        <View style={styles.View_0_159}>
          <View style={styles.View_I0_159_0_4001}>
            <View style={styles.View_I0_159_0_4002}>
              <View style={styles.View_I0_159_0_4003}>
                <View style={styles.View_I0_159_0_4003_0_3841}>
                  <View style={styles.View_I0_159_0_4003_0_3841_0_4565}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                      }}
                      style={styles.ImageBackground_I0_159_0_4003_0_3841_0_4569}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                      }}
                      style={styles.ImageBackground_I0_159_0_4003_0_3841_0_4570}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                      }}
                      style={styles.ImageBackground_I0_159_0_4003_0_3841_0_4571}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I0_159_0_4004}>
              <View style={styles.View_I0_159_0_4004_0_3985}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e25/ef3d/0eb8e8eeaec052344eb92bf65ca94bfb"
                  }}
                  style={styles.ImageBackground_I0_159_0_4004_0_3989}
                />
              </View>
            </View>
            <View style={styles.View_I0_159_0_4006}>
              <Text style={styles.Text_I0_159_0_4006}>women</Text>
            </View>
            <View style={styles.View_I0_159_0_4007}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba5/8b02/6d13322cc5c1fe6887c0bb98e37d0078"
                }}
                style={styles.ImageBackground_I0_159_0_4007_0_3997}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a4/46a1/39cb71d6d7cee15787de55b18e12df8a"
                }}
                style={styles.ImageBackground_I0_159_0_4007_0_3998}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/714b/aae8/2eda9863012ce8ab33a1316bedcdacfb"
          }}
          style={styles.ImageBackground_0_160}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_137: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("107.10382513661203%"),
    minHeight: hp("107.10382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("25.683060109289617%")
  },
  View_0_138: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95.62841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_138_0_4026: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_138_0_4027: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_138_0_4029: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_138_0_4031: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.363963351223639%"),
    minHeight: hp("11.363963351223639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_138_0_4028: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_138_0_4032: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  View_I0_138_0_4030: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  ImageBackground_I0_138_0_4033: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%")
  },
  View_I0_138_0_4034: {
    width: wp("74.93333333333332%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_138_0_4035: {
    width: wp("74.93333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  Text_I0_138_0_4035: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_139: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.96721311475412%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_139_0_4026: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_139_0_4027: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_139_0_4029: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_139_0_4031: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.363963351223639%"),
    minHeight: hp("11.363963351223639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_139_0_4028: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_139_0_4032: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  View_I0_139_0_4030: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  ImageBackground_I0_139_0_4033: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%")
  },
  View_I0_139_0_4034: {
    width: wp("74.93333333333332%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.098360655737693%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_139_0_4035: {
    width: wp("74.93333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092894995%")
  },
  Text_I0_139_0_4035: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_140: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.30601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_140_0_4026: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_140_0_4027: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_140_0_4029: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_140_0_4031: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.363963351223639%"),
    minHeight: hp("11.363963351223639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_140_0_4028: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_140_0_4032: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  View_I0_140_0_4030: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  ImageBackground_I0_140_0_4033: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%")
  },
  View_I0_140_0_4034: {
    width: wp("74.93333333333332%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_140_0_4035: {
    width: wp("74.93333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  Text_I0_140_0_4035: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_141: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.644808743169406%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_141_0_4026: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_141_0_4027: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_141_0_4029: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_141_0_4031: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.363963351223639%"),
    minHeight: hp("11.363963351223639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_141_0_4028: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_141_0_4032: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  View_I0_141_0_4030: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  ImageBackground_I0_141_0_4033: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%")
  },
  View_I0_141_0_4034: {
    width: wp("74.93333333333332%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_141_0_4035: {
    width: wp("74.93333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092894995%")
  },
  Text_I0_141_0_4035: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_142: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.983606557377044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_142_0_4026: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_142_0_4027: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_142_0_4029: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_142_0_4031: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.363963351223639%"),
    minHeight: hp("11.363963351223639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_142_0_4028: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_142_0_4032: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  View_I0_142_0_4030: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  ImageBackground_I0_142_0_4033: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%")
  },
  View_I0_142_0_4034: {
    width: wp("74.93333333333332%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.0983606557377215%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_142_0_4035: {
    width: wp("74.93333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  Text_I0_142_0_4035: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_143: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.322404371584707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_143_0_4026: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_143_0_4027: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_143_0_4029: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_143_0_4031: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.363963351223639%"),
    minHeight: hp("11.363963351223639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_143_0_4028: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_143_0_4032: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  View_I0_143_0_4030: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  ImageBackground_I0_143_0_4033: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%")
  },
  View_I0_143_0_4034: {
    width: wp("74.93333333333332%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.098360655737693%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_143_0_4035: {
    width: wp("74.93333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  Text_I0_143_0_4035: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_144: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_144_0_4026: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_144_0_4027: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_144_0_4029: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_144_0_4031: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.363963351223639%"),
    minHeight: hp("11.363963351223639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_144_0_4028: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_144_0_4032: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  View_I0_144_0_4030: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 0
  },
  ImageBackground_I0_144_0_4033: {
    width: wp("26.666666666666668%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333334%")
  },
  View_I0_144_0_4034: {
    width: wp("74.93333333333332%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.0983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_144_0_4035: {
    width: wp("74.93333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  Text_I0_144_0_4035: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_145: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_146: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_147: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.363963351223639%"),
    minHeight: hp("11.363963351223639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_149: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_148: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(150, 94, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_150: {
    width: wp("87.2%"),
    height: hp("11.363963351223639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_150_0_4122: {
    flexGrow: 1,
    width: wp("4.666666666666667%"),
    height: hp("3.1621857419040036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8666666666666742%"),
    top: hp("0.03415300546448563%")
  },
  ImageBackground_I0_150_0_4121: {
    flexGrow: 1,
    width: wp("4.666666666666667%"),
    height: hp("3.1621857419040036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8666666666666742%"),
    top: hp("0.03415300546448563%")
  },
  View_3_1949: {
    width: wp("23.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("4.166666666666671%")
  },
  Text_3_1949: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_152: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_153: {
    width: wp("100%"),
    height: hp("21.174863387978142%"),
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
  View_3_169: {
    width: wp("13.516340128580728%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("14.207650273224044%")
  },
  Text_3_169: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_166: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("14.617486338797814%")
  },
  Text_3_166: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_172: {
    width: wp("17.542484537760416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    top: hp("14.207650273224044%")
  },
  Text_3_172: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_157: {
    width: wp("23.733333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    backgroundColor: "rgba(13, 54, 98, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_158: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("6.420765027322404%")
  },
  View_0_159: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_159_0_4001: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7999999999999998%"),
    top: hp("0.6830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_159_0_4002: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%"),
    top: hp("0.13661202185792298%")
  },
  View_I0_159_0_4003: {
    width: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_159_0_4003_0_3841: {
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
  View_I0_159_0_4003_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9600260416666657%"),
    top: hp("0.4439890710382519%")
  },
  ImageBackground_I0_159_0_4003_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_159_0_4003_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.47814207650273133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_159_0_4003_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.13333333333334%")
  },
  View_I0_159_0_4004: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_159_0_4004_0_3985: {
    flexGrow: 1,
    width: wp("4.6%"),
    height: hp("1.1782788188079667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7666666666666657%"),
    top: hp("1.1128409964139339%")
  },
  ImageBackground_I0_159_0_4004_0_3989: {
    width: wp("4.6%"),
    height: hp("1.1782788188079667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_159_0_4006: {
    width: wp("30.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I0_159_0_4006: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_159_0_4007: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_159_0_4007_0_3997: {
    flexGrow: 1,
    width: wp("4.472222391764323%"),
    height: hp("2.29109753676451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5749999999999886%"),
    top: hp("0.29456967213114815%")
  },
  ImageBackground_I0_159_0_4007_0_3998: {
    flexGrow: 1,
    width: wp("1.4949996948242188%"),
    height: hp("0.7658812517676848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.063281249999989%"),
    top: hp("2.081599001024591%")
  },
  ImageBackground_0_160: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%")
  },
  View_2: { height: 993 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
