import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DisplayTeam = ({navigation, route}) => {
    const {players, captain, vicecaptain} = route.params;

    console.log("Players: ")
    console.log(players)
    console.log()
    console.log("ViceCaptain: ")
    console.log(vicecaptain)
    console.log()
    console.log("Captain: ")
    console.log(captain)
    
  return (
    <View style={styles.container}>
      <Text>DisplayTeam</Text>
    </View>
  );
};
export default DisplayTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
