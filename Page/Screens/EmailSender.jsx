import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const EmailSender = () => {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

   const handleSendEmail = async () => {
    if (!toEmail || !subject || !message) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.29.107:8080/api/v1/user/sendEmail', {
        to_email: toEmail,
        subject,
        message,
      });
console.log("bunty")
      // Assuming your backend returns a success message in the response
      Alert.alert('Success', response.data.message);
      // Clear the input fields
      setToEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      // Check if the error has a response and handle it accordingly
      const errorMessage = error.response 
        ? error.response.data.message || 'Failed to send email.'
        : 'An error occurred while sending the email.';
      Alert.alert('Error', errorMessage);
      console.error('Error sending email:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>To:</Text>
      <TextInput
        style={styles.input}
        value={toEmail}
        onChangeText={setToEmail}
        placeholder="Recipient's email"
      />

      <Text style={styles.label}>Subject:</Text>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={setSubject}
        placeholder="Email subject"
      />

      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Email message"
        multiline
        numberOfLines={4}
      />

      <Button title="Send Email" onPress={handleSendEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default EmailSender;
