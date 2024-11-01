import { View } from "react-native";
import React from "react";
import ChatHeader from "./SmallComponent/ChatHeader";
import ChatMsg from "./SmallComponent/ChatMsg";
import SendMsg from "./SmallComponent/SendMsg";

const MessageBox = () => {
  return (
    <View>
      <View>
        <ChatHeader />
      </View>
      <View>
        <ChatMsg />
      </View>
      <View>
        <SendMsg />
      </View>
    </View>
  );
};

export default MessageBox;
