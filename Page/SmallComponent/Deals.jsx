import { View, Text, StyleSheet, Image} from 'react-native'
import React, { useDebugValue } from 'react'
import fashwash from "../../Page/assets/fashwash.jpeg" 
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getallproducts } from '../utils/helper'

const Deals = () => {
  const navigation = useNavigation()
  const { allproduct } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    try {
      console.log("Fetching products...");
      await getallproducts(dispatch, navigation); // Ensure getallproducts is not using hooks
    } catch (error) {
      console.error("Error in fetching products:", error);
    }
      
  }
  return (
    <View style={styles.container}>
          <Text style={styles.tittle}>Recommended deal for you</Text>
          <Image source={fashwash} style={styles.imgStyle} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>

        <TouchableOpacity style={styles.offDealBtn}>
          <Text style={styles.offDeal}>18% off</Text>
        </TouchableOpacity>
        <Text style={styles.Deal}>Deal</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.discountPrice}>₹ 1,549.00</Text>
        <Text style={styles.mrp}>M.R.P</Text>
          <Text style={styles.actualPrice}>₹ 1895.00</Text>
        </View>
        <Text style={styles.productName}>Nykaa Fash Wash Gentle Skin Cleanser for all skin type </Text>
         <TouchableOpacity onPress={ handleSubmit}>
          <Text style={styles.allDeals}> See all deals </Text>
        </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
    marginTop: 20,
   padding: 10
    },
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "black"
    },
    imgStyle: {
        height: 200,
      width: "100%",
        marginVertical: 10,
  },
  bottomSection: {
      paddingHorizontal: 10,
  },
  offDealBtn: {
    backgroundColor: '#be0201',
    width: 60,
    alignItems: "center",
    padding: 5,
    borderRadius:3,
  },
  offDeal: {
    color: 'white',
    fontSize: 12,
  },
  Deal: {
    color: '#be0201',
    fontWeight: '600',
    marginLeft: 6,
      fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: "center"
  },
  discountPrice: {
    color: 'black',
    fontSize: 16,
    marginVertical: 5
  },
  mrp: {
    fontSize: 10,
    marginHorizontal: 5
  },
  actualPrice: {
    fontSize: 10,
    textDecorationLine: 'line-through'
  },
  productName: {
    color: 'black',
    fontSize: 14,
  },
  allDeals: {
    color: "#017185",
    fontSize: 14,
    marginVertical: 10,
  }
})

export default Deals;