import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import {AntDesign} from '@expo/vector-icons';

const SelectPlayers = ({navigation, route}) => {
  const [players, setPlayers] = useState(null);
  const [isSelected, setSelection] = useState();
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [teamPlayers, setTeamPlayers] = useState([])

  const {id} = route.params;

  useEffect(() => {
    const access_token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm1vYmlsZV9udW1iZXIiOiI5MDAwMzI0MjM0IiwiaXNUZW1wVXNlciI6ZmFsc2UsInRlYW1fbmFtZSI6IkZqZ2tpIiwiaWF0IjoxNjIzNTAwNzAyLCJleHAiOjEwMjYzNTAwNzAyLCJhdWQiOiIxMiIsImlzcyI6IkxlYWd1ZSBYIn0.40ZTfIvkGhfrL5t5x3ACaAjVAVAW9TViVj-SCeDIiSc';

    axios
      .get(`http://15.206.110.130:5001/squad/players?match_id=${id}`, {
        headers: {
          'x-access-token': `${access_token}`,
        },
      })
      .then((res) => {
        setPlayers(res.data);
        // console.log(players);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItem = (item) => {
    const addPlayer = () => {
      let tempArray = selectedPlayers;

      for (let i = 0; i < tempArray.length; i++) {
        if (item.id === tempArray[i].id) {

          // console.warn(`Player Already Exists`)
          ToastAndroid.show(`Player Already Exists`, ToastAndroid.SHORT);
          return;
        
        }
      }

      setSelectedPlayers([...selectedPlayers, {id: item.id, name: item.name}]);
      ToastAndroid.show(`Player Added: ${item.name}`, ToastAndroid.SHORT);
      // console.log(selectedPlayers);
    };

    const removePlayer = () => {
      let tempArray = selectedPlayers;
      // console.log(`Remove Player: ${item.id}`);

      for (let i = 0; i < tempArray.length; i++) {
        if (item.id === tempArray[i].id) {

          // console.log(tempArray[i].id + ': ' + tempArray[i].name)
          setSelectedPlayers(tempArray.splice(i));
          // console.warn(`Player Removed: ${item.name}`)
          ToastAndroid.show(`Player Removed: ${item.name}`, ToastAndroid.SHORT);
          return;
        
        }
      }

      ToastAndroid.show(`Player Doesn't Exist`, ToastAndroid.SHORT);
      // console.warn("Player Doesn't Exist");
    };

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
          backgroundColor: '#b2b8a3',
          borderRadius: 10,
        }}
        onPress={() => {
          removePlayer();
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
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                backgroundColor: '#dddddd',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setSelection(!isSelected);
                addPlayer();
              }}
            >
              <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const addPlayersToArray = () => {
    
    let tempArray = selectedPlayers;
    let tempArray2 = players;

    let finArray = [];

    for (let i = 0; i < tempArray.length; i++) {
      tempArray[i].id;

      for (let j = 0; j < tempArray2.length; j++) {
        if (tempArray[i].id == tempArray2[j].id) {
          finArray = [...finArray, tempArray2[j]];
          // console.log(tempArray2[j])
        }
      }
    }

    return finArray
    // console.log(finArray);

  }

  const assignRolesForPlayers = () => {

    let tempArray = addPlayersToArray()
    // console.log(tempArray)

    let noOfBatsman = 0;
    let noOfBowlers = 0;
    let noOfWicketKeepers = 0;
    let noOfAllRounders = 0;

    for (let i = 0; i < tempArray.length; i++) {
      switch (tempArray[i].role) {
        case 'Batsman':
          noOfBatsman++;
          break;
        case 'Wicket-Keeper':
          noOfWicketKeepers++;
          break;
        case 'All-Rounder':
          noOfAllRounders++;
          break;
        case 'Bowler':
          noOfBowlers++;
          break;
        default:
          break;
      }
    }

    console.log(`${noOfBatsman} ${noOfBowlers} ${noOfWicketKeepers} ${noOfAllRounders} `)
  };

  const checkForRules = () => {
    let tempArray = selectedPlayers;

    // const playerCount = tempArray.length;

    // console.warn(
    //   `You've ${playerCount} players. You need ${11 - playerCount} more.`
    // );

    assignRolesForPlayers();

    for (let i = 0; i < tempArray.length; i++) {
      console.log(`${tempArray[i].id} ${tempArray[i].name}`);
    }

    console.log(`\n`);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#b2b8a3',
          height: 60,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{fontSize: 32, fontWeight: 'bold', color: '#03256c'}}>
          Select Players
        </Text>
      </View>
      <FlatList
        data={players}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 50,
          right: 30,
          borderRadius: 50,
          backgroundColor: '#fff5eb',
        }}
        onPress={() => {
          checkForRules();
        }}
      >
        <AntDesign name="pluscircleo" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default SelectPlayers;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff5eb',
  },
});
