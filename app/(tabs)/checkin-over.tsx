import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav'; // Importing BottomNav component

const AwesomePage = () => {
  const router = useRouter();

  const handleSupportCircle = () => {
    router.push('/support'); // Routes to the support page
  };

  const handleChatReadyMedi = () => {
    router.push('../chat'); // Routes to the chat page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Awesome!</Text>
      <Text style={styles.subHeader}>You’re done for the day!</Text>

      <Text style={styles.checklistHeader}>Check these out:</Text>

      {/* Image Placeholder */}
      <Image
        source={require('../../assets/images/chat.png')} // Adjust with the actual path to your image
        style={styles.characterImage}
        resizeMode="contain"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSupportCircle}>
          <Text style={styles.buttonText}>Support Circle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleChatReadyMedi}>
          <Text style={styles.buttonText}>Chat with ReadyMedi</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNav active="home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 36,
    color: '#9CB69C',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 24,
    color: '#9CB69C',
    marginBottom: 40,
    textAlign: 'center',
  },
  checklistHeader: {
    fontSize: 20,
    color: '#9CB69C',
    marginBottom: 20,
    textAlign: 'center',
  },
  characterImage: {
    width: 160,
    height: 160,
    marginBottom: 40,
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#9CB69C',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default AwesomePage;
