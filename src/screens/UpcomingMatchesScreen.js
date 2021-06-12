import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';

const UpcomingMatchesScreen = () => {
  const [data, setData] = useState(null);

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
        console.log(data);
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
      >
        {/* Top Container  */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 32, fontWeight: 'bold', color: '#04009a'}}>
            {item.event_name}
          </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#125d98'}}>
            {' '}
            {moment(item.match_date).format('ll')}{' '}
          </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#3edbf0'}}>
            {' '}
            {item.match_name}{' '}
          </Text>
        </View>
        {/* Left Container  */}
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginBottom: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 120,
              width: 120,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#3edbf0',
              borderRadius: 10,
            }}
          >
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#7952b3'}}>
              {' '}
              {item.t1_name}{' '}
            </Text>
            <Image
              style={{width: 60, height: 60}}
              source={{uri: item.t1_image}}
            />
          </View>
          {/* Right Container  */}
          <View
            style={{
              marginLeft: 10,
              marginBottom: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 120,
              width: 120,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#3edbf0',
              borderRadius: 10,
            }}
          >
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#7952b3'}}>
              {' '}
              {item.t2_name}{' '}
            </Text>
            <Image
              style={{width: 60, height: 60}}
              source={{uri: item.t2_image}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default UpcomingMatchesScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e8eb',
  },
});
