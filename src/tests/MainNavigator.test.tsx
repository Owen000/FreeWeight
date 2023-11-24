import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../navigation/MainNavigator';

describe('MainNavigator Tests', () => {
  it('renders home tab initially and it is clickable', () => {
    const { getAllByLabelText } = render(
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );

    const homeTabs = getAllByLabelText('Home Icon');
    expect(homeTabs.length).toBeGreaterThanOrEqual(1);
    if (homeTabs.length > 0) {
      fireEvent.press(homeTabs[0]);
    }
  });

  it('renders stats tab initially and it is clickable', () => {
    const { getAllByLabelText } = render(
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );

    const statsTabs = getAllByLabelText('Stats Icon');
    expect(statsTabs.length).toBeGreaterThanOrEqual(1);
    if (statsTabs.length > 0) {
      fireEvent.press(statsTabs[0]);
    }
  });

  it('renders settings tab initially and it is clickable', () => {
    const { getAllByLabelText } = render(
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );

    const settingsTabs = getAllByLabelText('Settings Icon');
    expect(settingsTabs.length).toBeGreaterThanOrEqual(1);
    if (settingsTabs.length > 0) {
      fireEvent.press(settingsTabs[0]);
    }
  });
});

