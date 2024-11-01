import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import amazon_pay from "../../Page/assets/amazon_pay.jpeg" 
import send_money from "../../Page/assets/send_money.jpeg" 
import pay_bill from "../../Page/assets/pay_bill.png" 
import scan from "../../Page/assets/scan.jpeg" 
import shopping from "../../Page/assets/shopping.jpeg" 
import { RecentSearchData } from '../data/RecentSearchData'
import { getRatingBuyNow } from '../utils/helper'
const SimilarProduct = () => {
  return (
      <>
       <Text style={styles.tittle}>Similar Products</Text>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
              style={styles.container}
              contentContainerStyle={{paddingRight: 20}}
          >
              {RecentSearchData.map((item, i) => (
                  
              <View key={i} style={styles.outerContainer}>
                  <Image source={item.image} style={styles.serviceImg} />
                      {/* <Text style={styles.recentSearch}>{item.title}</Text> */}
                      <View><Text style={styles.prodtittle}>Kurti with design work </Text></View>
                      <View style={styles.ratingDetails}>
              <View >{getRatingBuyNow(3.6)}</View>
              <Text style={styles.ratingcolor}>4.1</Text>

                      </View>
                          <View style={styles.row}>
                <Text style={styles.price}>₹ 15</Text>
                <Text style={styles.mrp}>M.R.P</Text>
                <Text style={styles.crossout}>₹ 1500</Text>
              </View>
              </View>
              ))}
             

              
          </ScrollView>
      </>
  )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        paddingHorizontal: 0,
        marginBottom: 70
        
    },
    tittle: {
        fontSize: 17,
        fontWeight: '500',
        color: 'black',
        padding: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        // justifyContent: "center"
    },
    serviceContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        elevation: 5,
        marginLeft: 8,
        
    },

    imgStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    innerContainer: {
        padding: 10,
        alignItems: "center",
        paddingTop: 15,
        
    },
    title: {
        fontSize: 10,
        color: "black"
    },
    serviceImg: {
        width: "100%",
        height: 130
    },
    outerContainer: {
        backgroundColor: "white",
        marginLeft: 8,
        

        borderRadius: 5,
        elevation: 5,
        padding: 5,
        width: 180,
        marginBottom: 8
    },
    recentSearch: {
        fontSize: 13,
        color: 'black',
        marginBottom: 8,
    },
    prodtittle: {
        fontSize: 15,
    marginTop: 10
    },
    ratingcolor: {
         fontSize: 12,
        color: "purple"
    },
     ratingDetails: {
        flexDirection: "row",
        marginTop: 5,
        alignItems: "center",
        gap: 5
    },
      price: {
    fontSize: 15,
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

})

export default SimilarProduct