import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  PanResponder,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Step3() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const [medsStatus, setMedsStatus] = useState<'yes' | 'no' | null>(null);
  const [medications, setMedications] = useState<string[]>([]);

  const medicationOptions = [
    'Aspirin',
    'Beta-blockers (Metoprolol, Carvedilol, etc.)',
    'Statins (Lipitor, Crestor, etc.)',
    'ACE inhibitors (Lisinopril, Ramipril, etc.)',
    'Antiplatelets (Plavix, Brilinta, etc.)',
    'Blood thinners (Warfarin, Eliquis, etc.)',
  ];

  // Animate in on mount
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
      router.push('../getting-started/4');
    });
  };

  // Swipe back to previous screen
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 20,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            router.back(); // back to 2.tsx
          });
        }
      },
    })
  ).current;

  const toggleMedication = (item: string) => {
    setMedications(prev =>
      prev.includes(item)
        ? prev.filter(med => med !== item)
        : [...prev, item]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View
        style={[styles.container, { opacity: fadeAnim }]}
        {...panResponder.panHandlers}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Question 4 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                4. Are you taking blood thinners{'\n'}or other heart medications?
              </Text>

              <TouchableOpacity
                style={[
                  styles.button,
                  medsStatus === 'yes' && styles.buttonSelected,
                ]}
                onPress={() => setMedsStatus('yes')}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  medsStatus === 'no' && styles.buttonSelected,
                ]}
                onPress={() => setMedsStatus('no')}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>

            {/* Question 5 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                5. If so, which of these medications are you taking?
              </Text>
              {medicationOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  onPress={() => toggleMedication(option)}
                  style={[
                    styles.checkbox,
                    medications.includes(option) && styles.checkboxSelected,
                  ]}
                >
                  <Text style={styles.buttonText}>
                    {medications.includes(option) ? '☑︎' : '☐'}  {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* Continue Button */}
        <TouchableOpacity onPress={handleContinue} style={styles.floatingButton}>
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
  button: {
    backgroundColor: '#9CB69C',
    paddingVertical: 14,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonSelected: {
    backgroundColor: '#739c73',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
