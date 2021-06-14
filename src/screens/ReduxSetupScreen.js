import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addition, substraction } from '../store/actions'

const ReduxSetupScreen = (props) => {
  
  const data = useSelector((state) => state.counter )
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => dispatch(addition())} />
      <Text>{data}</Text>
      <Button title="Substract" onPress={() => dispatch(substraction())} />
    </View>
  );
};
export default ReduxSetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
