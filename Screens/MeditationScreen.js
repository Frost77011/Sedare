// Aboutscreen.js
import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { useState, useRef, useEffect, Component } from "react";
import { View, Text, Button, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Global from "./Global.js"
// import VideoPlayer from 'react-native-video-controls';

export default class MeditationScreen extends Component {



  render() {
    // const changeText = (time) => {
    //     time += 1;
    //     return <Text>Time: {time}</Text>
    // }
      var breathText = "Breath In";
      var counter = 0;
      var time = global.time;

    //   useEffect(() => {
    //     Sound.setCategory('Playback');
    //     this.playSound('./assets/sounds/Sea-waves-sound.mp3');
    //  });
   
    return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page7}    >
			<Text style = {noneModeStyles._Meditation_Screen}   >
            {global.bg}
			</Text>
            <Text style = {noneModeStyles._Meditation_Screen2}   >
				Sedare
			</Text>
            
			<View style = {noneModeStyles._Turquoise_flow_1}    >

            <CountdownCircleTimer
            isPlaying
            isSmoothColorTransition
            duration={10}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 2, 0]}
            onComplete={() => {
                if (counter === time){
                    alert("Session Complete")
                    return {shouldRepeat: false}
                }
                if (breathText === "Breath In"){
                    breathText = "Breath Out";
                }
                else{
                    breathText = "Breath In";
                    counter += 1;
                }
                // repeat animation in 1.5 seconds
                return { shouldRepeat: true, delay: .5 } 
              }}            >
    {({ remainingTime }) => <Text>{breathText} for {remainingTime}</Text>}
  </CountdownCircleTimer>
            <Button  backgroundColor="grey" color="grey" title="End Session" 
            onPress={() => {alert("Session Ended") 
            this.props.navigation.navigate('Home')}}
            style = {noneModeStyles.endSession} />
            <View>
            <Button
            title="-"
            onPress={() => time -= 1}
            />    
            <Text>Cycles: {time}</Text>         
        <Button
            title="+"
            onPress={() => time += 1}
            />
            </View>
            
            </View>
		</View>
	</KeyboardAvoidingView>
    )
  }
}

const noneModeStyles = StyleSheet.create({
    background_gif: {
        flex: 1,
        justifyContent: "center"
    },
    endSession:{
        backgroundColor: "rgb(255, 255, 255)",
        letterSpacing: 6,

    },
    
    _page7: {
        height: 844,
        width: Dimensions.get("window").width,
        minHeight: Dimensions.get("window").height,
        backgroundColor: "rgb(255, 255, 255)",
        },
    _Meditation_Screen: {
        letterSpacing: 6,
        width: "auto",
        height: "auto",
        top: 74,
        justifyContent: "center",
        color: "rgb(0, 0, 0)",
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        borderColor: "rgb(255, 255, 255)",
        borderRadius: 2
        },
        _Meditation_Screen2: {
            letterSpacing: 6,
            width: "auto",
            height: "auto",
            justifyContent: "center",
            top: 24,
            color: "rgb(0, 0, 0)",
            fontSize: 20,
            fontWeight: "400",
            textAlign: "center",
            borderColor: "rgb(255, 255, 255)",
            borderRadius: 2
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
    style4: {
        },
    style5: {
        width: 572.062,
        height: 572.061,
        position: "absolute",
        left: 91,
        top: 589,
        },
    style6: {
        },
    style7: {
        width: 704.417,
        height: 704.416,
        position: "absolute",
        left: -194,
        top: 514.584,
        },
    style8: {
        },
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
        transform: [
            {translateX: 65},
            {translateY: 54},
        ],
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
        transform: [
            {translateX: 32},
            {translateY: 21},
        ],
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
        transform: [
            {translateX: 56},
            {translateY: 14},
        ],
        color: "rgb(252, 252, 252)",
        fontSize: 25,
        fontWeight: "700",
        letterSpacing: 0,
        textAlign: "left",
        },
    style23: {
        position: "absolute",
        transform: [
            {translateX: 203},
            {translateY: 9},
        ],
        },
    })