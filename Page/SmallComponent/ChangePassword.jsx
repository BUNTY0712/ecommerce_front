import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setEmailData } from '../../Reducers/UiReducer';

const ChangePassword = () => {
  const {emailData} = useSelector((state) => state.ui)
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState('Kenduadih Basti Putki Dhanbad Jharkhand katras more street road koderma');
  const [newAddress, setNewAddress] = useState(address);

  useEffect(() => {
    dispatch(setEmailData({
      ...emailData,
      message: address
    }))
  }, [])
  const handleUpdateAddress = () => {

    setAddress(newAddress); // Update the address
    setModalVisible(false);  // Close the modal
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.addressContainer}>
          <Text style={styles.title}>
            {address}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Updating Address */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Update Address</Text>
            
            {/* TextInput with multiline to behave like textarea */}
            <TextInput
              style={styles.input}
              value={newAddress}
              onChangeText={setNewAddress}
              placeholder="Enter new address"
              multiline={true}   // Enables multiline input
              numberOfLines={4}  // Initial number of lines to display
            />
            
            <View style={styles.buttonContainer}>
              <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
              <Button title="Update" onPress={handleUpdateAddress} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ebebeb',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlignVertical: 'top', // Aligns text to the top, like in textarea
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ChangePassword;
