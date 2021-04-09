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
      <View style={styles.View_0_1117}>
        <View style={styles.View_I0_1117_0_3847}>
          <View style={styles.View_I0_1117_0_3850} />
          <View style={styles.View_I0_1117_0_3852}>
            <Text style={styles.Text_I0_1117_0_3852}>GO TO SHOPPING</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1209}>
        <View style={styles.View_3_2070}>
          <Text style={styles.Text_3_2070}>
            Be inspired and discover something new to renew your closet
          </Text>
        </View>
        <View style={styles.View_3_2072}>
          <Text style={styles.Text_3_2072}>Shopping bag is empty.</Text>
        </View>
      </View>
      <View style={styles.View_0_1119}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/026f/a63c8dbf0dfbf8b33a231b0b338f65b3"
          }}
          style={styles.ImageBackground_0_1120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baa1/932f/e97d8a0f50c4d25d47bc5cf754ca4ff0"
          }}
          style={styles.ImageBackground_0_1121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607a/7281/b16eafafab4238b705774afc87d4e502"
          }}
          style={styles.ImageBackground_0_1122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc08/1b86/9e23c7e9b3c127c86011d502c5e489be"
          }}
          style={styles.ImageBackground_0_1123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec1/1ffc/a61996c41673df172c626703f7f59b55"
          }}
          style={styles.ImageBackground_0_1124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
          }}
          style={styles.ImageBackground_0_1129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a72/9a92/2cf36d0fb4408e4805d41b68c3c22daa"
          }}
          style={styles.ImageBackground_0_1130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4820/b9a1/969d2b9ad537fc5a4cc1a9f0d9d61295"
          }}
          style={styles.ImageBackground_0_1131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1786/7131/93e7fbe158a166b824c77b330464c1e8"
          }}
          style={styles.ImageBackground_0_1132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a6d/b4cb/b698a7b9e89d3700e4da25986b6bacef"
          }}
          style={styles.ImageBackground_0_1133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18b6/2914/221ce3acee415aeff49d0d133f599c5e"
          }}
          style={styles.ImageBackground_0_1136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c73c/98a8/033a7efd40bac98f380acef1168c543e"
          }}
          style={styles.ImageBackground_0_1143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e5/310f/985a0a05780fc07fe06a98457ad3f1c1"
          }}
          style={styles.ImageBackground_0_1144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2356/72f3/3ca7269fb2097fb3c09f2b26dee7ad22"
          }}
          style={styles.ImageBackground_0_1145}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24a1/4476/13c775f3029a3cbc10fdda70f9566d17"
          }}
          style={styles.ImageBackground_0_1146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33e/ba09/89c182e7c7c1e2370f3fb0429bbba18c"
          }}
          style={styles.ImageBackground_0_1147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e92f/de0b/c829b61a6c37575421c4cae00f7fe052"
          }}
          style={styles.ImageBackground_0_1148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a28/dd88/afd4858e4b843d24432211d2e1e5b08e"
          }}
          style={styles.ImageBackground_0_1149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4d4/1f92/8dd00ae88b6076b4cb31eadf44eb672a"
          }}
          style={styles.ImageBackground_0_1152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e839/ba81/4467080adbf899e8f545e1639397725d"
          }}
          style={styles.ImageBackground_0_1153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48cb/6df9/e635ae5e7359ebef4ff7f2ec9c101b3c"
          }}
          style={styles.ImageBackground_0_1154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d7/29ad/cfbe7ec0d974f885f7cdc39b2e73cde8"
          }}
          style={styles.ImageBackground_0_1155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc9b/b7ab/cdf10b0d41a52acb1e6c78334b721948"
          }}
          style={styles.ImageBackground_0_1156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c794/a330/cee5f4329acc98bc81e7a20cbafdeb58"
          }}
          style={styles.ImageBackground_0_1159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a78/3a3c/9be40058aa63d1c5b1bf597e46932f37"
          }}
          style={styles.ImageBackground_0_1160}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8931/965f/70b1752b12b3f2d85785a6354eabc030"
          }}
          style={styles.ImageBackground_0_1163}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb9/719e/c84e6fadaf2adf6f7ca45ae26be5efb5"
          }}
          style={styles.ImageBackground_0_1165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecff/49bb/b703900a0defb723c456fa0fdcc9fb96"
          }}
          style={styles.ImageBackground_0_1166}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c87/1a2d/a6bd54af6b2031bfe5f8942b9ff280c5"
          }}
          style={styles.ImageBackground_0_1167}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07eb/d049/b08cfc303a46220b8d20e6bf2fc808a4"
          }}
          style={styles.ImageBackground_0_1168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faad/9321/2a57349c925e16e2b952eb2ad6ddd3a0"
          }}
          style={styles.ImageBackground_0_1169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e89/23b1/73e364cb92fa513391141773deec0118"
          }}
          style={styles.ImageBackground_0_1170}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/614e/9ced/a48d16abb1455d923ede3f0fcb834c49"
          }}
          style={styles.ImageBackground_0_1171}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bb9/3b08/da14d6e93281cb5013267029f51e2aba"
          }}
          style={styles.ImageBackground_0_1174}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cac7/4701/730e276c617a5d73c32c100915ac086e"
          }}
          style={styles.ImageBackground_0_1183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34c0/cf9c/6d70f1694f8fd709955a1a8361476a70"
          }}
          style={styles.ImageBackground_0_1184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c555/bea3/dfcf709f84880579bee6f02685d704d9"
          }}
          style={styles.ImageBackground_0_1185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9171/6d67/0a44c1eeb5bd247e8bb87cef4403a5ac"
          }}
          style={styles.ImageBackground_0_1188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b19a/06a9/8aff92ea3aa9e9e1f234754a4606aeca"
          }}
          style={styles.ImageBackground_0_1199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8050/f69c/907d69771b93e97674948a92e8e62831"
          }}
          style={styles.ImageBackground_0_1208}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2618/debe/9dee8c5b3d12484a62f745a6334f54e2"
        }}
        style={styles.ImageBackground_0_1118}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1117: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1117_0_3847: {
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
  View_I0_1117_0_3850: {
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
  View_I0_1117_0_3852: {
    width: wp("68.55029296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.576822916666666%"),
    top: hp("2.868852459016395%")
  },
  Text_I0_1117_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1209: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("69.12568306010928%")
  },
  View_3_2070: {
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459019%")
  },
  Text_3_2070: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_2072: {
    width: wp("65.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("0%")
  },
  Text_3_2072: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1119: {
    width: wp("69.86666666666666%"),
    minWidth: wp("69.86666666666666%"),
    height: hp("36.885245901639344%"),
    minHeight: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("19.94535519125683%")
  },
  ImageBackground_0_1120: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.66666666666666%"),
    top: hp("14.071038251366119%")
  },
  ImageBackground_0_1121: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666666%"),
    top: hp("11.338797814207652%")
  },
  ImageBackground_0_1122: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.33333333333333%"),
    top: hp("11.748633879781423%")
  },
  ImageBackground_0_1123: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.866666666666674%"),
    top: hp("8.333333333333332%")
  },
  ImageBackground_0_1124: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    top: hp("10.51912568306011%")
  },
  ImageBackground_0_1125: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    top: hp("11.338797814207652%")
  },
  ImageBackground_0_1126: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("11.475409836065577%")
  },
  ImageBackground_0_1127: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333332%"),
    top: hp("11.475409836065577%")
  },
  ImageBackground_0_1128: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("11.612021857923498%")
  },
  ImageBackground_0_1129: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("11.475409836065577%")
  },
  ImageBackground_0_1130: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    top: hp("11.885245901639347%")
  },
  ImageBackground_0_1131: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.73333333333333%"),
    top: hp("28.278688524590166%")
  },
  ImageBackground_0_1132: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.26666666666667%"),
    top: hp("30.601092896174862%")
  },
  ImageBackground_0_1133: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.26666666666667%"),
    top: hp("30.601092896174862%")
  },
  ImageBackground_0_1136: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.26666666666667%"),
    top: hp("32.24043715846995%")
  },
  ImageBackground_0_1143: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.599999999999994%"),
    top: hp("10.928961748633881%")
  },
  ImageBackground_0_1144: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.599999999999994%"),
    top: hp("10.928961748633881%")
  },
  ImageBackground_0_1145: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666666%"),
    top: hp("10.655737704918035%")
  },
  ImageBackground_0_1146: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%"),
    top: hp("9.562841530054644%")
  },
  ImageBackground_0_1147: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.866666666666674%"),
    top: hp("8.060109289617486%")
  },
  ImageBackground_0_1148: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333333333333%"),
    top: hp("21.448087431693992%")
  },
  ImageBackground_0_1149: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.133333333333326%"),
    top: hp("10.51912568306011%")
  },
  ImageBackground_0_1152: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666666%"),
    top: hp("11.065573770491806%")
  },
  ImageBackground_0_1153: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  ImageBackground_0_1154: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73333333333333%"),
    top: hp("13.661202185792348%")
  },
  ImageBackground_0_1155: {
    width: wp("32.800000000000004%"),
    minWidth: wp("32.800000000000004%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666664%"),
    top: hp("17.213114754098363%")
  },
  ImageBackground_0_1156: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("14.20765027322404%")
  },
  ImageBackground_0_1159: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("14.20765027322404%")
  },
  ImageBackground_0_1160: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("14.20765027322404%")
  },
  ImageBackground_0_1163: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("14.754098360655739%")
  },
  ImageBackground_0_1165: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666666%"),
    top: hp("15.710382513661202%")
  },
  ImageBackground_0_1166: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.999999999999996%"),
    top: hp("14.89071038251366%")
  },
  ImageBackground_0_1167: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.866666666666674%"),
    top: hp("16.939890710382514%")
  },
  ImageBackground_0_1168: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.8%"),
    top: hp("15.710382513661202%")
  },
  ImageBackground_0_1169: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("24.453551912568308%")
  },
  ImageBackground_0_1170: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.09289617486339%")
  },
  ImageBackground_0_1171: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.09289617486339%")
  },
  ImageBackground_0_1174: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("17.759562841530055%")
  },
  ImageBackground_0_1183: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("15.300546448087431%")
  },
  ImageBackground_0_1184: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000003%"),
    top: hp("16.939890710382514%")
  },
  ImageBackground_0_1185: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("20.76502732240437%")
  },
  ImageBackground_0_1188: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333336%"),
    top: hp("2.7322404371584703%")
  },
  ImageBackground_0_1199: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("17.213114754098363%")
  },
  ImageBackground_0_1208: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("24.31693989071038%")
  },
  ImageBackground_0_1118: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
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
