import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Step2() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const [date, setDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [complications, setComplications] = useState('');
  const [conditions, setConditions] = useState<string[]>([]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleCheckbox = (condition: string) => {
    setConditions(prev =>
      prev.includes(condition)
        ? prev.filter(item => item !== condition)
        : [...prev, condition]
    );
  };

  const handleContinue = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      router.push('../getting-started/3');
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      setShowDatePicker(false);
    }}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Question 1 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                1. What date was your{'\n'}Coronary Artery Bypass{'\n'}Grafting (CABG) surgery?
              </Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(prev => !prev)}
                style={styles.inputBox}
              >
                <Text style={styles.inputText}>
                  {date ? date.toLocaleDateString() : 'Enter date as MM/DD/YYYY'}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  mode="date"
                  value={date || new Date()}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={(event, selectedDate) => {
                    if (Platform.OS !== 'ios') setShowDatePicker(false);
                    if (selectedDate) setDate(selectedDate);
                  }}
                />
              )}
            </View>

            {/* Question 2 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                2. Did your doctor mention any complications during surgery?
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TextInput
                  placeholder="If yes, please describe."
                  placeholderTextColor="#ffffff44"
                  style={styles.textArea}
                  value={complications}
                  onChangeText={setComplications}
                  multiline
                />
              </ScrollView>
            </View>

            {/* Question 3 */}
            <View style={styles.qaGroup}>
              <Text style={styles.question}>
                3. Do you have any pre-existing conditions?
              </Text>
              {['Diabetes', 'Hypertension', 'Other (list)'].map(condition => (
                <TouchableOpacity
                  key={condition}
                  onPress={() => handleCheckbox(condition)}
                  style={[
                    styles.checkbox,
                    conditions.includes(condition) && styles.checkboxSelected,
                  ]}
                >
                  <Text style={styles.inputText}>
                    {conditions.includes(condition) ? '☑︎' : '☐'}  {condition}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* Continue Button - bottom right */}
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
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContent: {
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
    marginBottom: 18,
    lineHeight: 28,
  },
  inputBox: {
    backgroundColor: '#9CB69C',
    padding: 14,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  inputText: {
    color: '#fff',
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#9CB69C',
    color: '#fff',
    fontSize: 16,
    padding: 14,
    borderRadius: 12,
    minHeight: 50,
    maxHeight: 90,
    width: 300,
    flexGrow: 1,
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
