import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeIcon from '../assets/svgs/HomeIcon.tsx';
import SettingsIcon from '../assets/svgs/SettingsIcon.tsx'; // And this component
import StatsIcon from '../assets/svgs/StatsIcon.tsx'; // Make sure you have this component

const Tab = createMaterialTopTabNavigator();

const MainNavigator = () => {
  // Define the size of the icon
  const iconSize = {
    width: 26,
    height: 26,
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#777',
        tabBarIcon: ({ color, focused }) => {
          let IconComponent;
          if (route.name === 'Home') {
            IconComponent = HomeIcon;
          } else if (route.name === 'Stats') {
            IconComponent = StatsIcon;
          } else if (route.name === 'Settings') {
            IconComponent = SettingsIcon;
          }

          return IconComponent ? (
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: iconSize.width,
              height: iconSize.height,
            }}>
              <IconComponent color={color} width={iconSize.width} height={iconSize.height} />
            </View>
          ) : null;
        },
        tabBarLabelStyle: {
          marginBottom: 0,
          textTransform: 'none',
        },
        tabBarStyle: {
          backgroundColor: '#FCFCFC',
        },
        tabBarIndicatorStyle: {
          height: 0,
        },
        animationEnabled: false,
        tabBarPressColor: 'transparent',
        tabBarPressOpacity: 1,
        lazy: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;

