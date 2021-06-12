import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

const UpcomingMatchesScreen = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const access_token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm1vYmlsZV9udW1iZXIiOiI5MDAwMzI0MjM0IiwiaXNUZW1wVXNlciI6ZmFsc2UsInRlYW1fbmFtZSI6IkZqZ2tpIiwiaWF0IjoxNjIzNTAwNzAyLCJleHAiOjEwMjYzNTAwNzAyLCJhdWQiOiIxMiIsImlzcyI6IkxlYWd1ZSBYIn0.40ZTfIvkGhfrL5t5x3ACaAjVAVAW9TViVj-SCeDIiSc';
    
      axios
        .get('http://15.206.110.130:5001/matches/upcoming-matches', {
          headers: {
            'x-access-token': `${access_token}`,
          },
        })
        .then((res) => {
            console.log(res.data.matches.cricket);
            setData(res.data.matches.cricket);
            console.log(data)
        })
        .catch((error) => {
          console.error(error);
        });          
    }, [])

    const renderItem = (item) => {
        return (
            <View>
                <Text> {item.event_name} </Text>
                <Text> {item.match_date} </Text>
                <Text> {item.match_name} </Text>

                <Text> {item.t1_name} </Text>
                <Text> {item.t2_name} </Text>
            </View>
        )
    }
  
  return (
    <View style={styles.container}>
        <FlatList 
            data={data}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.id}
        />
    </View>
  );
};
export default UpcomingMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
