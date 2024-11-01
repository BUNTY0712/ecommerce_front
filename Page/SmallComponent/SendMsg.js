import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker"; // Import image picker

const SendMsg = () => {
  const backendUrl = "http://192.168.29.107:8080/api/v1/message/new-message";
  const { senderId, receiverId } = useSelector((state) => state.ui);
  const [imageUri, setImageUri] = useState(null);
  const [usermessage, setUserMessage] = useState("");
  const [uploadstatus, setUploadStatus] = useState("false");

  const pickImage = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "We need access to your media library.");
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Set selected image URI
      console.log("Picked image URI: ", result.assets[0].uri); // Debug log for image URI
    }
  };

  const handleSendMessage = async () => {
    if (!usermessage && !imageUri) {
      Alert.alert("Error", "Please enter a message or select an image");
      return;
    }

    const formData = new FormData();

    // Append message data
    formData.append("message", usermessage);
    formData.append("sender_id", "1");
    formData.append("receiver_id", "2"); // Change this to the actual receiver ID

    // Append image if available
    if (imageUri) {
      formData.append("file", {
        uri: imageUri,
        type: "image/jpeg", // Set appropriate MIME type based on the image type
        name: `upload_${Date.now()}.jpg`, // Unique file name
      });
    } else {
      console.log("Image URI is null");
    }

    try {
      const response = await axios.post(`${backendUrl}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure multipart form data is set
        },
      });

      const data = response.data;
      console.log("Response Data: ", data);
      setUserMessage("");
      setImageUri(null); // Clear image after sending
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleUpload = () => {
    setUploadStatus("true");
  };

  return (
    <View style={styles.container}>
      {uploadstatus === "true" ? (
        <View style={styles.upload}>
          <Button title="Pick an Image" onPress={pickImage} />
        </View>
      ) : null}

      {/* File upload button */}
      <TouchableOpacity style={styles.plusContainer}>
        <Text onPress={() => handleUpload()} style={styles.plusDesign}>
          +
        </Text>
      </TouchableOpacity>

      <View style={styles.send}>
        <TextInput
          value={usermessage}
          onChangeText={(text) => setUserMessage(text)}
          style={styles.input}
          placeholder="Type your message..."
        />
      </View>

      <TouchableOpacity
        onPress={() => handleSendMessage()}
        style={styles.sendButton}
      >
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  upload: {
    zIndex: 33,
    position: "absolute",
    bottom: 55,
  },
  container: {
    flexDirection: "row", // Arrange items in a row
    backgroundColor: "white",
    padding: 10,
    alignItems: "center", // Center items vertically
  },
  plusContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  plusDesign: {
    fontSize: 25,
  },
  send: {
    flex: 6, // Adjust flex as needed
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sendButton: {
    flex: 1, // Adjust flex as needed
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007BFF", // Button background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SendMsg;
