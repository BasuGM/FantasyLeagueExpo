import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';

const SelectPlayers = () => {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const access_token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm1vYmlsZV9udW1iZXIiOiI5MDAwMzI0MjM0IiwiaXNUZW1wVXNlciI6ZmFsc2UsInRlYW1fbmFtZSI6IkZqZ2tpIiwiaWF0IjoxNjIzNTAwNzAyLCJleHAiOjEwMjYzNTAwNzAyLCJhdWQiOiIxMiIsImlzcyI6IkxlYWd1ZSBYIn0.40ZTfIvkGhfrL5t5x3ACaAjVAVAW9TViVj-SCeDIiSc';

    // http://15.206.110.130:5001/matches/upcoming-matches

    // http://15.206.110.130:5001/squad/players?match_id=6971

    axios
      .get(`http://15.206.110.130:5001/squad/players?match_id=6440`, {
        headers: {
          'x-access-token': `${access_token}`,
        },
      })
      .then((res) => {
        //   console.log(res.data);
        setPlayers(res.data);
        console.log(players);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{
          width: 300,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 0.5,
          borderColor: 'grey',
          margin: 10,
          backgroundColor: '#77acf1',
          borderRadius: 10,
        }}
        onPress={() => console.log(item.id)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
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
  },
});
