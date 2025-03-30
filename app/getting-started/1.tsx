import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Step1() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const [selected, setSelected] = useState(false);

  // Fade in on mount
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleManualEnter = () => {
    setSelected(true);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      router.push('../getting-started/2');
    });
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.question}>
        How would you like{'\n'}to input [your/the{'\n'}patient’s] data?
      </Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={handleManualEnter}
          style={[
            styles.button,
            selected && styles.buttonSelected
          ]}
        >
          <Text style={styles.buttonText}>Manually Enter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>[COMING SOON] Upload photo</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  question: {
    fontSize: 24,
    color: '#9CB69C',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 34,
  },
  buttonGroup: {
    width: '100%',
    gap: 20,
  },
  button: {
    backgroundColor: '#9CB69C',
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
  },
  buttonSelected: {
    backgroundColor: '#739c73',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
