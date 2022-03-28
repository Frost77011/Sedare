// Aboutscreen.js
import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { useState, useRef, useEffect, Component } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import {image_Shore_1_link} from './assets/imageLinks.js';
import {image_Rectangle_4_link} from './assets/imageLinks.js';
import {image_Fresh_Turboscent_1_link} from './assets/imageLinks.js';

export default class ProfileScreen extends Component {
	state = {
		value: 0.2
	};


  render() {
    return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
			<View style = {noneModeStyles._page12}    >
				<View style = {noneModeStyles._Header_With_Back}    >
					<View style = {noneModeStyles._TOP}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1_container}    >
							<View style = {noneModeStyles._Fresh_Turboscent_1}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Find_Your_Calm_Place}   >
							Profile
						</Text>
					</View>
					<View style = {noneModeStyles._Back_Button}    >
						<View style = {noneModeStyles._Rectangle_14}    >
						</View>
						<View style = {noneModeStyles.____Back}    >
							<Text style = {noneModeStyles.____Back_2}   >
									{/* this is where the back button should be */}
									</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
		</KeyboardAvoidingView>
    )
  }
}

const noneModeStyles = StyleSheet.create({
_page4: {
	paddingTop:141,
},
_section_header1: {
	borderBottomColor: 'grey',
	borderBottomWidth: 1,
	alignItems: 'center',
},
_section_header: {
	fontSize: 24,
	color: "rgba(110, 110, 110, 100)"
},
_section_body: {
	paddingTop: 10,
	alignItems: 'center'
},
_section_body_text: {
	fontSize: 18,
	alignItems: 'center',
},
_page10: {
	height: 844,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Navbar: {
	width: 390,
	height: 141,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 703,
	borderRadius: 15,
	},
_Rectangle_3: {
	width: 390,
	height: 104,
	backgroundColor: "rgb(154, 238, 208)",
	position: "absolute",
	transform: [
		{translateY: 37},
	],
	},
_Shore_1_container: {
	width: 390,
	height: 103,
	position: "absolute",
	transform: [
		{translateY: 38},
	],
	},
_Shore_1: {
	width: "100%",
	height: "100%",
	},
_Calendar_Button: {
	width: 132.08,
	height: 104,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 37},
	],
	},
_Profile_Button: {
	width: 132.08,
	height: 104,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 257.92},
		{translateY: 37},
	],
	},
_Rectangle_5: {
	width: 132.08,
	height: 104,
	backgroundColor: "rgb(62, 177, 177)",
	position: "absolute",
	},
_Meditate_Button: {
	width: 124.8,
	height: 116,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 132.08},
	],
	},
_Larger_Circle_Main_Button: {
	width: 124.8,
	height: 116,
	position: "absolute",
	borderTopWidth: 5,
	borderRightWidth: 5,
	borderBottomWidth: 5,
	borderLeftWidth: 5,
	borderStyle: "solid",
	borderColor: "rgb(93, 173, 236)",
	},
_Group: {
	width: 49.92,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 37.44},
		{translateY: 34},
	],
	},
style11: {
	position: "absolute",
	transform: [
		{translateX: 21.4934},
		{translateY: 32.0107},
	],
	},
style12: {
	},
style13: {
	position: "absolute",
	transform: [
		{translateX: 4.75348},
		{translateY: 32.0107},
	],
	},
style14: {
	},
style15: {
	position: "absolute",
	},
style16: {
	},
_codicon_account: {
	width: 70,
	height: 70,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 289},
		{translateY: 54},
	],
	},
style18: {
	position: "absolute",
	},
style19: {
	},
_Calendar_Button_2: {
	width: 120,
	height: 120,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: -2},
		{translateY: 34},
	],
	},
_Rectangle_4_container: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_Rectangle_4: {
	width: "100%",
	height: "100%",
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
})

