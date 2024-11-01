import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { setChooseImage } from "../../Reducers/UiReducer";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  // Request permission to access media library
  useEffect(() => {
    const requestPermission = async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "We need access to your media library."
        );
      }
    };
    requestPermission();
  }, []);

  // Function to pick an image
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true, // Request base64 encoding
      });

      if (!result.canceled && result.base64) {
        // const base64Image = `data:image/png;base64,${result.base64}`;
        setSelectedImage(result.uri); // Show image preview
        dispatch(setChooseImage(base64Image)); // Save base64 string to Redux state
      } else {
        Alert.alert("Error", "No base64 data returned.");
      }
    } catch (error) {
      console.error("Image selection error:", error);
    }
  };

  // Function to take a new photo
  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true, // Request base64 encoding
      });

      if (!result.canceled && result.base64) {
        const base64Image = `data:image/png;base64,${result.base64}`;
        setSelectedImage(result.uri); // Show image preview
        dispatch(setChooseImage(base64Image)); // Save base64 string to Redux state
      } else {
        Alert.alert("Error", "No base64 data returned.");
      }
    } catch (error) {
      console.error("Photo capture error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Upload</Text>

      {/* Display selected image */}
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}

      <Button title="Pick an image from gallery" onPress={pickImage} />
      <Button title="Take a photo" onPress={takePhoto} />

      {selectedImage && (
        <Text style={styles.selectedText}>
          Selected Image URI: {selectedImage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  selectedText: {
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },
});

export default UploadImage;
