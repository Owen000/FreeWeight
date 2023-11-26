import React from 'react';
import { View, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeIcon from '../assets/svgs/HomeIcon';
import SettingsIcon from '../assets/svgs/SettingsIcon';
import StatsIcon from '../assets/svgs/StatsIcon';

const Tab = createMaterialTopTabNavigator();

const MainNavigator = () => {
  const insets = useSafeAreaInsets();
  const tabBarPaddingBottom = Platform.OS === 'ios' ? insets.bottom : 0;

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
          let accessibilityLabel;

          if (route.name === 'Home') {
            IconComponent = HomeIcon;
            accessibilityLabel = 'Home Icon';
          } else if (route.name === 'Stats') {
            IconComponent = StatsIcon;
            accessibilityLabel = 'Stats Icon';
          } else if (route.name === 'Settings') {
            IconComponent = SettingsIcon;
            accessibilityLabel = 'Settings Icon';
          }

          return IconComponent ? (
            <View
              accessibilityLabel={accessibilityLabel}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: iconSize.width,
                height: iconSize.height,
              }}
            >
              <IconComponent color={color} width={iconSize.width} height={iconSize.height} />
            </View>
          ) : null;
        },
        tabBarLabelStyle: {
          marginBottom: 0,
          textTransform: 'none',
        },
        tabBarStyle: {
          backgroundColor: '#F5F5F5',
          height: 'auto',
          paddingBottom: tabBarPaddingBottom,
          borderTopWidth: 1,
          borderTopColor: '#B3B3B3',
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

