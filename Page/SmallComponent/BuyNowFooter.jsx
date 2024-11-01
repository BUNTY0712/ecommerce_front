import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../Reducers/UiReducer';
import axios from 'axios';

const BuyNowFooter = () => {
  const { singledata, cartitems } = useSelector((state) => state.ui);
  const dispatch = useDispatch(); // Don't forget to import this
  const navigation = useNavigation();


const handleAddToCart = async () => {
  try {
    const { data } = await axios.post('http://192.168.29.107:8080/api/v1/cart/addtocart', {
      productId: singledata._id, // Replace with a valid product ID
      userId: "66d81f001f97f3da6aed1b4b" // Replace with a valid user ID
    });
const cartDetails = data.data.items
    console.log("data", data.data.items)
    dispatch(setCartItems(cartDetails));
    navigation.navigate("AddToCart");
  } catch (error) {
    console.error("Error adding to cart:", error.message);
  }
};




  return (
      <View style={styles.container}>
          <View style={styles.row}>
             <TouchableOpacity onPress={handleAddToCart} style={styles.buttoncart} >
            <Text style={styles.buttoncartText}>Add to cart</Text>
          </TouchableOpacity>
        
             <TouchableOpacity  style={styles.buttonbuy} >
            <Text style={styles.buttonbuyText}>Buy Now</Text>
          </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    backgroundColor: "white", // Corrected property name
    height: 60, // Fixed height for footer
    width: '100%', // Full width of the screen
    position: 'absolute', // Position footer at the bottom
    bottom: 0, // Stick to the bottom of the screen
    // justifyContent: 'center', 
    // alignItems: 'center', 
    zIndex: 5, // Ensure the footer stays on top of other elements
    borderTopWidth: 1, // Optional: top border for footer
        borderTopColor: '#ccc', // Optional: color for top border
        // padding: 8,
        
    
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingHorizontal: 10,
        alignItems: 'center',
        // paddingTop: 10
        
    },
    home: {
        textAlign: "center",
        
    },
  text: {
    fontSize: 12, // Adjusted font size for readability
    color: '#000', // Text color
    // marginTop: 5,
    },
    buttoncartText: {
       color: 'black',
        fontSize: 18,
       fontWeight: "500",
        textAlign: "center",
    paddingTop: 15
    },
    buttonbuyText: {
      color: 'white',
        fontSize: 18,
       fontWeight: "500",
        textAlign: "center",
    paddingTop: 15
  },
   buttonText: {
    color: '#FFFFFF',
       fontSize: 16,
    textAlign: "center"
    },
    buttoncart: {
        width: "50%",
        backgroundColor: 'white',
       height: 60
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 5,
    },
     buttonbuy: {
        width: "50%",
        backgroundColor: '#007BFF',
       height: 60
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 5,
  },
});

export default BuyNowFooter;
