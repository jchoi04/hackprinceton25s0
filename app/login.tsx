import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('../')}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Welcome back!</Text>

      {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#fff"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Forgot Password - Static */}
      <Text style={styles.forgot}>Forgot your password?</Text>

      {/* Login button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('../getting-started/0')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Google login - Static */}
      <View style={styles.googleButton}>
        <Text style={styles.googleText}>
          Or, log in with <Text style={styles.googleG}>G</Text>
        </Text>
      </View>

      {/* Register Now */}
      <Text style={styles.registerPrompt}>
        Don’t have an account?{' '}
        <Text style={styles.registerNow} onPress={() => router.push('/signup')}>
          Register now!
        </Text>
      </Text>

      {/* Character Image */}
      <Image
        source={require('../assets/images/login.png')} 
        style={styles.character}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 32,
    color: '#9CB69C',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#9CB69C',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#9CB69C',
    width: '100%',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 15,
    color: '#fff',
    fontSize: 16,
  },
  forgot: {
    color: '#9CB69C',
    alignSelf: 'flex-end',
    marginBottom: 20,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  loginText: {
    color: '#9CB69C',
    fontSize: 18,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#9CB69C',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  googleText: {
    color: '#fff',
    fontSize: 16,
  },
  googleG: {
    fontWeight: 'bold',
    color: '#fff',
  },
  registerPrompt: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  registerNow: {
    fontWeight: 'bold',
    color: '#9CB69C',
  },
  character: {
    width: 150,
    height: 150,
    marginTop: 30,
  },
});

export default Login;
