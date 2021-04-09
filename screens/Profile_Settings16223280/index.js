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
      <View style={styles.View_0_467}>
        <View style={styles.View_I0_467_0_3847}>
          <View style={styles.View_I0_467_0_3850} />
          <View style={styles.View_I0_467_0_3852}>
            <Text style={styles.Text_I0_467_0_3852}>SAVE</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_468}>
        <View style={styles.View_I0_468_0_3972}>
          <View style={styles.View_I0_468_0_3973}>
            <View style={styles.View_I0_468_0_3973_0_4368} />
          </View>
          <View style={styles.View_I0_468_0_3974}>
            <View style={styles.View_I0_468_0_3974_0_3883}>
              <Text style={styles.Text_I0_468_0_3974_0_3883}>
                Repeat password
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc78/b180/ce981f04c7a35ad6b548d72c934c76b4"
            }}
            style={styles.ImageBackground_I0_468_0_3975}
          />
        </View>
      </View>
      <View style={styles.View_0_469}>
        <View style={styles.View_I0_469_0_3972}>
          <View style={styles.View_I0_469_0_3973}>
            <View style={styles.View_I0_469_0_3973_0_4368} />
          </View>
          <View style={styles.View_I0_469_0_3974}>
            <View style={styles.View_I0_469_0_3974_0_3883}>
              <Text style={styles.Text_I0_469_0_3974_0_3883}>Password</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc78/b180/ce981f04c7a35ad6b548d72c934c76b4"
            }}
            style={styles.ImageBackground_I0_469_0_3975}
          />
        </View>
      </View>
      <View style={styles.View_0_470}>
        <View style={styles.View_I0_470_0_3963}>
          <View style={styles.View_I0_470_0_3963_0_4368} />
        </View>
        <View style={styles.View_I0_470_0_3964}>
          <View style={styles.View_I0_470_0_3964_0_3883}>
            <Text style={styles.Text_I0_470_0_3964_0_3883}>Email</Text>
          </View>
        </View>
        <View style={styles.View_I0_470_0_3967}>
          <Text style={styles.Text_I0_470_0_3967}>barbaris-1993@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_0_471}>
        <View style={styles.View_I0_471_0_3963}>
          <View style={styles.View_I0_471_0_3963_0_4368} />
        </View>
        <View style={styles.View_I0_471_0_3964}>
          <View style={styles.View_I0_471_0_3964_0_3883}>
            <Text style={styles.Text_I0_471_0_3964_0_3883}>Name</Text>
          </View>
        </View>
        <View style={styles.View_I0_471_0_3967}>
          <Text style={styles.Text_I0_471_0_3967}>Barbara Rose</Text>
        </View>
      </View>
      <View style={styles.View_0_472}>
        <View style={styles.View_I0_472_0_4585}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef03/17a3/51a2ec4f97edf5f216464d65db1134b2"
            }}
            style={styles.ImageBackground_I0_472_0_4586}
          />
          <View style={styles.View_I0_472_0_4587}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20d/d0cf/627cc03c5a243d05378d8328c6d353f7"
              }}
              style={styles.ImageBackground_I0_472_0_4588}
            />
            <View style={styles.View_I0_472_0_4589} />
          </View>
          <View style={styles.View_I0_472_0_4590}>
            <View style={styles.View_I0_472_0_4590_0_4419}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f40f/5319/135442ed4cf24df228262266b703a12d"
                }}
                style={styles.ImageBackground_I0_472_0_4590_0_4422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dec/4430/a85c8e75dafc55405f60f463a83871a3"
                }}
                style={styles.ImageBackground_I0_472_0_4590_0_4425}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_473}>
        <View style={styles.View_I0_473_0_4221}>
          <View style={styles.View_I0_473_0_4222}>
            <View style={styles.View_I0_473_0_4223}>
              <Text style={styles.Text_I0_473_0_4223}>Profile Settings</Text>
            </View>
          </View>
          <View style={styles.View_I0_473_0_4224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
              }}
              style={styles.ImageBackground_I0_473_0_4225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_474} />
      <View style={styles.View_0_475}>
        <View style={styles.View_0_476} />
        <View style={styles.View_0_477}>
          <View style={styles.View_I0_477_0_3847}>
            <View style={styles.View_I0_477_0_3850} />
            <View style={styles.View_I0_477_0_3852}>
              <Text style={styles.Text_I0_477_0_3852}>UPLOAD</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_478}>
          <View style={styles.View_0_479} />
          <View style={styles.View_0_480}>
            <View style={styles.View_I0_480_0_3923}>
              <Text style={styles.Text_I0_480_0_3923}>Gallery</Text>
            </View>
          </View>
          <View style={styles.View_0_481}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d386/cc44/f3d03c15c65615097593b3c40d7321b2"
              }}
              style={styles.ImageBackground_I0_481_0_4431}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82fa/ec44/2c48141696a27275e7c812d3a51c92fc"
              }}
              style={styles.ImageBackground_I0_481_0_4434}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c4e/6ad8/4232fab638c528455f56e233bcf289c5"
              }}
              style={styles.ImageBackground_I0_481_0_4435}
            />
          </View>
        </View>
        <View style={styles.View_0_482}>
          <View style={styles.View_0_483} />
          <View style={styles.View_3_3480}>
            <Text style={styles.Text_3_3480}>Take a Picture</Text>
          </View>
          <View style={styles.View_0_485}>
            <View style={styles.View_I0_485_0_4419}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9333/f999/3fe3d352e2e37e7d432058c054be025c"
                }}
                style={styles.ImageBackground_I0_485_0_4422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/4e3c/852be2f1c0eefd7521d604d2bd6e2988"
                }}
                style={styles.ImageBackground_I0_485_0_4425}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3_3482}>
          <Text style={styles.Text_3_3482}>Uploud Photo</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
          }}
          style={styles.ImageBackground_0_487}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_467: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("104.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_467_0_3847: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_467_0_3850: {
    width: wp("87.2%"),
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
  View_I0_467_0_3852: {
    width: wp("68.55029296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.576888020833332%"),
    top: hp("2.8688524590164093%")
  },
  Text_I0_467_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_468: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("85.92896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_468_0_3972: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_468_0_3973: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_468_0_3973_0_4368: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_468_0_3974: {
    width: wp("21.865861002604166%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_468_0_3974_0_3883: {
    flexGrow: 1,
    width: wp("21.865861002604166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_468_0_3974_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_468_0_3975: {
    width: wp("32.40362752278646%"),
    height: hp("0.546448087431694%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.39817708333333%")
  },
  View_0_469: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("70.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_469_0_3972: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_469_0_3973: {
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    top: hp("5.054644808743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_469_0_3973_0_4368: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_469_0_3974: {
    width: wp("21.865861002604166%"),
    height: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_469_0_3974_0_3883: {
    flexGrow: 1,
    width: wp("21.865861002604166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_469_0_3974_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_469_0_3975: {
    width: wp("32.40362752278646%"),
    height: hp("0.546448087431694%"),
    top: hp("8.743169398907128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.39817708333333%")
  },
  View_0_470: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("55.60109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_470_0_3963: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.05464480874317%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_470_0_3963_0_4368: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_470_0_3964: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_470_0_3964_0_3883: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_470_0_3964_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_470_0_3967: {
    flexGrow: 1,
    width: wp("69.02236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220572916666667%"),
    top: hp("6.830601092896174%")
  },
  Text_I0_470_0_3967: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_471: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.57377049180328%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_471_0_3963: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.05464480874317%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_471_0_3963_0_4368: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_471_0_3964: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_471_0_3964_0_3883: {
    flexGrow: 1,
    width: wp("14.48942667643229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_471_0_3964_0_3883: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_471_0_3967: {
    flexGrow: 1,
    width: wp("69.02236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.220572916666667%"),
    top: hp("6.830601092896174%")
  },
  Text_I0_471_0_3967: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_472: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("21.311475409836063%"),
    minHeight: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_472_0_4585: {
    flexGrow: 1,
    width: wp("40.41850179036459%"),
    height: hp("21.27513989724748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04388020833333783%"),
    top: hp("0%")
  },
  ImageBackground_I0_472_0_4586: {
    width: wp("37.86666666666667%"),
    height: hp("19.398907103825135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_472_0_4587: {
    width: wp("17.724808756510416%"),
    minWidth: wp("17.724808756510416%"),
    height: hp("9.08033235476968%"),
    minHeight: hp("9.08033235476968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.693684895833325%"),
    top: hp("12.194824218750004%")
  },
  ImageBackground_I0_472_0_4588: {
    width: wp("17.724808756510416%"),
    height: hp("9.08033235476968%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_472_0_4589: {
    width: wp("4.525483194986979%"),
    minWidth: wp("4.525483194986979%"),
    height: hp("2.3183827843171%"),
    minHeight: hp("2.3183827843171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.599674479166673%"),
    top: hp("3.5858654585040917%")
  },
  View_I0_472_0_4590: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("15.300546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.75611979166666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_472_0_4590_0_4419: {
    flexGrow: 1,
    width: wp("5.805555725097656%"),
    height: hp("2.473246725530572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.030533854166669983%"),
    top: hp("0.2660865992144821%")
  },
  ImageBackground_I0_472_0_4590_0_4422: {
    width: wp("5.805555725097656%"),
    height: hp("2.473246725530572%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_472_0_4590_0_4425: {
    width: wp("2.3833333333333333%"),
    height: hp("1.2209702059219443%"),
    top: hp("0.7513661202185773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7111328125000043%")
  },
  View_0_473: {
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
  View_I0_473_0_4221: {
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
  View_I0_473_0_4222: {
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
  View_I0_473_0_4223: {
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I0_473_0_4223: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_473_0_4224: {
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
  ImageBackground_I0_473_0_4225: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_474: {
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
  View_0_475: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50.95628415300546%"),
    minHeight: hp("50.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.97267759562842%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_476: {
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
  View_0_477: {
    width: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("35.928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_477_0_3847: {
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
  View_I0_477_0_3850: {
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
  View_I0_477_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_477_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_478: {
    width: wp("37.333333333333336%"),
    height: hp("13.934426229508196%"),
    top: hp("16.530054644808736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%")
  },
  View_0_479: {
    width: wp("37.333333333333336%"),
    height: hp("13.934426229508196%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_480: {
    width: wp("13.600000000000001%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.000000000000007%"),
    top: hp("7.65027322404373%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_480_0_3923: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%")
  },
  Text_I0_480_0_3923: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_481: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666661%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_481_0_4431: {
    flexGrow: 1,
    width: wp("6.333333333333334%"),
    height: hp("2.5614754098360657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03333333333333144%"),
    top: hp("0.4269125683060082%")
  },
  ImageBackground_I0_481_0_4434: {
    flexGrow: 1,
    width: wp("1.2666666666666666%"),
    height: hp("0.6489071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1000000000000085%"),
    top: hp("0.9733606557377072%")
  },
  ImageBackground_I0_481_0_4435: {
    flexGrow: 1,
    width: wp("4.733333333333333%"),
    height: hp("1.7418032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.63333333333334%"),
    top: hp("1.2465846994535497%")
  },
  View_0_482: {
    width: wp("37.333333333333336%"),
    height: hp("13.934426229508196%"),
    top: hp("16.530054644808736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%")
  },
  View_0_483: {
    width: wp("37.333333333333336%"),
    height: hp("13.934426229508196%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_3_3480: {
    width: wp("25.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666668%"),
    top: hp("8.333333333333343%")
  },
  Text_3_3480: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_485: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666669%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_4419: {
    flexGrow: 1,
    width: wp("6.333333333333334%"),
    height: hp("2.698087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.033333333333327886%"),
    top: hp("0.2903005464480799%")
  },
  ImageBackground_I0_485_0_4422: {
    width: wp("6.333333333333334%"),
    height: hp("2.698087431693989%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_485_0_4425: {
    width: wp("2.6%"),
    height: hp("1.331967213114754%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%")
  },
  View_3_3482: {
    width: wp("37.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.466666666666665%"),
    top: hp("8.333333333333321%")
  },
  Text_3_3482: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_487: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%")
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
