import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Step0() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get Started</Text>
      <Text style={styles.question}>Who are you using Post-Op info for?</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push('../getting-started/1')}
      >
        <Text style={styles.optionText}>For Myself</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push('../getting-started/1')}
      >
        <Text style={styles.optionText}>Caregiver/Personal Assistant</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/images/getting-started.png')}
        style={styles.character}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#9CB69C',
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 20,
    color: '#9CB69C',
    textAlign: 'center',
    marginBottom: 24,
  },
  option: {
    backgroundColor: '#9CB69C',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: '100%',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  character: {
    width: 160,
    height: 160,
    marginTop: 40,
  },
});