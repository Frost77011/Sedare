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


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  InfoScreen: {
    screen: MusicScreen
  },
  Mood: {
    screen: MoodScreen
  },
  Info: {
    screen: InfoScreen
  }
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