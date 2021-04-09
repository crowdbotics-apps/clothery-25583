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
      <View style={styles.View_0_1327}>
        <View style={styles.View_I0_1327_0_3847}>
          <View style={styles.View_I0_1327_0_3850} />
          <View style={styles.View_I0_1327_0_3852}>
            <Text style={styles.Text_I0_1327_0_3852}>MY ORDERS</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_3180}>
        <Text style={styles.Text_3_3180}>
          Your order has been placed successfully! For more details, go to my
          orders.
        </Text>
      </View>
      <View style={styles.View_3_3178}>
        <Text style={styles.Text_3_3178}>Order Sucess</Text>
      </View>
      <View style={styles.View_0_1330}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/380e/b5dc/61eccd7f01d8acc8d8e9471df4ee27f1"
          }}
          style={styles.ImageBackground_0_1331}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad1/5891/c69f0c5b9663c7420aa3908078af4037"
          }}
          style={styles.ImageBackground_0_1332}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e88/2104/5d5401d8b786c4339b93f9f33d087aad"
          }}
          style={styles.ImageBackground_0_1333}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa3/6e27/f4b75e990f1cba659329a264453a7a5d"
          }}
          style={styles.ImageBackground_0_1334}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2f3/af2d/6f1f63bb037b2231256853504817744a"
          }}
          style={styles.ImageBackground_0_1335}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c36c/8e38/278fe4e70a10953efdd4354b92c9a968"
          }}
          style={styles.ImageBackground_0_1336}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e222/deb8/39dbad20b13bab0e3fa4f750ea3fa0bc"
          }}
          style={styles.ImageBackground_0_1337}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b88/87c1/ad243165d929aa9a1910bec2d978ea31"
          }}
          style={styles.ImageBackground_0_1338}
        />
        <View style={styles.View_0_1339}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7add/83a8/fb1f7f4f91206f422297a2b2745ab1eb"
            }}
            style={styles.ImageBackground_0_1342}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a40/f252/70f9a809e57834b86e6018225dd53ec8"
            }}
            style={styles.ImageBackground_0_1345}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5ca/31b1/59c26418febc2e110140d52c4b17a7f1"
          }}
          style={styles.ImageBackground_0_1348}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399c/147b/6362ed727243812c795bfb154c1eb74f"
          }}
          style={styles.ImageBackground_0_1350}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39b0/c3ac/825e7c8bb5576748115c14fbb89bca64"
          }}
          style={styles.ImageBackground_0_1353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec5/3d8f/762697be6d39643fe997040a41e4d4e8"
          }}
          style={styles.ImageBackground_0_1356}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3085/b7f8/df959286f564817bad0c62b623575862"
          }}
          style={styles.ImageBackground_0_1357}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0256/5633/757353f4f894ec8cbda1e44cce6b8087"
          }}
          style={styles.ImageBackground_0_1360}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/143e/990a/cb4d107011a53118d78f82874136d2e5"
          }}
          style={styles.ImageBackground_0_1361}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45d4/d3f5/88f4ab7defc248fd301a3269036b04e3"
          }}
          style={styles.ImageBackground_0_1364}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a0/98db/5f00e68b5ab1a8a045e5c584e16abd0a"
          }}
          style={styles.ImageBackground_0_1365}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce35/cacf/de563c0f40f07d79b9379d8b0a8ccc1d"
          }}
          style={styles.ImageBackground_0_1366}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1367}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1368}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1369}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1370}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1371}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1372}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1373}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1374}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1375}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c13c/7eb0/b7ca2b2a580ec65d4f7a80484120ca88"
          }}
          style={styles.ImageBackground_0_1376}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e638/20a7/4aed01f5dc0458c017973927bd94e5ff"
          }}
          style={styles.ImageBackground_0_1377}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2693/00bd/d38d765b721b3783f2dbb0016473df72"
          }}
          style={styles.ImageBackground_0_1378}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae7f/a005/be360868787aa26b51dff0e75f2b367a"
          }}
          style={styles.ImageBackground_0_1381}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b08a/7fa8/9e3890f4c2da7c91955590ae4c46ccd6"
          }}
          style={styles.ImageBackground_0_1384}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2929/95fa/cf511721757bf7db0fb4a5d4e2fe47f3"
          }}
          style={styles.ImageBackground_0_1385}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50b9/373e/ef4a61f807419a06baaefbd5106bedae"
          }}
          style={styles.ImageBackground_0_1386}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/859d/03d9/dc0d387a303bbb6fdd740664da5ed8c4"
          }}
          style={styles.ImageBackground_0_1387}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38cd/1556/0803d9d2df6ff9055b48366ac64456fb"
          }}
          style={styles.ImageBackground_0_1388}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65d/067d/7958cb5c37307be88d87f5755196d0df"
          }}
          style={styles.ImageBackground_0_1391}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f32/f8bc/29976adec27b241bb884ae03c7f67da0"
          }}
          style={styles.ImageBackground_0_1400}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b1a/3478/e4b1500338d7bf300e0b669dbb689f42"
          }}
          style={styles.ImageBackground_0_1403}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/826c/fe82/425f5bd0875df3066588fed3f56a24cd"
          }}
          style={styles.ImageBackground_0_1406}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15e8/209f/9160bf1e2aaf8863858ce349926b05bd"
          }}
          style={styles.ImageBackground_0_1409}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c13c/1481/bb9882a5bcb093aaa07e6ff4a3342665"
          }}
          style={styles.ImageBackground_0_1412}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ff/8ebe/31d6a7c288c23bbfd738d9c095ded432"
          }}
          style={styles.ImageBackground_0_1424}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d93/73db/fb7aeca73af8c4f7e06ff5f00f3fb604"
          }}
          style={styles.ImageBackground_0_1425}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6a8/4b7a/d40071155d2c286ece04bdeaf3a773ae"
          }}
          style={styles.ImageBackground_0_1426}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c588/024f/8830a9977c4e86e1fdb6156d36d39d08"
          }}
          style={styles.ImageBackground_0_1429}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ee4/ebee/3c040f179f3e572e91b59e1d5cb4f485"
          }}
          style={styles.ImageBackground_0_1432}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26a3/fb41/2fcb642bbe8e64450b955d33bfe7e12e"
          }}
          style={styles.ImageBackground_0_1433}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d256/8674/b2d972429ccec99a2b80ef4955ed8670"
          }}
          style={styles.ImageBackground_0_1436}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78b5/4f3a/96712e061a4319ba1e7dcb0d7e54f203"
          }}
          style={styles.ImageBackground_0_1439}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e9/8300/3fc996d47e74a12efe1114227b60cd33"
          }}
          style={styles.ImageBackground_0_1444}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f941/5140/4d725217de3314612a343210c7b0f642"
          }}
          style={styles.ImageBackground_0_1447}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e689/6432/a5bd5b89b64a0bc63ac5c5b207654461"
          }}
          style={styles.ImageBackground_0_1448}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb2/2702/fb664b304234b50fc569306f741dcc7c"
        }}
        style={styles.ImageBackground_0_1449}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1327: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1327_0_3847: {
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
  View_I0_1327_0_3850: {
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
  View_I0_1327_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_1327_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3180: {
    width: wp("89.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("74.4535519125683%")
  },
  Text_3_3180: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_3178: {
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("69.12568306010928%")
  },
  Text_3_3178: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1330: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("41.399383544921875%"),
    minHeight: hp("41.399383544921875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("17.21311475409836%")
  },
  ImageBackground_0_1331: {
    width: wp("7.922705078125%"),
    minWidth: wp("7.922705078125%"),
    height: hp("8.523402187993618%"),
    minHeight: hp("8.523402187993618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.65208333333333%"),
    top: hp("17.723275273224044%")
  },
  ImageBackground_0_1332: {
    width: wp("7.922705078125%"),
    minWidth: wp("7.922705078125%"),
    height: hp("8.523402187993618%"),
    minHeight: hp("8.523402187993618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.29296875%"),
    top: hp("17.723275273224044%")
  },
  ImageBackground_0_1333: {
    width: wp("6.074074300130208%"),
    minWidth: wp("6.074074300130208%"),
    height: hp("5.546976308353611%"),
    minHeight: hp("5.546976308353611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.59583333333334%"),
    top: hp("17.317374807889347%")
  },
  ImageBackground_0_1334: {
    width: wp("28.521738688151043%"),
    minWidth: wp("28.521738688151043%"),
    height: hp("12.85274901676699%"),
    minHeight: hp("12.85274901676699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.563541666666666%"),
    top: hp("9.741010822233608%")
  },
  ImageBackground_0_1335: {
    width: wp("2.6409016927083333%"),
    minWidth: wp("2.6409016927083333%"),
    height: hp("1.3529209491333676%"),
    minHeight: hp("1.3529209491333676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.04661458333334%"),
    top: hp("17.723275273224044%")
  },
  ImageBackground_0_1336: {
    width: wp("6.074074300130208%"),
    minWidth: wp("6.074074300130208%"),
    height: hp("3.1117183914601476%"),
    minHeight: hp("3.1117183914601476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.34947916666667%"),
    top: hp("18.80563204405738%")
  },
  ImageBackground_0_1337: {
    width: wp("10.82769775390625%"),
    minWidth: wp("10.82769775390625%"),
    height: hp("10.958660104887082%"),
    minHeight: hp("10.958660104887082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.20130208333333%"),
    top: hp("30.305455942622952%")
  },
  ImageBackground_0_1338: {
    width: wp("22.447664388020833%"),
    minWidth: wp("22.447664388020833%"),
    height: hp("10.958660104887082%"),
    minHeight: hp("10.958660104887082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.091666666666669%"),
    top: hp("30.305455942622952%")
  },
  View_0_1339: {
    width: wp("16.109501139322916%"),
    minWidth: wp("16.109501139322916%"),
    height: hp("10.958660104887082%"),
    minHeight: hp("10.958660104887082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.958072916666666%"),
    top: hp("30.305455942622952%")
  },
  ImageBackground_0_1342: {
    width: wp("11.124342854817709%"),
    minWidth: wp("11.124342854817709%"),
    height: hp("10.896395073562372%"),
    minHeight: hp("10.896395073562372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07864583333333286%"),
    top: hp("0.0010005763319682615%")
  },
  ImageBackground_0_1345: {
    width: wp("4.595113118489583%"),
    minWidth: wp("4.595113118489583%"),
    height: hp("10.865262557900017%"),
    minHeight: hp("10.865262557900017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.489583333333329%"),
    top: hp("0.032151852800545555%")
  },
  ImageBackground_0_1348: {
    width: wp("35.916263834635416%"),
    minWidth: wp("35.916263834635416%"),
    height: hp("5.41168379653347%"),
    minHeight: hp("5.41168379653347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.03541666666667%"),
    top: hp("18.12910903346995%")
  },
  ImageBackground_0_1350: {
    width: wp("17.958131917317708%"),
    minWidth: wp("17.958131917317708%"),
    height: hp("14.611546459093772%"),
    minHeight: hp("14.611546459093772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.334895833333334%"),
    top: hp("16.099740116974044%")
  },
  ImageBackground_0_1353: {
    width: wp("12.67632853190104%"),
    minWidth: wp("12.67632853190104%"),
    height: hp("7.17048123886025%"),
    minHeight: hp("7.17048123886025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.50390625%"),
    top: hp("16.099740116974044%")
  },
  ImageBackground_0_1356: {
    width: wp("5.017713419596355%"),
    minWidth: wp("5.017713419596355%"),
    height: hp("5.1410998151601985%"),
    minHeight: hp("5.1410998151601985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.785937500000003%"),
    top: hp("12.852736509562842%")
  },
  ImageBackground_0_1357: {
    width: wp("1.3204508463541667%"),
    minWidth: wp("1.3204508463541667%"),
    height: hp("2.8411341495201237%"),
    minHeight: hp("2.8411341495201237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.483072916666664%"),
    top: hp("13.123359054815573%")
  },
  ImageBackground_0_1360: {
    width: wp("1.3204508463541667%"),
    minWidth: wp("1.3204508463541667%"),
    height: hp("21.376152247027623%"),
    minHeight: hp("21.376152247027623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.97265625%"),
    top: hp("19.75264418971995%")
  },
  ImageBackground_0_1361: {
    width: wp("7.130434672037761%"),
    minWidth: wp("7.130434672037761%"),
    height: hp("5.41168379653347%"),
    minHeight: hp("5.41168379653347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.162760416666664%"),
    top: hp("10.011633367486343%")
  },
  ImageBackground_0_1364: {
    width: wp("15.317230224609373%"),
    minWidth: wp("15.317230224609373%"),
    height: hp("18.399725325120603%"),
    minHeight: hp("18.399725325120603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.863020833333337%"),
    top: hp("12.852736509562842%")
  },
  ImageBackground_0_1365: {
    width: wp("8.714975992838541%"),
    minWidth: wp("8.714975992838541%"),
    height: hp("3.652886614773443%"),
    minHeight: hp("3.652886614773443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.578125%"),
    top: hp("9.876355447404372%")
  },
  ImageBackground_0_1366: {
    width: wp("0.5281803448994955%"),
    minWidth: wp("0.5281803448994955%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.50078125%"),
    top: hp("12.852736509562842%")
  },
  ImageBackground_0_1367: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.388020833333336%"),
    top: hp("13.123359054815573%")
  },
  ImageBackground_0_1368: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.33177083333333%"),
    top: hp("13.393914894979513%")
  },
  ImageBackground_0_1369: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.91614583333333%"),
    top: hp("13.393914894979513%")
  },
  ImageBackground_0_1370: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.85989583333333%"),
    top: hp("13.664470735143446%")
  },
  ImageBackground_0_1371: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.85989583333333%"),
    top: hp("13.393914894979513%")
  },
  ImageBackground_0_1372: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.50078125%"),
    top: hp("13.79981536031421%")
  },
  ImageBackground_0_1373: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.97265625%"),
    top: hp("13.79981536031421%")
  },
  ImageBackground_0_1374: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.97265625%"),
    top: hp("13.664470735143446%")
  },
  ImageBackground_0_1375: {
    width: wp("0.26409017244974775%"),
    minWidth: wp("0.26409017244974775%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.236718749999994%"),
    top: hp("13.393914894979513%")
  },
  ImageBackground_0_1376: {
    width: wp("1.8486312866210937%"),
    minWidth: wp("1.8486312866210937%"),
    height: hp("1.0823367723350317%"),
    minHeight: hp("1.0823367723350317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.370312499999997%"),
    top: hp("12.446902749316937%")
  },
  ImageBackground_0_1377: {
    width: wp("1.3204508463541667%"),
    minWidth: wp("1.3204508463541667%"),
    height: hp("0.6764604745666838%"),
    minHeight: hp("0.6764604745666838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.59583333333334%"),
    top: hp("14.070371200478142%")
  },
  ImageBackground_0_1378: {
    width: wp("1.8486312866210937%"),
    minWidth: wp("1.8486312866210937%"),
    height: hp("1.0823367723350317%"),
    minHeight: hp("1.0823367723350317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.162760416666664%"),
    top: hp("12.311558124146174%")
  },
  ImageBackground_0_1381: {
    width: wp("12.67632853190104%"),
    minWidth: wp("12.67632853190104%"),
    height: hp("5.1410998151601985%"),
    minHeight: hp("5.1410998151601985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.729427083333334%"),
    top: hp("8.79399867657104%")
  },
  ImageBackground_0_1384: {
    width: wp("2.6409016927083333%"),
    minWidth: wp("2.6409016927083333%"),
    height: hp("1.7587973120434037%"),
    minHeight: hp("1.7587973120434037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.049999999999997%"),
    top: hp("7.576363985655739%")
  },
  ImageBackground_0_1385: {
    width: wp("1.3204508463541667%"),
    minWidth: wp("1.3204508463541667%"),
    height: hp("0.2705841930837579%"),
    minHeight: hp("0.2705841930837579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.426822916666666%"),
    top: hp("12.717458589480877%")
  },
  ImageBackground_0_1386: {
    width: wp("18.222222900390626%"),
    minWidth: wp("18.222222900390626%"),
    height: hp("6.8998972574869795%"),
    minHeight: hp("6.8998972574869795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.655468749999997%"),
    top: hp("20.835000960553277%")
  },
  ImageBackground_0_1387: {
    width: wp("7.658615112304687%"),
    minWidth: wp("7.658615112304687%"),
    height: hp("10.011615648947126%"),
    minHeight: hp("10.011615648947126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.070833333333333%"),
    top: hp("17.723275273224044%")
  },
  ImageBackground_0_1388: {
    width: wp("6.074074300130208%"),
    minWidth: wp("6.074074300130208%"),
    height: hp("6.223436782920295%"),
    minHeight: hp("6.223436782920295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.863020833333337%"),
    top: hp("16.911541047643443%")
  },
  ImageBackground_0_1391: {
    width: wp("17.958131917317708%"),
    minWidth: wp("17.958131917317708%"),
    height: hp("12.176288542200307%"),
    minHeight: hp("12.176288542200307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.23984375%"),
    top: hp("17.317374807889347%")
  },
  ImageBackground_0_1400: {
    width: wp("5.809983825683593%"),
    minWidth: wp("5.809983825683593%"),
    height: hp("1.4882130701033796%"),
    minHeight: hp("1.4882130701033796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.29296875%"),
    top: hp("20.293822575136613%")
  },
  ImageBackground_0_1403: {
    width: wp("23.768115234375%"),
    minWidth: wp("23.768115234375%"),
    height: hp("10.82336759306694%"),
    minHeight: hp("10.82336759306694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.598958333333336%"),
    top: hp("16.776196422472683%")
  },
  ImageBackground_0_1406: {
    width: wp("15.581320190429688%"),
    minWidth: wp("15.581320190429688%"),
    height: hp("7.98223370411357%"),
    minHeight: hp("7.98223370411357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.085416666666674%"),
    top: hp("0%")
  },
  ImageBackground_0_1409: {
    width: wp("1.3204508463541667%"),
    minWidth: wp("1.3204508463541667%"),
    height: hp("0.6764604745666838%"),
    minHeight: hp("0.6764604745666838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.12708333333333%"),
    top: hp("8.252820291154372%")
  },
  ImageBackground_0_1412: {
    width: wp("12.41223856608073%"),
    minWidth: wp("12.41223856608073%"),
    height: hp("6.223436782920295%"),
    minHeight: hp("6.223436782920295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.979166666666664%"),
    top: hp("3.38228152749317%")
  },
  ImageBackground_0_1424: {
    width: wp("5.017713419596355%"),
    minWidth: wp("5.017713419596355%"),
    height: hp("2.5705499075800993%"),
    minHeight: hp("2.5705499075800993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.56041666666667%"),
    top: hp("0.5411783854166679%")
  },
  ImageBackground_0_1425: {
    width: wp("1.8486312866210937%"),
    minWidth: wp("1.8486312866210937%"),
    height: hp("0.6764604745666838%"),
    minHeight: hp("0.6764604745666838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.145052083333333%"),
    top: hp("1.488190531079237%")
  },
  ImageBackground_0_1426: {
    width: wp("4.75362294514974%"),
    minWidth: wp("4.75362294514974%"),
    height: hp("2.0293814237000514%"),
    minHeight: hp("2.0293814237000514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.676302083333333%"),
    top: hp("5.546995069159834%")
  },
  ImageBackground_0_1429: {
    width: wp("4.75362294514974%"),
    minWidth: wp("4.75362294514974%"),
    height: hp("2.8411341495201237%"),
    minHeight: hp("2.8411341495201237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.676302083333333%"),
    top: hp("4.735194138490439%")
  },
  ImageBackground_0_1432: {
    width: wp("8.186795552571615%"),
    minWidth: wp("8.186795552571615%"),
    height: hp("3.1117183914601476%"),
    minHeight: hp("3.1117183914601476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.25442708333334%"),
    top: hp("2.299991461748636%")
  },
  ImageBackground_0_1433: {
    width: wp("8.186795552571615%"),
    minWidth: wp("8.186795552571615%"),
    height: hp("3.1117183914601476%"),
    minHeight: hp("3.1117183914601476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.25442708333334%"),
    top: hp("2.1646468365778695%")
  },
  ImageBackground_0_1436: {
    width: wp("4.75362294514974%"),
    minWidth: wp("4.75362294514974%"),
    height: hp("2.4352576563267108%"),
    minHeight: hp("2.4352576563267108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.06432291666667%"),
    top: hp("10.688089672984972%")
  },
  ImageBackground_0_1439: {
    width: wp("7.922705078125%"),
    minWidth: wp("7.922705078125%"),
    height: hp("4.194055098653491%"),
    minHeight: hp("4.194055098653491%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8486979166666693%"),
    top: hp("11.22926805840164%")
  },
  ImageBackground_0_1444: {
    width: wp("3.6972625732421873%"),
    minWidth: wp("3.6972625732421873%"),
    height: hp("2.0293814237000514%"),
    minHeight: hp("2.0293814237000514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.961458333333333%"),
    top: hp("12.717458589480877%")
  },
  ImageBackground_0_1447: {
    width: wp("3.6972625732421873%"),
    minWidth: wp("3.6972625732421873%"),
    height: hp("2.1646735446700633%"),
    minHeight: hp("2.1646735446700633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.961458333333333%"),
    top: hp("12.446902749316937%")
  },
  ImageBackground_0_1448: {
    width: wp("50.96940511067708%"),
    minWidth: wp("50.96940511067708%"),
    height: hp("0.13529209654187896%"),
    minHeight: hp("0.13529209654187896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.264101455771865%")
  },
  ImageBackground_0_1449: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
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
