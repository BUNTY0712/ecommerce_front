import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Dashboard")}
        style={styles.backSection}
      >
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Mohit <View style={styles.dot}></View>{" "}
        </Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.media}>
        <MaterialIcons name="folder-open" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Row direction to align items horizontally
    flex: 1, // Take up the full screen
    padding: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  backsection: {
    flex: 0.2, // SideBar takes up 2/10 of the width
    paddingTop: 5,
  },
  titleContainer: {
    flex: 2,
  },
  title: {
    fontSize: 20,
  },
  space: {
    flex: 0,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: "green",
    borderRadius: 12.5,
    marginBottom: 3,
  },
  //   container: {
  //     backgroundColor: "white",
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#ddd",
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     paddingHorizontal: 16, // Adjust as needed
  //     paddingVertical: 8, // Adjust as needed
  //   },
  //   chatSection: {
  //     height: 60, // Adjust the height as needed
  //     justifyContent: "center", // Center icon vertically
  //   },
  //   titleContainer: {
  //     flex: 1,
  //     alignItems: "center", // Center text horizontally
  //   },
  //   title: {
  //     fontSize: 18, // Adjust as needed
  //     fontWeight: "bold", // Optional: Make the title bold
  //   },
});

export default ChatHeader;
