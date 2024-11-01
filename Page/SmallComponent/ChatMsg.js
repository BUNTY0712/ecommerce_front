import { View, Text, StyleSheet, Alert, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllChat } from "../../Reducers/UiReducer";

const ChatMsg = () => {
  const backendUrl = "http://192.168.29.107:8080/api/v1/message/getallmessage";
  const dispatch = useDispatch();
  const { allchat } = useSelector((state) => state.ui);

  const [chat, setChat] = useState([]);

  const fetchallmessage = async () => {
    try {
      const response = await axios.get(backendUrl, {
        headers: { "Content-Type": "application/json" },
      });

      const data = response.data;
      console.log("message", data.allmessage);
      dispatch(setAllChat(data.allmessage));
      setChat(data.allmessage);
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.error(
        "Fetch Error",
        error.response ? error.response.data : error.message
      );
    }
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     fetchallmessage();
  //   }, 500);

  //   return () => clearInterval(intervalId);
  // }, [dispatch]);

  return (
    <View style={styles.container}>
      {allchat.map((item, i) => (
        <View
          key={i}
          style={[
            styles.msgcontent,
            item.id == 1 ? { marginLeft: 0 } : { marginLeft: 305 },
          ]}
        >
          <Text style={styles.text}>{item.message}</Text>
          {item.file && (
            <Image
              source={{ uri: `http://192.168.29.107:8080${item.file}` }}
              style={styles.image} // You can define image styles
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 520,
    borderColor: "black",
    overflowY: "scroll", // Enable vertical scrolling
  },
  image: {
    width: 100,
    height: 50,
  },
  msgcontent: {
    padding: 5,
    backgroundColor: "white",
    width: 50,
    margin: 20,
    textAlign: "center",
    fontSize: 10,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y)
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // Elevation for Android shadow
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default ChatMsg;
