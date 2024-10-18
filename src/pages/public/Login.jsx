import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const logo = require('../../../assets/Logo.png');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    { email: "isc_mjimenez2021@accitesz.com", password: "TECZAM2021" },
    { email: "isc_jgalvan2021@accitesz.com", password: "TECZAM2021" }
  ];

  const handleLogin = () => {
    const userExists = users.find(
      user => user.email.toLowerCase === email.toLowerCase && user.password === password
    );

    if (userExists) {
      navigation.navigate('Menu');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={logo} 
        style={styles.logo}
      />

      <Text style={styles.title}>Inicia Sesion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesion</Text>
      </TouchableOpacity>

      {/* aun incativo */}
      <Text style={styles.newAccountText}>
        ¿Eres nuevo?{' '}
        
        <Text style={styles.createAccount} onPress={() => navigation.navigate('Test')}>
          Crea tu cuenta
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#6C63FF',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  newAccountText: {
    fontSize: 14,
    color: '#000',
  },
  createAccount: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
});

export default Login;
