import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';

const DisplayTeam = ({navigation, route}) => {
  const {players, captain, vicecaptain} = route.params;

  let tempArray = players;

  // for (let i = 0; i < tempArray.length; i++) {
  //   if (captain.id === tempArray[i].id) {
  //     tempArray = tempArray.splice(i);
  //     ToastAndroid.show(`Player Removed: ${captain.name}`, ToastAndroid.SHORT);
  //     // return;
  //   }
  // }

  // for (let i = 0; i < tempArray.length; i++) {
  //   if (vicecaptain.id === tempArray[i].id) {
  //     tempArray = tempArray.splice(i);
  //     ToastAndroid.show(`Player Removed: ${vicecaptain.name}`, ToastAndroid.SHORT);
  //     // return;
  //   }
  // }

  // console.log("Players: ")
  // console.log(players)
  // console.log()
  // console.log("ViceCaptain: ")
  // console.log(vicecaptain)
  // console.log()
  // console.log("Captain: ")
  // console.log(captain)

  const renderItem = (item) => {
    return (
      <View>
        { item.id !== captain.id && item.id !== vicecaptain.id &&
          <TouchableOpacity
            style={{
              width: 350,
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: 'grey',
              margin: 10,
              backgroundColor: '#00adb5',
              borderRadius: 10,
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
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#aad8d3'}}
                >
                  {item.short_name}
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: '#ffdf6b'}}
                >
                  {item.role}
                </Text>
                <Text style={{fontSize: 14, color: '#8ab6d6'}}>
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
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: '#2541b2'}}
                >
                  Cr
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: '#2541b2'}}
                >
                  {item.event_player_credit}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      </View>
    );
  };

  const renderCaptain = (item) => {
    return (
      <TouchableOpacity
        style={{
          width: 250,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 0.5,
          borderColor: 'grey',
          margin: 10,
          backgroundColor: '#00adb5',
          borderRadius: 10,
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
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#aad8d3'}}>
              {item.short_name}
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ffdf6b'}}>
              {item.role}
            </Text>
            <Text style={{fontSize: 14, color: '#8ab6d6'}}>
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
        <Text style={{fontSize: 32, fontWeight: 'bold', color: '#393e46'}}>
          Final Team
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{fontSize: 48, fontWeight: 'bold', color: '#393e46'}}>
          {'  '}C:
        </Text>
        {renderCaptain(captain)}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{fontSize: 48, fontWeight: 'bold', color: '#393e46'}}>
          VC:
        </Text>
        {renderCaptain(vicecaptain)}
      </View>

      <Text style={{fontSize: 36, fontWeight: 'bold', color: '#393e46'}}>
        Other Players:
      </Text>
      <FlatList
        data={players}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default DisplayTeam;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee'
  },
});
