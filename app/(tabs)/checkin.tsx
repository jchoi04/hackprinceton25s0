import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav'; // Importing BottomNav component

const Checkin = () => {
  const router = useRouter();

  // State to store the user's feeling and checklist status
  const [feeling, setFeeling] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<{ aspirin: boolean; walk: boolean }>({
    aspirin: false,
    walk: false,
  });

  // Handle changing the feeling
  const handleFeelingChange = (value: string) => {
    setFeeling(value);
  };

  // Handle toggling the checklist items
  const handleCheck = (item: 'aspirin' | 'walk') => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  // Check if the user is ready to submit the form
  const isFormValid = feeling && (checkedItems.aspirin || checkedItems.walk);

  // Route to the next page when the form is ready
  const handleSubmit = () => {
    if (isFormValid) {
      router.push('../checkin-over'); // Adjust this path if needed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s check in!</Text>
      <Text style={styles.question}>How are you feeling today?</Text>

      <View style={styles.buttonsContainer}>
        {['Bad', 'In-between', 'Good'].map(option => (
          <TouchableOpacity
            key={option}
            style={[styles.feelingButton, feeling === option && styles.feelingButtonSelected]}
            onPress={() => handleFeelingChange(option)}
          >
            <Text style={styles.feelingButtonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.checklistTitle}>Checklist</Text>
      <View style={styles.checklistContainer}>
        <View style={styles.checklistItem}>
          <CheckBox
            value={checkedItems.aspirin}
            onValueChange={() => handleCheck('aspirin')}
          />
          <Text style={styles.checklistText}>Take 10 mg of aspirin</Text>
        </View>
        <View style={styles.checklistItem}>
          <CheckBox
            value={checkedItems.walk}
            onValueChange={() => handleCheck('walk')}
          />
          <Text style={styles.checklistText}>Walk for 10 minutes</Text>
        </View>
      </View>

      {/* Add image slot */}
      <Image
        source={require('../../assets/images/checkin.png')} // Add your image here
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={[styles.submitButton, !isFormValid && styles.submitButtonDisabled]}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <BottomNav active="check-in" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9CB69C',
    textAlign: 'center',
  },
  question: {
    fontSize: 20,
    color: '#9CB69C',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  feelingButton: {
    backgroundColor: '#F3B6AA',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  feelingButtonSelected: {
    backgroundColor: '#739c73',
  },
  feelingButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  checklistTitle: {
    fontSize: 24,
    color: '#9CB69C',
    marginVertical: 20,
  },
  checklistContainer: {
    marginVertical: 10,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checklistText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#9CB69C',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#9CB69C',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#d1e5d0',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Checkin;
