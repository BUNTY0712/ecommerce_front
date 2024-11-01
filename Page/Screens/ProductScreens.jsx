import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import product1 from "../../Page/assets/product1.png"
import { getImgUrl, getRating } from '../utils/helper';
import { ProductData } from '../data/ProductData';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../ReusableComponent/Header';
import Footer from '../SmallComponent/Footer';
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { setSingleData } from '../../Reducers/UiReducer';


const ProductScreens = () => {
  const { categoryproduct } = useSelector((state) => state.ui)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <>
    <Header/>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text>Price and other details may vary based on product size and color.</Text>

      {/* Check if products array is empty */}
      {categoryproduct?.length > 0 ? (
        categoryproduct.map((item, i) => (
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
      <View style={styles.emptycart}>
                            <View>
                            <Text style={styles.emoji}> <Entypo name="emoji-sad" size={100} color="grey" /></Text>
                            <Text>Oops no products found </Text>
                            </View>
                        
                        </View>
      )}
      </ScrollView>
      <Footer/>
    </>
  )
}

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
  tagline: {
    fontSize: 11,
    color: 'grey'
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15
  },
  productImgSection:{
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center'
  },
  productDetailSection: {
    width: '60%',
    padding: 10
  },
  productImg: {
    height: 150,
    width: '100%',
    resizeMode: 'containe'
  },
  sponsered: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 5
  },
  productName: {
     fontSize: 12,
    color: 'black',
    lineHeight: 18
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
    textDecorationLine: 'line-through'
  },
  cashback: {
    fontSize: 9,
    marginVertical: 2,
  },
  noproducts:{
    fontWeight: "500",
    textAlign: "center",
    marginTop: 50,
    fontSize: 15
  },
   emptycart: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
  },
  emoji: {
     marginLeft: 25
   }
})

export default ProductScreens