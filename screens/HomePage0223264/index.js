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
      <View style={styles.View_0_3}>
        <View style={styles.View_0_4}>
          <View style={styles.View_I0_4_0_4015}>
            <View style={styles.View_I0_4_0_4016}>
              <View style={styles.View_I0_4_0_4018} />
              <View style={styles.View_I0_4_0_4017} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6e3/eaf4/74ec554baaefab62fee2ae4eeaf0ceb5"
                }}
                style={styles.ImageBackground_I0_4_0_4019}
              />
              <View style={styles.View_I0_4_0_4020} />
            </View>
            <View style={styles.View_I0_4_0_4021}>
              <Text style={styles.Text_I0_4_0_4021}>Gifts</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_5}>
          <View style={styles.View_I0_5_0_4015}>
            <View style={styles.View_I0_5_0_4016}>
              <View style={styles.View_I0_5_0_4018} />
              <View style={styles.View_I0_5_0_4017} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1d/a04f/87918d239690bc5c4e29593b64d6273b"
                }}
                style={styles.ImageBackground_I0_5_0_4019}
              />
              <View style={styles.View_I0_5_0_4020} />
            </View>
            <View style={styles.View_I0_5_0_4021}>
              <Text style={styles.Text_I0_5_0_4021}>Jeans</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_6}>
          <View style={styles.View_I0_6_0_4015}>
            <View style={styles.View_I0_6_0_4016}>
              <View style={styles.View_I0_6_0_4018} />
              <View style={styles.View_I0_6_0_4017} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a87b/dd45/aab3726197ccdcee97cd48531aa39313"
                }}
                style={styles.ImageBackground_I0_6_0_4019}
              />
              <View style={styles.View_I0_6_0_4020} />
            </View>
            <View style={styles.View_I0_6_0_4021}>
              <Text style={styles.Text_I0_6_0_4021}>Dresses</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_7}>
          <View style={styles.View_I0_7_0_4015}>
            <View style={styles.View_I0_7_0_4016}>
              <View style={styles.View_I0_7_0_4018} />
              <View style={styles.View_I0_7_0_4017} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6294/c8ea/320b92cb976d05c5f088ef216d392147"
                }}
                style={styles.ImageBackground_I0_7_0_4019}
              />
              <View style={styles.View_I0_7_0_4020} />
            </View>
            <View style={styles.View_I0_7_0_4021}>
              <Text style={styles.Text_I0_7_0_4021}>Tops</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_8}>
        <View style={styles.View_0_9}>
          <View style={styles.View_0_10}>
            <View style={styles.View_0_12} />
            <View style={styles.View_0_11} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ddd/bc67/da91f40df6a16e5044ab37829f91d1cc"
              }}
              style={styles.ImageBackground_0_13}
            />
          </View>
          <View style={styles.View_0_15}>
            <View style={styles.View_I0_15_0_3847}>
              <View style={styles.View_I0_15_0_3850} />
              <View style={styles.View_I0_15_0_3852}>
                <Text style={styles.Text_I0_15_0_3852}>SHOP NOW</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_159}>
            <Text style={styles.Text_3_159}>Never Enough Layers</Text>
          </View>
          <View style={styles.View_3_156}>
            <Text style={styles.Text_3_156}>Pink Vibes Collection</Text>
          </View>
        </View>
        <View style={styles.View_0_17}>
          <View style={styles.View_0_18}>
            <View style={styles.View_0_20} />
            <View style={styles.View_0_19} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49aa/8cc3/7347f6bf406002a2988a6bca28087795"
              }}
              style={styles.ImageBackground_0_21}
            />
          </View>
          <View style={styles.View_3_152}>
            <Text style={styles.Text_3_152}>Under is the new outer</Text>
          </View>
          <View style={styles.View_3_154}>
            <Text style={styles.Text_3_154}>Weather textured</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_24}>
        <View style={styles.View_0_26} />
        <View style={styles.View_0_25} />
        <View style={styles.View_0_27}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9ae/bbb3/c189f80e9ab8272ff9dcd579346e4618"
            }}
            style={styles.ImageBackground_0_28}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3533/a86e/0601991115f9a8ac36f35b0f6ab45738"
            }}
            style={styles.ImageBackground_0_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a59a/1af9/eb37c10299847e658aec54c133665963"
            }}
            style={styles.ImageBackground_0_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0c2/ce8f/0aebd75cf4c59b27a8444ca30c5d22d9"
            }}
            style={styles.ImageBackground_0_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0779/6c03/85928d62a8494ce78da914d6d41a8fb6"
            }}
            style={styles.ImageBackground_0_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca86/a43c/2bf0352eee973eb9fa6c83812ca39011"
            }}
            style={styles.ImageBackground_0_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a05/4829/1185140d6801c841ec3043883ab6e915"
            }}
            style={styles.ImageBackground_0_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63f0/0e11/864ca2d006e043f1ac966966d90c0b48"
            }}
            style={styles.ImageBackground_0_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc19/fda7/859d2dd15d11a2bb4649e4e629e63cb6"
            }}
            style={styles.ImageBackground_0_36}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f9/d253/37e708b3433548aadd9b502311ac1e32"
            }}
            style={styles.ImageBackground_0_40}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef8/44af/e9cf839a7ede72885980c98de27872ed"
            }}
            style={styles.ImageBackground_0_41}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95f9/feae/d4da675859e0a08ac72e002e86dfb6cd"
            }}
            style={styles.ImageBackground_0_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0769/d87a/86939eba2267d3465355cd71f4bf4974"
            }}
            style={styles.ImageBackground_0_45}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4283/bf97/13a1dae74f9cd87bb65a1db958466eed"
            }}
            style={styles.ImageBackground_0_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2253/53bc/4bed7a3b6551881a9afbbaf09da0fc98"
            }}
            style={styles.ImageBackground_0_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfef/6880/349d17d56c2d9889664ba48ddbf3a84a"
            }}
            style={styles.ImageBackground_0_52}
          />
          <View style={styles.View_0_53}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0431/fa50/3c5eecf829d750c4df890a8b84a9e623"
              }}
              style={styles.ImageBackground_0_54}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec7/8e2b/53cb858478df0940a83121de69bee1d7"
              }}
              style={styles.ImageBackground_0_57}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9a6/928c/3dd2fab4cb98dcd082337eb1ecce647d"
            }}
            style={styles.ImageBackground_0_58}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f48/b490/fd1d103a742daee7dcb479b858573125"
            }}
            style={styles.ImageBackground_0_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/153e/cc65/094198d0a6635d98a65a0a78d44e02e5"
            }}
            style={styles.ImageBackground_0_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7980/45ee/edf8ec4598883507370a11eab2b3b238"
            }}
            style={styles.ImageBackground_0_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce35/cacf/de563c0f40f07d79b9379d8b0a8ccc1d"
            }}
            style={styles.ImageBackground_0_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3099/d704/543ac83b355c7f565983427a45942f5e"
            }}
            style={styles.ImageBackground_0_66}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
            }}
            style={styles.ImageBackground_0_67}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
            }}
            style={styles.ImageBackground_0_68}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
            }}
            style={styles.ImageBackground_0_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
            }}
            style={styles.ImageBackground_0_70}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/a0a0/029d61d7249c0d30d349a9514fe01e31"
            }}
            style={styles.ImageBackground_0_71}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/ae31/3546677126368da2335b65446c9c4e6a"
            }}
            style={styles.ImageBackground_0_72}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e592/6c4a/5d3372ea53a0e8f062dbfc5c58ef3630"
            }}
            style={styles.ImageBackground_0_73}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/504b/eaeb/a2419ec6d09d682e1ee8af99d96d2952"
            }}
            style={styles.ImageBackground_0_74}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d89/dae7/8812b632f799da03b09ce60c632b69ac"
            }}
            style={styles.ImageBackground_0_75}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d702/d2b9/0650ce3b93575fdd082c6f7afd33c09f"
            }}
            style={styles.ImageBackground_0_76}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/769f/5b98/48e74218df6efc994f43d065ba40b663"
            }}
            style={styles.ImageBackground_0_77}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b68/7ec5/0bb520756fe50a172a30ed1f28ae1bfb"
            }}
            style={styles.ImageBackground_0_78}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8701/05c0/5bf4b48f8659411b1c33c476358cab76"
            }}
            style={styles.ImageBackground_0_81}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc89/0f48/20065e03edbb3b696cc63467328e5fdb"
            }}
            style={styles.ImageBackground_0_82}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/840d/6620/0a3ec8e3b4e173ed4e4649923db278c9"
            }}
            style={styles.ImageBackground_0_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2416/04e8/ebb0245ffcc32d678e02a73f544c7d99"
            }}
            style={styles.ImageBackground_0_84}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/067f/f6bc/d0bee0881a6392d919c62772a622a0fc"
            }}
            style={styles.ImageBackground_0_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b0c/42c5/0b9fed3676a2f7912cc241f6d30c6132"
            }}
            style={styles.ImageBackground_0_86}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10f1/523e/ebcb2299fcc9b7946a134221e91c55d6"
            }}
            style={styles.ImageBackground_0_87}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c69b/d03c/b4587845ad014cdb39bd61255bd1b963"
            }}
            style={styles.ImageBackground_0_90}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8da/876c/bc93866fdafcd7e5844bfac6cabe8855"
            }}
            style={styles.ImageBackground_0_91}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f635/85e2/7386de4b1cf4f702a39616119db096f2"
            }}
            style={styles.ImageBackground_0_92}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f635/85e2/7386de4b1cf4f702a39616119db096f2"
            }}
            style={styles.ImageBackground_0_93}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f635/85e2/7386de4b1cf4f702a39616119db096f2"
            }}
            style={styles.ImageBackground_0_94}
          />
          <View source={{ uri: "null" }} style={styles.View_0_95} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/668b/5669/7323a5f9e0bde07a5ff8fd413f74c837"
            }}
            style={styles.ImageBackground_0_96}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b6c/2927/6e8f2176d0fa8e584e4b208e68033fef"
            }}
            style={styles.ImageBackground_0_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df9b/e25d/643ba24219c9620c7a9160a202701bea"
            }}
            style={styles.ImageBackground_0_107}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d2e/6fb7/59ba96e1ed10033d05289770b824590a"
            }}
            style={styles.ImageBackground_0_108}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b9a/8459/f8698d7e7633b63e20c320b2f40d2942"
            }}
            style={styles.ImageBackground_0_111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e55a/d2f5/50e35efc3b05c25181e694661d28292e"
            }}
            style={styles.ImageBackground_0_114}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea45/b864/72ce2b386e874f088b91234019e9d3ea"
          }}
          style={styles.ImageBackground_3_149}
        />
        <View style={styles.View_3_148}>
          <Text style={styles.Text_3_148}>Easy Delivery Worldwide</Text>
        </View>
      </View>
      <View style={styles.View_0_127}>
        <View style={styles.View_0_128} />
        <View style={styles.View_3_144}>
          <View style={styles.View_3_141}>
            <Text style={styles.Text_3_141}>New In</Text>
          </View>
          <View style={styles.View_3_138}>
            <Text style={styles.Text_3_138}>Categories</Text>
          </View>
          <View style={styles.View_3_143}>
            <View style={styles.View_0_131} />
            <View style={styles.View_3_135}>
              <Text style={styles.Text_3_135}>Home</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_133}>
          <View style={styles.View_0_134}>
            <View style={styles.View_I0_134_0_4001}>
              <View style={styles.View_I0_134_0_4002}>
                <View style={styles.View_I0_134_0_4003}>
                  <View style={styles.View_I0_134_0_4003_0_3841}>
                    <View style={styles.View_I0_134_0_4003_0_3841_0_4565}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9698/3a41/bdb43b07d6a707e0d33e209c900a09ec"
                        }}
                        style={
                          styles.ImageBackground_I0_134_0_4003_0_3841_0_4569
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7701/08a4/6da10234608dbc68b799c8cf1b615003"
                        }}
                        style={
                          styles.ImageBackground_I0_134_0_4003_0_3841_0_4570
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/fd7c/96d95bc5251bf3d5ca9dd4ef2a89bb62"
                        }}
                        style={
                          styles.ImageBackground_I0_134_0_4003_0_3841_0_4571
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I0_134_0_4004}>
                <View style={styles.View_I0_134_0_4004_0_3985}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e25/ef3d/0eb8e8eeaec052344eb92bf65ca94bfb"
                    }}
                    style={styles.ImageBackground_I0_134_0_4004_0_3989}
                  />
                </View>
              </View>
              <View style={styles.View_I0_134_0_4006}>
                <Text style={styles.Text_I0_134_0_4006}>women</Text>
              </View>
              <View style={styles.View_I0_134_0_4007}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ab5/4ea5/57d407c5a5ed4714bded18362abf37b2"
                  }}
                  style={styles.ImageBackground_I0_134_0_4007_0_3997}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a4/46a1/39cb71d6d7cee15787de55b18e12df8a"
                  }}
                  style={styles.ImageBackground_I0_134_0_4007_0_3998}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/714b/aae8/2eda9863012ce8ab33a1316bedcdacfb"
            }}
            style={styles.ImageBackground_0_135}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_3: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("44.94535519125683%"),
    minHeight: hp("44.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("196.5846994535519%")
  },
  View_0_4: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.26666666666667%"),
    top: hp("23.08743169398909%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4_0_4015: {
    flexGrow: 1,
    width: wp("42.4%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_4_0_4016: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("21.770596113361297%"),
    minHeight: hp("21.770596113361297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_4_0_4018: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_4_0_4017: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_4_0_4019: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_4_0_4020: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_4_0_4021: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333327%"),
    top: hp("9.016393442622928%")
  },
  Text_I0_4_0_4021: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_5: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.224043715847017%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_5_0_4015: {
    flexGrow: 1,
    width: wp("42.4%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_5_0_4016: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("21.770596113361297%"),
    minHeight: hp("21.770596113361297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_5_0_4018: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_5_0_4017: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_5_0_4019: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_5_0_4020: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_5_0_4021: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("9.016393442622928%")
  },
  Text_I0_5_0_4021: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_6: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.26666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_6_0_4015: {
    flexGrow: 1,
    width: wp("42.4%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_6_0_4016: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("21.770596113361297%"),
    minHeight: hp("21.770596113361297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_6_0_4018: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_6_0_4017: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_6_0_4019: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_6_0_4020: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_6_0_4021: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333327%"),
    top: hp("9.016393442622956%")
  },
  Text_I0_6_0_4021: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_7: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_7_0_4015: {
    flexGrow: 1,
    width: wp("42.4%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_7_0_4016: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("21.770596113361297%"),
    minHeight: hp("21.770596113361297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_7_0_4018: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_7_0_4017: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_7_0_4019: {
    width: wp("42.4%"),
    height: hp("21.770596113361297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_7_0_4020: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_7_0_4021: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("9.016393442622984%")
  },
  Text_I0_7_0_4021: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_8: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("151.9125683060109%"),
    minHeight: hp("151.9125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("39.20765027322404%")
  },
  View_0_9: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("79.37158469945356%"),
    minHeight: hp("79.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72.54098360655738%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_10: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_12: {
    width: wp("87.2%"),
    height: hp("55.19125683060109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_11: {
    width: wp("87.2%"),
    height: hp("55.19125683060109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_13: {
    width: wp("87.2%"),
    height: hp("55.19125683060109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_15: {
    width: wp("46.13333333333333%"),
    height: hp("8.469945355191257%"),
    top: hp("70.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_15_0_3847: {
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
  View_I0_15_0_3850: {
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
  View_I0_15_0_3852: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.868852459016381%")
  },
  Text_I0_15_0_3852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_159: {
    width: wp("47.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("64.20765027322405%")
  },
  Text_3_159: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_156: {
    width: wp("79.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("58.743169398907085%")
  },
  Text_3_156: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_17: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("67.07650273224044%"),
    minHeight: hp("67.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_18: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_20: {
    width: wp("87.2%"),
    height: hp("55.19125683060109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_19: {
    width: wp("87.2%"),
    height: hp("55.19125683060109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 241, 253, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_21: {
    width: wp("87.2%"),
    height: hp("55.19125683060109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_152: {
    width: wp("50.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("64.34426229508196%")
  },
  Text_3_152: {
    color: "rgba(14, 55, 99, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_154: {
    width: wp("66.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("58.879781420765035%")
  },
  Text_3_154: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_24: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("24.453551912568305%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_26: {
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
  View_0_25: {
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
  View_0_27: {
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
  ImageBackground_0_28: {
    width: wp("8.799999999999999%"),
    height: hp("1.5027322404371584%"),
    top: hp("6.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%")
  },
  ImageBackground_0_29: {
    width: wp("2.4%"),
    height: hp("0.546448087431694%"),
    top: hp("6.8306010928961705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%")
  },
  ImageBackground_0_30: {
    width: wp("1.6%"),
    height: hp("1.092896174863388%"),
    top: hp("6.693989071038256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333328%")
  },
  ImageBackground_0_31: {
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    top: hp("5.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%")
  },
  ImageBackground_0_32: {
    width: wp("0.5333333333333333%"),
    height: hp("0.4098360655737705%"),
    top: hp("6.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%")
  },
  ImageBackground_0_33: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("6.693989071038256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599999999999998%")
  },
  ImageBackground_0_34: {
    width: wp("2.933333333333333%"),
    height: hp("0.4098360655737705%"),
    top: hp("7.3770491803278695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%")
  },
  ImageBackground_0_35: {
    width: wp("7.199999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%")
  },
  ImageBackground_0_36: {
    width: wp("24%"),
    height: hp("3.0054644808743167%"),
    top: hp("8.196721311475411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  ImageBackground_0_40: {
    width: wp("5.6000000000000005%"),
    height: hp("4.2349726775956285%"),
    top: hp("3.142076502732241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%")
  },
  ImageBackground_0_41: {
    width: wp("4.8%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.2786885245901622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.400000000000002%")
  },
  ImageBackground_0_44: {
    width: wp("9.066666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("5.464480874316941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_45: {
    width: wp("4%"),
    height: hp("1.639344262295082%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.73333333333333%")
  },
  ImageBackground_0_50: {
    width: wp("1.6%"),
    height: hp("4.508196721311475%"),
    top: hp("5.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%")
  },
  ImageBackground_0_51: {
    width: wp("2.933333333333333%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.7759562841530077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%")
  },
  ImageBackground_0_52: {
    width: wp("10.666666666666668%"),
    height: hp("2.5956284153005464%"),
    top: hp("8.196721311475411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  View_0_53: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("8.333333333333332%")
  },
  ImageBackground_0_54: {
    width: wp("7.32355499267578%"),
    height: hp("2.8483221439715942%"),
    top: hp("0.017810258709019422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07050781250000071%")
  },
  ImageBackground_0_57: {
    width: wp("7.32355499267578%"),
    height: hp("2.8483221439715942%"),
    top: hp("0.017810258709019422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07050781250000071%")
  },
  ImageBackground_0_58: {
    width: wp("6.933333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("3.2786885245901622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  ImageBackground_0_61: {
    width: wp("6.933333333333333%"),
    height: hp("5.8743169398907105%"),
    top: hp("3.142076502732241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  ImageBackground_0_63: {
    width: wp("0.5333333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.7759562841530077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.93333333333333%")
  },
  ImageBackground_0_64: {
    width: wp("3.733333333333334%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%")
  },
  ImageBackground_0_65: {
    width: wp("0.5333333333333333%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.6393442622950865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26666666666667%")
  },
  ImageBackground_0_66: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%")
  },
  ImageBackground_0_67: {
    width: wp("0.26666666666666666%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.7759562841530077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.799999999999997%")
  },
  ImageBackground_0_68: {
    width: wp("0.08595744768778484%"),
    height: hp("0.04421915512918775%"),
    top: hp("2.1637129653346996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.49036458333333%")
  },
  ImageBackground_0_69: {
    width: wp("0.08595744768778484%"),
    height: hp("0.04421915512918775%"),
    top: hp("2.1637129653346996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.02369791666667%")
  },
  ImageBackground_0_70: {
    width: wp("0.08595744768778484%"),
    height: hp("0.04421915512918775%"),
    top: hp("2.300324987192621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.49036458333333%")
  },
  ImageBackground_0_71: {
    width: wp("0.08595744768778484%"),
    height: hp("0.04421915512918775%"),
    top: hp("2.1637129653346996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.757031249999997%")
  },
  ImageBackground_0_72: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("1.6393442622950865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.13333333333333%")
  },
  ImageBackground_0_73: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26666666666667%")
  },
  ImageBackground_0_74: {
    width: wp("0.5333333333333333%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.9125683060109289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%")
  },
  ImageBackground_0_75: {
    width: wp("0.5333333333333333%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.9125683060109289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%")
  },
  ImageBackground_0_76: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("1.6393442622950865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000002%")
  },
  ImageBackground_0_77: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("1.7759562841530077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%")
  },
  ImageBackground_0_78: {
    width: wp("4.533333333333333%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666666%")
  },
  ImageBackground_0_81: {
    width: wp("1.6%"),
    height: hp("0.273224043715847%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  ImageBackground_0_82: {
    width: wp("6.4%"),
    height: hp("4.508196721311475%"),
    top: hp("3.142076502732241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%")
  },
  ImageBackground_0_83: {
    width: wp("5.066666666666666%"),
    height: hp("3.1420765027322406%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%")
  },
  ImageBackground_0_84: {
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    top: hp("3.142076502732241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%")
  },
  ImageBackground_0_85: {
    width: wp("10.133333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("6.147540983606561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%")
  },
  ImageBackground_0_86: {
    width: wp("6.933333333333333%"),
    height: hp("0.819672131147541%"),
    top: hp("6.284153005464486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666664%")
  },
  ImageBackground_0_87: {
    width: wp("14.666666666666666%"),
    height: hp("0.4098360655737705%"),
    top: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  ImageBackground_0_90: {
    width: wp("2.666666666666667%"),
    height: hp("0.6830601092896175%"),
    top: hp("7.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  ImageBackground_0_91: {
    width: wp("2.4%"),
    height: hp("0.273224043715847%"),
    top: hp("7.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.799999999999997%")
  },
  ImageBackground_0_92: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("7.3770491803278695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%")
  },
  ImageBackground_0_93: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("7.3770491803278695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%")
  },
  ImageBackground_0_94: {
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("7.240437158469941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%")
  },
  View_0_95: {
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666394%")
  },
  ImageBackground_0_96: {
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666394%")
  },
  ImageBackground_0_99: {
    width: wp("5.066666666666666%"),
    height: hp("1.2295081967213115%"),
    top: hp("8.060109289617483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%")
  },
  ImageBackground_0_107: {
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    top: hp("5.874316939890711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333307%")
  },
  ImageBackground_0_108: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("6.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_111: {
    width: wp("1.3333333333333335%"),
    height: hp("0.6830601092896175%"),
    top: hp("6.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_114: {
    width: wp("12%"),
    height: hp("2.5956284153005464%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666394%")
  },
  ImageBackground_3_149: {
    width: wp("85.051708984375%"),
    height: hp("12.26900027749317%"),
    top: hp("-0.5812681437841505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4000000000000004%")
  },
  View_3_148: {
    width: wp("68.00681966145832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.93333333333334%"),
    top: hp("2.2630368425546443%")
  },
  Text_3_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_127: {
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
  View_0_128: {
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
  View_3_144: {
    width: wp("78.23790690104167%"),
    minWidth: wp("78.23790690104167%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("14.071038251366119%")
  },
  View_3_141: {
    width: wp("16.10457560221354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    top: hp("0%")
  },
  Text_3_141: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_138: {
    width: wp("26.169934082031247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("0%")
  },
  Text_3_138: {
    color: "rgba(98, 114, 133, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_143: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_131: {
    width: wp("16.8%"),
    height: hp("0.4098360655737705%"),
    top: hp("6.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(13, 54, 98, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_3_135: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("0%")
  },
  Text_3_135: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_133: {
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
  View_0_134: {
    width: wp("87.2%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_134_0_4001: {
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
  View_I0_134_0_4002: {
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
  View_I0_134_0_4003: {
    width: wp("6.933333333333333%"),
    height: hp("3.6885245901639343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_134_0_4003_0_3841: {
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
  View_I0_134_0_4003_0_3841_0_4565: {
    flexGrow: 1,
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9600260416666657%"),
    top: hp("0.4439890710382519%")
  },
  ImageBackground_I0_134_0_4003_0_3841_0_4569: {
    width: wp("4.479999796549479%"),
    height: hp("2.527322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_134_0_4003_0_3841_0_4570: {
    width: wp("4.479999796549479%"),
    height: hp("0.20491803278688525%"),
    top: hp("0.47814207650273133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_134_0_4003_0_3841_0_4571: {
    width: wp("2.2133333841959635%"),
    height: hp("0.6147540983606558%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.13333333333334%")
  },
  View_I0_134_0_4004: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_134_0_4004_0_3985: {
    flexGrow: 1,
    width: wp("4.6%"),
    height: hp("1.1782788188079667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7666666666666657%"),
    top: hp("1.1128409964139339%")
  },
  ImageBackground_I0_134_0_4004_0_3989: {
    width: wp("4.6%"),
    height: hp("1.1782788188079667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_134_0_4006: {
    width: wp("30.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I0_134_0_4006: {
    color: "rgba(13, 54, 98, 1)",
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_134_0_4007: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_134_0_4007_0_3997: {
    flexGrow: 1,
    width: wp("4.472222391764323%"),
    height: hp("2.29109753676451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5749999999999886%"),
    top: hp("0.29456967213114815%")
  },
  ImageBackground_I0_134_0_4007_0_3998: {
    flexGrow: 1,
    width: wp("1.4949996948242188%"),
    height: hp("0.7658812517676848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.063346354166654%"),
    top: hp("2.081599001024591%")
  },
  ImageBackground_0_135: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%")
  },
  View_2: { height: 1800 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
