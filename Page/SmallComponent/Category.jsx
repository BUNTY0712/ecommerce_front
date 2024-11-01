import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import surf from "../../Page/assets/surf.png";
import { Categories } from '../data/Categories';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getcategoryproducts } from '../utils/helper';
import { useDispatch } from 'react-redux';

const Category = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [tittle, setTitle] = useState("");

  const handleSubmit = async (tittle) => {
    try {
      console.log("Fetching products...");
      await getcategoryproducts(dispatch, navigation, tittle);
    } catch (error) {
      console.error("Error in fetching products:", error);
    }
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.container}>
      {Categories.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.category}
          onPress={() => handleSubmit(item.tittle)}  // Corrected function call
        >
          <Image source={item.image} style={styles.imgStyle} />
          <Text style={styles.title}>{item.tittle}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFFFF"
  },
  imgStyle: {
    height: 50,
    width: 50
  },
  title: {
    fontSize: 10,
    color: '#2c4341'
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center"
  }
});

export default Category;
