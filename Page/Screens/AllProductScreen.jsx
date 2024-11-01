import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import product1 from "../../Page/assets/product1.png";
import { getallproducts, getImgUrl, getRating } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../SmallComponent/Footer';
import Header from '../ReusableComponent/Header';
import { setSingleData } from '../../Reducers/UiReducer';

const AllProductScreen = () => {
  const dispatch = useDispatch();
  const { senderId, receiverId, allproduct} = useSelector((state) => state.ui);
  const [products, setProducts] = useState([]);
  const navigation = useNavigation()


  // by dispatch get 
  // useEffect(() => {
  // getallproducts(dispatch).catch((error) => {
  //   console.error("Error in fetching products:", error);
  // });
  // }, [dispatch]);
  
  const handleSubmit = async (dispatch) => {
getallproducts(dispatch).catch((error) => {
    console.error("Error in fetching products:", error);
  });
  }


  // by useState get 
  // useEffect(() => {
  //   getallproducts(setProducts).catch((error) => {
  //     console.error("Error in fetching products:", error);
  //   });
  // }, []);

  return (
    <>
      <Header/>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text>Price and other details may vary based on product size and color.</Text>

      {/* Check if products array is empty */}
      {allproduct?.length > 0 ? (
        allproduct.map((item, i) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate("BuyNow"); 
            dispatch(setSingleData(item))
          }} key={i} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image style={styles.productImg} source={{ uri: getImgUrl(item.productImg) }} />
              {/* <Image style={styles.productImg} source={product1} /> */}
            </View>

            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productTitle || "No Title"}</Text>


              <View style={styles.row}>
  <Text style={styles.rating}>{item.productRating}</Text>
  {/* Wrap getRating in a View */}
  {getRating(item.productRating)}
  <Text style={styles.ratingCount}>{item.productRatingCount}</Text>
</View>

              <View style={styles.row}>
                <Text style={styles.price}>₹ {item.productDiscountPrice}</Text>
                <Text style={styles.mrp}>M.R.P</Text>
                <Text style={styles.crossout}>₹ {item.productActualPrice}</Text>
              </View>

              <Text style={styles.cashback}>Up to 5% cashback with Amazon Pay Credit card</Text>
              <Text style={styles.cashback}>Free Delivery by {item.productDeliveryBy}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
          <Text>No products available</Text>
      )}
      </ScrollView>
      <Footer/>
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15,
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  productImg: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  sponsored: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 5,
  },
  productName: {
    fontSize: 12,
    color: 'black',
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: '#017185',
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    color: '#000000',
  },
  mrp: {
    fontSize: 10,
    color: 'grey',
    marginHorizontal: 5,
  },
  crossout: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {
    fontSize: 9,
    marginVertical: 2,
  },
});

export default AllProductScreen;
