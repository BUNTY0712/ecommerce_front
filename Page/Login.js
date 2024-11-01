import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { setReceiverId, setSenderId } from "../Reducers/UiReducer";

const Login = () => {
  const backendUrl = "http://192.168.29.107:8080/api/v1/user/login";
  const navigation = useNavigation(); // Initialize useNavigation
  const dispatch = useDispatch();
  const { id, newId, senderId } = useSelector((state) => state.ui);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}`,
        { name, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const data = response.data;

      if (data.success) {
        dispatch(setSenderId(data.user.id));
        console.log("senderId", senderId);
        navigation.navigate("Dashboard");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.error(
        "Login Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Current ID: {id}</Text>
        <Text style={styles.infoText}>New ID: {newId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#007BFF",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
  },
});

export default Login;
