import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const StartScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post-Op Info</Text>
      <Text style={styles.subtitle}>
        Bridging the gap between hospital care and at-home recovery with intelligent, patient-centered support.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.buttonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>

      <Image 
        source={require('../assets/images/start.png')} // Adjust path as needed
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CB69C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 230,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 2,
  },
  buttonText: {
    color: '#4E7A4C',
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 200,
    position: 'absolute',
    bottom: 220,
  },
});

export default StartScreen;
