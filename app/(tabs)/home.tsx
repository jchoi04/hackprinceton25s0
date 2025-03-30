import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.outerContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.name}>JAVK!</Text>
          </View>

          <TouchableOpacity
            style={styles.profileWrapper}
            onPress={() => router.push('/profile')}
          >
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.profileIcon}
            />
            <Text style={styles.profileName}>JAVK ZUCKERMAN</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.button, styles.pink]}>
            <Text style={styles.buttonText}>Daily Check-in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.green]}>
            <Text style={styles.buttonText}>Support Circle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.pink]}>
            <Text style={styles.buttonText}>Chat with ReadyMedi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.green]}>
            <Text style={styles.buttonText}>Trends</Text>
          </TouchableOpacity>
        </View>

        {/* Character Image */}
        <Image
          source={require('../../assets/images/home.png')}
          style={styles.characterImage}
          resizeMode="contain"
        />
      </ScrollView>

      {/* Bottom Nav */}
      <BottomNav active="home" />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingTop: 60,
    paddingBottom: 120, // space above nav bar
    paddingHorizontal: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 32,
  },
  welcome: {
    fontSize: 24,
    color: '#9CB69C',
    fontWeight: '400',
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#9CB69C',
  },
  profileWrapper: {
    alignItems: 'center',
  },
  profileIcon: {
    width: 48,
    height: 48,
    marginBottom: 4,
  },
  profileName: {
    fontSize: 10,
    color: '#9CB69C',
    textAlign: 'center',
  },
  buttonGroup: {
    width: '100%',
    gap: 16,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  pink: {
    backgroundColor: '#F3B6AA',
  },
  green: {
    backgroundColor: '#9CB69C',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  characterImage: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginTop: 12,
  },
});

export default HomeScreen;
