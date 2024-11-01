import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllChat,
  setReceiverId,
  setSenderId,
} from "../../Reducers/UiReducer";

const FetchAllUser = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { senderId, receiverId } = useSelector((state) => state.ui);
  const [users, setUsers] = useState([]);
  const backendUrl = "http://192.168.29.107:8080/api/v1/user/alluser";
  const backendUrl_2 = "http://192.168.29.107:8080/api/v1/message/getptmessage";

  const fetchDetails = async () => {
    try {
      const response = await axios.get(backendUrl, {
        headers: { "Content-Type": "application/json" },
      });
      const data = response.data.allUsers;
      setUsers(data);
      console.log("data", data);
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.error(
        "Fetch Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handlePtMess = async (receiverid) => {
    try {
      const response = await axios.post(
        backendUrl_2,
        {
          sender_id: senderId,
          receiver_id: receiverid,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      const data = response.data.data; // Extract data correctly
      console.log("message", data);
      console.log("sender", senderId);
      console.log("receiver", receiverId);

      dispatch(setAllChat(data));
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.error(
        "Login Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleBoxCLick = (item) => {
    dispatch(setReceiverId(item.id));

    handlePtMess(item.id);
    navigation.navigate("MessageBox");
  };
  return (
    <View>
      {users.map((item, i) => (
        <TouchableOpacity
          onPress={() => handleBoxCLick(item)}
          key={i}
          style={styles.userContainer}
        >
          <View>
            <Text>
              {item.name} {item.id} <View style={styles.dot}></View>
            </Text>
          </View>
          <View>
            <Text>Type Message</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 8,
    width: 8,
    backgroundColor: "green",
    borderRadius: 12.5,
  },
  userContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#b9b9b9",
    padding: 10,
  },
});

export default FetchAllUser;
