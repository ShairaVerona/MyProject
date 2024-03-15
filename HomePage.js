import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground source={{ uri: 'https://uploads-ssl.webflow.com/5f6cc9cd16d59d990c8fca33/63ebb4085658346f076e9781_womens-history-month.jpg' }} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Our Home Page</Text>
      <Text style={styles.Text}>Women's Month is more than just a time on the calendar—it is a moment of reflection, celebration, and action. It is a time to honor the achievements of women, raise awareness about gender inequality, and advocate for meaningful change. As we commemorate Women's Month, let us recommit ourselves to the pursuit of gender equality and the realization of a world where all individuals, regardless of gender, can thrive and flourish.</Text>
      <Text style={styles.infoText}>You are logged in!</Text>
      {/* Add any additional content or actions here */}
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Text:{
    fontSize: 16,
    fontWeight: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 100,
  },
});

export default HomePage;
