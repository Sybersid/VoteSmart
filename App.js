import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import CanidateScreen from './Canidates'
import VoteScreen from './Vote'
import NewsScreen from './News'


const TabNavigator = createBottomTabNavigator({
  Canidates: { screen: CanidateScreen,
    navigationOptions: {
      tabBarLabel: 'Canidates',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-contact" color={tintColor} size={24} />
      )
    }
  },
  News: { screen: NewsScreen,
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-list" color={tintColor} size={24} />
      )
    }
  },
  Vote:  { screen: VoteScreen,
    navigationOptions: {
      tabBarLabel: 'Vote',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-information-circle" color={tintColor} size={24} />
      )
    }
  }
  },
{
  initialRouteName : 'Vote',
  order: ['Canidates', 'News', 'Vote'],

  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    activeTintColor: 'crimson',
    inactiveTintColor: 'dodgerblue'
  }
});

export default createAppContainer(TabNavigator);