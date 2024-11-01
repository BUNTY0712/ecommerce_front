import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Text, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const ShortImage = () => {
  const [imageUri, setImageUri] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Function to pick an image from the gallery
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
      setImageUri(result.assets[0].uri);
    }
  };

  // Function to upload the selected image with dummy values
  const uploadImage = async () => {
    if (!imageUri) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", {
      uri: imageUri,
      type: "image/jpeg", // or 'image/png' based on the image type
      name: `upload_${Date.now()}.jpg`, // Unique file name
    });
    formData.append("sender_id", "123"); // Dummy sender_id
    formData.append("receiver_id", "456"); // Dummy receiver_id
    formData.append("message", "This is a dummy message"); // Dummy message
    formData.append("rply_msg", "This is a dummy reply message"); // Dummy reply message

    try {
      const response = await axios.post(
        "http://192.168.29.107:8080/api/v1/message/new-message",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully:", response.data);
      Alert.alert("Success", "Image uploaded successfully.");
    } catch (error) {
      console.error("Error uploading image:", error);
      Alert.alert("Error", "Error uploading image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button
        title={uploading ? "Uploading..." : "Upload Image"}
        onPress={uploadImage}
        disabled={uploading || !imageUri}
      />
      {uploading && <Text style={styles.uploadingText}>Uploading...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  uploadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },
});

export default ShortImage;
