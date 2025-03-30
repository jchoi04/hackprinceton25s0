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

export default function Step5() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const [hasDrain, setHasDrain] = useState<'yes' | 'no' | null>(null);
  const [checkFrequency, setCheckFrequency] = useState('');
  const [walkingPath, setWalkingPath] = useState('');

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
      router.push('/home');
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
            {/* Question 9 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                9. Do you have a drain or{'\n'}dressing that needs cleaning?
              </Text>
              <TouchableOpacity
                style={[
                  styles.button,
                  hasDrain === 'yes' && styles.buttonSelected,
                ]}
                onPress={() => setHasDrain('yes')}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  hasDrain === 'no' && styles.buttonSelected,
                ]}
                onPress={() => setHasDrain('no')}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>

            {/* Question 10 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                10. If so, how often do you{'\n'}need to check your wound?
              </Text>
              <View style={styles.frequencyBox}>
                <Text style={styles.label}>Check:</Text>
                <TextInput
                  placeholder="Enter frequency."
                  placeholderTextColor="#9CB69C"
                  style={styles.input}
                  value={checkFrequency}
                  onChangeText={setCheckFrequency}
                />
              </View>
            </View>

            {/* Question 11 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                11. Have you been given a{'\n'}walking path?
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TextInput
                  placeholder="If so, how often?"
                  placeholderTextColor="#ffffff66"
                  style={styles.textArea}
                  value={walkingPath}
                  onChangeText={setWalkingPath}
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
