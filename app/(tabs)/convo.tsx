import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav'; // Importing BottomNav component

export default function Convo() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Handle sending message (could add to a chat history, etc.)
    setMessage('');
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Header and chat display */}
      <View style={styles.header}>
        <Text style={styles.title}>Speaking with: ReadyMedi</Text>
        <Image source={require('../../assets/images/chat.png')} style={styles.image} />
      </View>

      <ScrollView contentContainerStyle={styles.chatContainer}>
        {/* Chat messages */}
        <View style={styles.chatBubble}>
          <Text style={styles.chatText}>Hi ReadyMedi!</Text>
        </View>
        <View style={styles.chatBubbleUser}>
          <Text style={styles.chatText}>Hi JAVK!</Text>
        </View>
        <View style={styles.chatBubble}>
          <Text style={styles.chatText}>What's today's plan?</Text>
        </View>
        <View style={styles.chatBubbleUser}>
          <Text style={styles.chatText}>Today, make sure you get lot's of rest and take [] mg of [medication name].</Text>
        </View>
      </ScrollView>

      {/* Message input */}
      <View style={styles.messageInput}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Enter a message"
          placeholderTextColor="#ffffff88"
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNav active="chat" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  backButton: {
    marginTop: 40,
  },
  backText: {
    fontSize: 20,
    color: '#9CB69C',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9CB69C',
  },
  image: {
    marginTop: 20,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  chatContainer: {
    marginTop: 40,
    flexGrow: 1,
    paddingBottom: 100,
  },
  chatBubble: {
    backgroundColor: '#9CB69C',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    alignSelf: 'flex-start',
    width: 'auto',
  },
  chatBubbleUser: {
    backgroundColor: '#739c73',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    alignSelf: 'flex-end',
    width: 'auto',
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
  },
  messageInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#9CB69C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginLeft: 10,
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
  },
});
