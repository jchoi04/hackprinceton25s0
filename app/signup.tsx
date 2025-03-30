import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('../')}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Register now!</Text>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#fff"
        value={fullName}
        onChangeText={setFullName}
      />
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
        placeholder="Create your password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={() => router.push('../getting-started/0')}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Google Button (static) */}
      <View style={styles.googleButton}>
        <Text style={styles.googleText}>
          Log in With <Text style={styles.googleLogo}>G</Text>
        </Text>
      </View>

      {/* Already have an account */}
      <Text style={styles.loginPrompt}>
        Already have an account?{' '}
        <Text style={styles.loginNow} onPress={() => router.push('/login')}>
          Login now!
        </Text>
      </Text>

      {/* Character Image */}
      <Image
        source={require('../assets/images/signup.png')} 
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
  registerButton: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
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
    marginTop: 12,
  },
  googleText: {
    color: '#fff',
    fontSize: 16,
  },
  googleLogo: {
    fontWeight: 'bold',
    color: '#fff',
  },
  loginPrompt: {
    marginTop: 20,
    color: '#666',
    fontSize: 14,
  },
  loginNow: {
    fontWeight: 'bold',
    color: '#9CB69C',
  },
  character: {
    width: 150,
    height: 150,
    marginTop: 30,
  },
});

export default Signup;
