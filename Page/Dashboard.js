import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SideBar from "./ReusableComponent/SideBar";
import UserMessage from "./UserMessage";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sideBar}>
        <SideBar />
      </View>
      <View style={styles.mainContent}>
        <UserMessage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Row direction to align items horizontally
    flex: 1, // Take up the full screen
  },
  sideBar: {
    flex: 2, // SideBar takes up 2/10 of the width
    backgroundColor: "#f4f4f4",
  },
  mainContent: {
    flex: 8, // Main content takes up 8/10 of the width
    backgroundColor: "#fff",
  },
});

export default Dashboard;
