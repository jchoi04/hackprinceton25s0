import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const NewUserScreen = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.backButton}>← Back</Text>
      </TouchableOpacity>

      {/* Form Fields */}
      <Text style={styles.header}>Please input data for the new user.</Text>

      <View style={styles.form}>
        {/* First Name */}
        <Text style={styles.fieldTitle}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        {/* Last Name */}
        <Text style={styles.fieldTitle}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        {/* Relationship */}
        <Text style={styles.fieldTitle}>Relationship</Text>
        <TextInput
          style={styles.input}
          placeholder="Caretaker/Personal Attendant"
          value={relationship}
          onChangeText={setRelationship}
        />

        {/* Phone Number */}
        <Text style={styles.fieldTitle}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="###-###-####"
          value={phone}
          onChangeText={setPhone}
        />

        {/* Email */}
        <Text style={styles.fieldTitle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="#####@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Add User Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/(tabs)/home')}
      >
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
  },
  backButton: {
    fontSize: 18,
    color: '#9CB69C',
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    color: '#9CB69C',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginBottom: 40,
  },
  fieldTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9CB69C',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: '#4E7A4C',
    opacity: 0.7,
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

export default NewUserScreen;
