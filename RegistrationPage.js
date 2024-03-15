import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo/vector-icons

const RegistrationPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleRegistration = () => {
    // Perform user registration with username, email, and password
    // Replace the console log with your actual registration logic
    console.log('Registering with username:', username, 'email:', email, 'and password:', password);
    
    // For example, you can navigate to the Home page after successful registration
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/429908251_715687514099132_6513686199637883884_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG_jOgN-PrCKhEYohMDKhE_WxldeZDZwNRbGV15kNnA1CDKob74qcVcEN-9N5QbArKTPSrYzclXihDvgnbi04j8&_nc_ohc=KilggjuxL2QAX-NSIVM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTV3NNsvX5ohbOzszE6fB6hbZ07_ua5ZMDeh0oKNwxY-Q&oe=66132453'}} style={styles.logo} />
      <Text style={styles.heading}>Register Now!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
        autoCompleteType="username"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
          autoCompleteType="password"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Ionicons name="md-eye-off" size={24} color="black" style={styles.eyeIcon} />
          ) : (
            <Ionicons name="md-eye" size={24} color="black" style={styles.eyeIcon} />
          )}
        </TouchableOpacity>
      </View>
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change background color as needed
  },
  logo: {
    width: 100, // Adjust the width of the logo as needed
    height: 100, // Adjust the height of the logo as needed
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
});

export default RegistrationPage;
