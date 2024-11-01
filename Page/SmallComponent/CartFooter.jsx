import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
const footerheight = Dimensions.get('window').height;
console.log("footerheight", footerheight)
const CartFooter = () => {
  const { bill } = useSelector((state) => state.ui);
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate("OrderSummery");
  }
  return (
      <View style={styles.container}>
          <View style={styles.row}>
             <TouchableOpacity style={styles.buttoncart} >
          <Text style={styles.buttoncartText}>₹ {bill }</Text>
          </TouchableOpacity>
        
             <TouchableOpacity onPress={handleSubmit} style={styles.buttonbuy} >
            <Text style={styles.buttonbuyText}>Place Order</Text>
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
        bottom: 0, 
    top: footerheight - 60,
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

export default CartFooter;
