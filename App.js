import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UpcomingMatchesScreen from './src/screens/UpcomingMatchesScreen';
import SelectPlayersScreen from './src/screens/SelectPlayersScreen';
import SelectCaptainScreen from './src/screens/SelectCaptainScreen';
import SelectViceCaptainScreen from './src/screens/SelectViceCaptainScreen';
import DisplayTeamScreen from './src/screens/DisplayTeamScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UpcomingMatches"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="SelectPlayers"
          component={SelectPlayersScreen}
        />
        <Stack.Screen
          name="UpcomingMatches"
          component={UpcomingMatchesScreen}
        />
        <Stack.Screen
          name="SelectCaptain"
          component={SelectCaptainScreen}
        />
        <Stack.Screen
          name="SelectViceCaptain"
          component={SelectViceCaptainScreen}
        />
        <Stack.Screen
          name="DisplayTeam"
          component={DisplayTeamScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
