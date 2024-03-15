import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/05/64/32/22/360_F_564322287_nwugtmoc8oZ0Ia6VVruvHCBLqrGpqHaU.jpg' }} style={styles.background}>
      <View style={styles.container}>
      <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/429908251_715687514099132_6513686199637883884_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG_jOgN-PrCKhEYohMDKhE_WxldeZDZwNRbGV15kNnA1CDKob74qcVcEN-9N5QbArKTPSrYzclXihDvgnbi04j8&_nc_ohc=KilggjuxL2QAX-NSIVM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTV3NNsvX5ohbOzszE6fB6hbZ07_ua5ZMDeh0oKNwxY-Q&oe=66132453'}} style={styles.logo} />
        <Text style={styles.heading}>Welcome Team Gwapa!</Text>
        <Text style={styles.subheading}>Be your own kind of beautiful.</Text>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
          <Button title="Register" onPress={() => navigation.navigate('Registration')} />
        </View>
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
    backgroundColor: 'rgba(0,0,0,0.5)', // Add background color or use transparent color
  },
  logo: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Change text color as needed
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold', // Corrected syntax
    color: '#fff', // Change text color as needed
    textAlign: 'center', // Center-align the text
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%', // Adjusted width
    paddingHorizontal: 20,
    marginTop: 50,
  },
});

export default LandingPage;
