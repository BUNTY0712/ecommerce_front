import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import Header from "../ReusableComponent/Header";

const ProductCreate = () => {
  const backendUrl = "http://192.168.29.107:8080/api/v1/product/create-product";
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productRatingCount, setProductRatingCount] = useState("");
  const [productActualPrice, setProductActualPrice] = useState("");
  const [productDiscountPrice, setProductDiscountPrice] = useState("");
  const [productDeliveryBy, setProductDeliveryBy] = useState("");
  const [productCategory, setProductCategory] = useState(""); // Add category field
  const [userId, setUserId] = useState("");
  const [imageUri, setImageUri] = useState(null); // For storing picked image URI

  // Image picker function
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

  const handleSubmit = async () => {
    // Create FormData object to hold product details and image file
    const formData = new FormData();

    formData.append("productTitle", productTitle);
    formData.append("productPrice", productPrice);
    formData.append("productRating", productRating);
    formData.append("productRatingCount", productRatingCount);
    formData.append("productActualPrice", productActualPrice);
    formData.append("productDiscountPrice", productDiscountPrice);
    formData.append("productDeliveryBy", productDeliveryBy);
    formData.append("productCategory", productCategory); // Include category
    formData.append("userId", userId);

    // Append image file if it was picked
    if (imageUri) {
      const fileType = imageUri.split(".").pop();
      formData.append("image", {
        uri: imageUri,
        type: `image/${fileType}`,
        name: `product_image_${Date.now()}.${fileType}`,
      });
    } else {
      console.log("No image selected");
      return;
    }

    try {
      const response = await axios.post(backendUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Send as multipart/form-data
        },
      });

      const data = response.data;
      console.log("Product created:", data);
      Alert.alert("Success", "Product created successfully");
      // Reset form
      setProductTitle("");
      setProductPrice("");
      setProductRating("");
      setProductRatingCount("");
      setProductActualPrice("");
      setProductDiscountPrice("");
      setProductDeliveryBy("");
      setProductCategory("");
      setUserId("");
      setImageUri(null);
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
  <Header/>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Create Product</Text>

      <TextInput
        style={styles.input}
        placeholder="Product Title"
        value={productTitle}
        onChangeText={setProductTitle}
      />
      <Button title="Pick Image" onPress={pickImage} />
      <Text>{imageUri ? "Image selected" : "No image selected"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Product Rating"
        value={productRating}
        onChangeText={setProductRating}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Product Rating Count"
        value={productRatingCount}
        onChangeText={setProductRatingCount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Product Actual Price"
        value={productActualPrice}
        onChangeText={setProductActualPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Product Discount Price"
        value={productDiscountPrice}
        onChangeText={setProductDiscountPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Delivery By"
        value={productDeliveryBy}
        onChangeText={setProductDeliveryBy}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Category"
        value={productCategory}
        onChangeText={setProductCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
      />

      <Button title="Create Product" onPress={handleSubmit} />
      </ScrollView>
        </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default ProductCreate;
