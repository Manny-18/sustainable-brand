import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomePage = () => {
  const companyData = {
    name: 'Sus-Tech',
    logoUrl: 'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg', 
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: companyData.logoUrl }} style={styles.logo} resizeMode="contain" />
      <Text style={styles.companyName}>{companyData.name}</Text>
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
  logo: {
    width: 200,
    height: 200,
  },
  companyName: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default HomePage;
