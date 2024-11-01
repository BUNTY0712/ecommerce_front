import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
// const { height, width } = Dimensions.get("window");

const SideBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.images}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpX6V5vW3sw6xZd0OojjdzPVBNQxZOR8iqALSVhkCtmGXsgW9IDx6o2MFEZAsMlTx0BQ&usqp=CAU",
          }}
          // Set width and height according to your needs
          resizeMode="cover" // You can also use 'contain', 'stretch', etc.
        />
      </View>
      <View>
        <Ionicons
          style={styles.setting}
          name="settings"
          size={30}
          color="#ffff"
        />
      </View>

      <View style={styles.divlogout}>
        <Ionicons
          style={styles.logout}
          name="log-out-outline"
          size={30}
          color="#ffff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: height,
    width: 70,
    height: 900,
    backgroundColor: "#0a0a0a",
  },
  images: {
    width: 50,
    height: 50,
    marginTop: 10,
    // padding: 10,
    alignSelf: "center",
  },
  setting: {
    textAlign: "center",
    marginTop: 30,
  },
  logout: {
    textAlign: "center",
    marginTop: 30,
  },
  divlogout: {
    marginTop: 500,
  },
});

export default SideBar;
