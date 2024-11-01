// App.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import emailjs from '@emailjs/browser';

const EmailSend = () => {
  const [name, setName] = useState('suarj');
  const [email, setEmail] = useState('kr.suraj1602@gmail.com');
  const [message, setMessage] = useState('hii');

  const sendEmail = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send('service_tp30oqp', 'template_ugpzb33', templateParams, '9rznymiAa76cUckWm')
      .then(
        (response) => {
          Alert.alert('Success', 'Email sent successfully');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          Alert.alert('Error', 'Failed to send email. Please try again later.');
          console.error('Email sending error: ', error);
        }
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your message"
        multiline
      />

      <Button title="Send Email" onPress={sendEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default EmailSend;
