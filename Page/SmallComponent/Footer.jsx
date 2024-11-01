import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../Reducers/UiReducer';

const Footer = () => {
  const { singleData,cartitems, mainId  } = useSelector((state) => state.ui)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  // const handleAddToCart = () => {
  // dispatch(setCartItems([...cartitems, singleData])); 
  // navigation.navigate("AddToCart");
  // };
  
  
  const handleAddToCart = async () => {
     navigation.navigate("AddToCart");
  };
  

  const handleRemoveFromCart = () => {
  // Assuming singleData has an ID or unique property for comparison
  const updatedCartItems = cartitems.filter(item => item.id !== singleData.id);

  dispatch(setCartItems(updatedCartItems)); // Dispatch the updated cart array
  navigation.navigate("AddToCart");
};


  return (
      <View style={styles.container}>
          <View style={styles.row}>
              <View >
      <AntDesign style={styles.home} name='home' size={24} color="#000" />
      <Text style={styles.text}>Home</Text>
        </View>
         <TouchableOpacity onPress={() => navigation.navigate('ProductCreate')} >
      <FontAwesome style={styles.home} name='user-secret' size={24} color="#000" />
      <Text style={styles.text}>Admin</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAddToCart}>
      <FontAwesome style={styles.home} name='opencart' size={24} color="#000" />
      <Text style={styles.text}>Cart</Text>
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
    padding: 8
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    home: {
        textAlign: "center",
        
    },
  text: {
    fontSize: 12, // Adjusted font size for readability
    color: '#000', // Text color
    marginTop: 5,
  }
});

export default Footer;
