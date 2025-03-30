import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  // Function to handle Sign Out
  const handleSignOut = () => {
    router.push('/'); // Navigate back to the home page (index.tsx)
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Profile Details */}
      <View style={styles.profileSection}>
        <Text style={styles.name}>Javk Zuckerman</Text>
        <Text style={styles.role}>Patient</Text>
        <Text style={styles.accessDate}>Access Since: March 30, 2025</Text>

        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          {/* Placeholder for the Profile Picture */}
          <Image
            source={require('../assets/images/profile.png')} // Add profile image here
            style={styles.profileImage}
          />
        </View>

        {/* Contact Information */}
        <Text style={styles.contact}>Phone Number: XXX-XXX-XXXX</Text>
        <Text style={styles.contact}>Email: XXXXXXX@gmail.com</Text>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 24,
    color: '#9CB69C',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F3B6AA',
  },
  role: {
    fontSize: 18,
    color: '#9CB69C',
    marginBottom: 12,
  },
  accessDate: {
    fontSize: 14,
    color: '#F3B6AA',
    marginBottom: 24,
  },
  profileImageContainer: {
    borderRadius: 50,
    backgroundColor: '#F3B6AA',
    padding: 20,
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  contact: {
    fontSize: 16,
    color: '#9CB69C',
    marginBottom: 8,
  },
  signOutButton: {
    backgroundColor: '#F3B6AA',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    marginTop: 24,
  },
  signOutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
});

export default Profile;
