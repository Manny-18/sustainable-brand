import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondPage = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Second Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default SecondPage;
