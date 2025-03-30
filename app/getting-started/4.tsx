import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Step4() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const [frequency, setFrequency] = useState('');
  const [incisionLocations, setIncisionLocations] = useState<string[]>([]);
  const [woundInstructions, setWoundInstructions] = useState('');

  const toggleIncision = (location: string) => {
    setIncisionLocations(prev =>
      prev.includes(location)
        ? prev.filter(item => item !== location)
        : [...prev, location]
    );
  };

  const incisionOptions = [
    'Chest (Sternal incision)',
    'Leg (For vein graft)',
    'Arm (For radial artery graft)',
  ];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleContinue = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      router.push('../getting-started/5');
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Question 6 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                6. Please indicate when and{'\n'}how often each medication{'\n'}should be taken.
              </Text>
              <View style={styles.frequencyBox}>
                <Text style={styles.label}>Aspirin:</Text>
                <TextInput
                  placeholder="Enter frequency."
                  placeholderTextColor="#9CB69C"
                  style={styles.input}
                  value={frequency}
                  onChangeText={setFrequency}
                />
              </View>
            </View>

            {/* Question 7 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>7. Where was your incision?</Text>
              {incisionOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  onPress={() => toggleIncision(option)}
                  style={[
                    styles.checkbox,
                    incisionLocations.includes(option) && styles.checkboxSelected,
                  ]}
                >
                  <Text style={styles.buttonText}>
                    {incisionLocations.includes(option) ? '☑︎' : '☐'}  {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Question 8 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                8. Did your doctor provide{'\n'}wound care instructions?
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TextInput
                  placeholder="If yes, please list the steps."
                  placeholderTextColor="#ffffff66"
                  style={styles.textArea}
                  value={woundInstructions}
                  onChangeText={setWoundInstructions}
                  multiline
                />
              </ScrollView>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* Continue Button */}
        <TouchableOpacity
          onPress={handleContinue}
          style={styles.floatingButton}
        >
          <Text style={styles.floatingButtonText}>Continue</Text>
        </TouchableOpacity>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  scroll: {
    paddingTop: 60,
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qaGroup: {
    marginBottom: 60,
    width: '100%',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    color: '#9CB69C',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 28,
  },
  frequencyBox: {
    backgroundColor: '#9CB69C',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
  },
  checkbox: {
    backgroundColor: '#9CB69C',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    width: '100%',
  },
  checkboxSelected: {
    backgroundColor: '#739c73',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#9CB69C',
    color: '#fff',
    fontSize: 16,
    padding: 14,
    borderRadius: 12,
    minHeight: 60,
    maxHeight: 90,
    width: 300,
    flexGrow: 1,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    backgroundColor: '#9CB69C',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
