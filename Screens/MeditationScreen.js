// Aboutscreen.js
import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { useState, useRef, useEffect, Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Animated,
  Dimensions,
  Vibration,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Global from "./Global.js";
import { image_BackgroundBox_2_link } from "./assets/imageLinks.js";

export default class MeditationScreen extends Component {
  render() {
    var breathText = "Breath In";
    var counter = 0;
    var time = global.time;
    var breathIn = global.breath;

    return (
      <View style={noneModeStyles._page7}>
        <View style={noneModeStyles._BackgroundBox_2}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={{ uri: global.image }}
          />
        </View>
        <View style={noneModeStyles.buttons}>
          <TouchableOpacity>
            <Text
              style={noneModeStyles.textWhite}
              onPress={() => {
                alert("hit" + time);
                time += 1;
              }}
            >
              -{" "}
            </Text>
          </TouchableOpacity>
          <Text style={noneModeStyles.textWhite}>Cycles: 6</Text>
          <TouchableOpacity>
            <Text
              style={noneModeStyles.textWhite}
              onPress={() => {
                alert("hit" + time);
                time += 1;
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text
            style={noneModeStyles.endSession}
            onPress={() => {
              {
                this.props.navigation.navigate("Home");
              }
            }}
          >
            End Session
          </Text>
        </TouchableOpacity>

        <Text style={noneModeStyles._Meditation_Screen}>{global.bg}</Text>
        <Text style={noneModeStyles._Meditation_Screen2}>Sedare</Text>

        <View style={noneModeStyles._Turquoise_flow_1}>
          <CountdownCircleTimer
            isPlaying
            isSmoothColorTransition
            duration={breathIn}
            
            colors={["#0856A8", "#4298F5", "#9BCCFF"]}
            colorsTime={[7, 4, 0]}
            onComplete={() => {
              if (counter === time) {
                alert("Session Complete");
                return { shouldRepeat: false };
              }
              if (breathText === "Breath In") {
                  breathIn = Math.abs(global.breath - 2)
                breathText = "Breath Out";
              } else {
                breathIn = global.breath
                breathText = "Breath In";
                counter += 1;
              }
              // repeat animation in 1.5 seconds
              return { shouldRepeat: true, delay: 0.5 };
            }}
          >
            {({ remainingTime }) => (
              <Text style={noneModeStyles.textWhite}>
                {breathText} {remainingTime}
              </Text>
            )}
          </CountdownCircleTimer>
        </View>
      </View>
    );
  }
}

const noneModeStyles = StyleSheet.create({
  textWhite: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  background_gif: {
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 50,
    textAlign: "center",
    color: "white",
    bottom: 375,
  },
  endSession: {
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "row",
    letterSpacing: 6,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
    width: "50%",
    left: 100,
    bottom: 300,
  },
  _BackgroundBox_2: {
    height: "100%",
    width: undefined,
  },
  _Meditation_Screen: {
    letterSpacing: 6,
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    bottom: 800,
  },
  _Meditation_Screen2: {
    letterSpacing: 6,
    width: "auto",
    height: "auto",
    justifyContent: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "center",
    bottom: 890,
  },
  _Turquoise_flow_1: {
    width: 390,
    height: 747.835,
    position: "absolute",
    left: 100,
    top: 200,
  },
  style3: {
    width: 500,
    height: 500,
    position: "absolute",
    left: -123,
    top: 265,
  },
  style4: {},
  style5: {
    width: 572.062,
    height: 572.061,
    position: "absolute",
    left: 91,
    top: 589,
  },
  style6: {},
  style7: {
    width: 704.417,
    height: 704.416,
    position: "absolute",
    left: -194,
    top: 514.584,
  },
  style8: {},
  _Header_With_Back: {
    width: 390,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _TOP: {
    width: 392,
    height: 100,
    position: "absolute",
  },
  _Fresh_Turboscent_1_container: {
    width: 392,
    height: 100,
    position: "absolute",
  },
  _Fresh_Turboscent_1: {
    width: "100%",
    height: "100%",
  },
  _Find_Your_Calm_Place: {
    width: 263,
    height: 24,
    position: "absolute",
    transform: [{ translateX: 65 }, { translateY: 54 }],
    color: "rgb(252, 252, 252)",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 29.2969,
    letterSpacing: 0,
    textAlign: "center",
  },
  // _Back_Button: {
  //     width: 131,
  //     height: 62,
  //     backgroundColor: "rgba(255, 255, 255, 0)",
  //     position: "absolute",
  //     transform: [
  //         {translateX: -16},
  //     ],
  //     },
  _Rectangle_14: {
    width: 131,
    height: 62,
    backgroundColor: "rgb(196, 196, 196)",
    position: "absolute",
  },
  ____Back: {
    width: 67,
    height: 20,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    transform: [{ translateX: 32 }, { translateY: 21 }],
  },
  ____Back_2: {
    width: "auto",
    height: "auto",
    position: "absolute",
    color: "rgb(252, 252, 252)",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  // _PrimaryButton: {
  //     width: 275,
  //     height: 49,
  //     position: "absolute",
  //     left: 59,
  //     top: 763,
  //     },
  // _PrimaryButton_2: {
  //     width: 275,
  //     height: 49,
  //     backgroundColor: "rgb(93, 173, 236)",
  //     position: "absolute",
  //     borderRadius: 30,
  //     },
  _Fresh_Turboscent_1_container_2: {
    width: 275,
    height: 49,
    position: "absolute",
  },
  _Fresh_Turboscent_1_2: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  _Let_s_Begin: {
    width: 162.35,
    height: "auto",
    position: "absolute",
    transform: [{ translateX: 56 }, { translateY: 14 }],
    color: "rgb(252, 252, 252)",
    fontSize: 25,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  style23: {
    position: "absolute",
    transform: [{ translateX: 203 }, { translateY: 9 }],
  },
});
