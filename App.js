// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from './Screens/HomeScreen';
import MusicScreen from './Screens/MusicScreen';
import MoodScreen from './Screens/MoodScreen';
import InfoScreen from './Screens/InfoScreen';
import MeditationScreen from './Screens/MeditationScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CalendarScreen from './Screens/CalendarScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const AppNavigator = createStackNavigator({

  Home: {
    screen: HomeScreen
  },
  // Info: {
  //   screen: InfoScreen
  // },
  Mood: {
    screen: MoodScreen
  },
  // Music: {
  //   screen: MusicScreen
  // },
  Meditation: {
    screen: MeditationScreen
   },
  // Profile: {
  //   screen: ProfileScreen
  // },
  // Calendar: {
  //   screen: CalendarScreen
  // }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});