import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import FetchAllUser from "./SmallComponent/FetchAllUser";

const UserMessage = () => {
  return (
    <View>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.images}
          source={{
            uri: "https://atypicalsoftware.com/images/logo.png",
          }}
          resizeMode="contain" // Ensures the image fits within its container without being cropped
        />
      </View>
      <FetchAllUser />
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: "100%", // Adjust the width to 100% to fill the container
    height: undefined, // Allow the height to adjust automatically based on aspect ratio
    aspectRatio: 8, // Adjust aspect ratio to match the original image ratio
    textAlign: "center",
    paddingRight: 20,
    // Shadow properties
    shadowColor: "red", // Shadow color
    shadowOffset: { width: 0, height: 5 }, // Shadow offset (width and height)
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Elevation for Android shadow
  },
  imagecontainer: {
    width: 350,
    height: 50,
    marginTop: 10,
    paddingRight: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the image within the container
  },
});

export default UserMessage;
