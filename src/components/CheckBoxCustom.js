import React, { useState } from 'react';
import {View, Text, StyleSheet, CheckBox} from 'react-native';

const CheckBoxCustom = ({ val }) => {
  const [isSelected, setSelection] = useState(val);

  return (
    <View style={styles.container}>
      <CheckBox value={isSelected} disabled onValueChange={setSelection} />
    </View>
  );
};
export default CheckBoxCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
