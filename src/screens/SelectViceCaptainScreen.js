import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';

const SelectViceCaptainScreen = ({navigation, route}) => {
  const {players, captain} = route.params;

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{
          width: 350,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 0.5,
          borderColor: 'grey',
          margin: 10,
          backgroundColor: '#a7c4bc',
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate('DisplayTeam', {players: players, captain: captain, vicecaptain: item});
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <Image
            style={{width: 60, height: 60}}
            source={{uri: item.team_logo}}
          />
          <View style={{width: '60%'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#03256c'}}>
              {item.short_name}
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#2541b2'}}>
              {item.role}
            </Text>
            <Text style={{fontSize: 14, color: '#2541b2'}}>
              {item.team_short_name}
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#2541b2'}}>
              Cr
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#2541b2'}}>
              {item.event_player_credit}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#a7c4bc',
          height: 60,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#03256c'}}>
          Select Vice-Captain (1.5X Points)
        </Text>
      </View>
      
      <FlatList
        data={players}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default SelectViceCaptainScreen;

const styles = StyleSheet.create({
  container: {
      marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfeeea'
  },
});
