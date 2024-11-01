import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Page/Login";
import Dashboard from "./Page/Dashboard";
import MessageBox from "./Page/MessageBox";
import ImageUpload from "./Page/Try/ImageUpload";
import ShortImage from "./Page/Try/ShortImage";
import HomeScreen from "./Page/Screens/HomeScreen";
import ProductScreens from "./Page/Screens/ProductScreens";
import ProductCreate from "./Page/Form/ProductCreate";
import AllProductScreen from "./Page/Screens/AllProductScreen";
import BuyNow from "./Page/Screens/BuyNow";
import AddToCart from "./Page/Screens/AddToCart";
import OrderSummery from "./Page/Screens/OrderSummery";
import EmailSender from "./Page/Screens/EmailSender";

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <Stack.Screen name="EmailSender" component={EmailSender} />

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="OrderSummery" component={OrderSummery} />
          <Stack.Screen name="AddToCart" component={AddToCart} />
          <Stack.Screen name="BuyNow" component={BuyNow} />
          <Stack.Screen name="ProductCreate" component={ProductCreate} />
          <Stack.Screen name="AllProductScreen" component={AllProductScreen} />
          <Stack.Screen name="ProductScreens" component={ProductScreens} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MessageBox" component={MessageBox} />
          <Stack.Screen name="ShortImage" component={ShortImage} />
          <Stack.Screen name="ImageUpload" component={ImageUpload} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default MainRouter;
