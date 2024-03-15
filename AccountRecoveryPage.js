import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const AccountRecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // Perform account recovery with the user's email
    // Replace the console log with your actual account recovery logic
    console.log('Recovering account with email:', email);
    
    // For example, you can display a confirmation message to the user
    alert('Instructions for account recovery have been sent to your email.');
    
    // Navigate back to the Login page after initiating account recovery
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Recovery Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <Button title="Recover Account" onPress={handleRecovery} />
      <Button title="Go Back to Login Page" onPress={() => navigation.navigate('Login')} />
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
  


});

export default AccountRecoveryPage;
