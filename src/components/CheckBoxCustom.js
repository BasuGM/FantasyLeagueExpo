import React, { useState } from 'react';
import {View, Text, StyleSheet, CheckBox} from 'react-native';

const CheckBoxCustom = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox value={isSelected} onValueChange={setSelection} />
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
