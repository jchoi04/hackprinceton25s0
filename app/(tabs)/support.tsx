import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav'; // Adjust path based on file structure

const SupportScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>Support Circle</Text>
        <Text style={styles.subtitle}>View your connected caregivers and family at a glance.</Text>
      </View>

      {/* User Icons */}
      <View style={styles.userWrapper}>
        <View style={styles.userIcon}>
          <Image
            source={require('../../assets/images/profile.png')} 
            style={styles.iconImage}
          />
        </View>
        <View style={styles.userIcon}>
          <Image
            source={require('../../assets/images/profile.png')} 
            style={styles.iconImage}
          />
        </View>
      </View>

      {/* "Add another user" button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/new-user')}
      >
        <Text style={styles.addButtonText}>Add another user</Text>
      </TouchableOpacity>

      {/* Bottom navigation */}
      <BottomNav active="support" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  headerWrapper: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#9CB69C',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#9CB69C',
    textAlign: 'center',
    marginTop: 8,
  },
  userWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 40,
  },
  userIcon: {
    backgroundColor: '#F3B6AA', // Pink background for the icon circle
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 40,
    height: 40,
    tintColor: 'black', // Making the icon black
  },
  addButton: {
    backgroundColor: '#9CB69C',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default SupportScreen;
